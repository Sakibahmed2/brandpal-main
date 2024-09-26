"use client";

import { useConfirmPaymentMutation } from "@/redux/api/paymentApi";
import { removeOrder } from "@/redux/features/orderSlice";
import { getUserInfo } from "@/utils/getUserInfo";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const userInfo = getUserInfo();
  const [confirmPayment] = useConfirmPaymentMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const myOrder = useSelector((state) => state.orders.orders);
  const totalPrice = myOrder.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/payment/create-payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: totalPrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.data);
      });
  }, [totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("Payment error", error);
      setError(error?.message);
    } else {
      console.log("Payment method", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: userInfo.email,
          },
        },
      });

    if (confirmError) {
      console.log("Error", confirmError);
    } else {
      console.log("Payment intent", paymentIntent);

      if (paymentIntent.status === "succeeded") {
        toast.success("Payment successful");

        // save the payment in database
        const payment = {
          transactionId: paymentIntent.id,
          email: userInfo.email,
          price: totalPrice,
          date: new Date(),
          serviceName: myOrder.map((item) => item.name),
          serviceId: myOrder.map((item) => item.serviceId),
          offer: myOrder.find((item) => item.offer === "40%-off")
            ? "40%-off"
            : "none",
          status: "pending",
        };

        const res = await confirmPayment(payment).unwrap();
        if (res.success) {
          dispatch(removeOrder());
          toast.success(res?.message);
          router.push("/dashboard/user");
        }
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen p-10 ">
      <form
        onSubmit={handleSubmit}
        className=" mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center dark:text-gray-300">
          Complete Your Payment
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Card Details
          </label>
          <div className="border rounded-md p-3 dark:bg-gray-700">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#aab7c4",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
        </div>

        <p className="text-red-500 mb-2 text-sm">{error ? error : ""}</p>
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="custom-outline-btn bg-sky-50 dark:bg-sky-300 border-sky-500 hover:bg-sky-500 w-full"
        >
          Pay now
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
