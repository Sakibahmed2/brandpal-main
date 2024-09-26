"use client";

import cn from "@/libs/cn";
import {
  useConfirmPaymentMutation,
  useGetSingleTransactionQuery,
} from "@/redux/api/paymentApi";
import {
  useClaimOfferMutation,
  useGetSingleUserQuery,
} from "@/redux/api/userApi";
import { addOrder } from "@/redux/features/orderSlice";
import { getUserInfo } from "@/utils/getUserInfo";
import getOfferValidation from "@/utils/offferValidation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const ServicesCard = ({ service }) => {
  const dispatch = useDispatch();
  const myOrder = useSelector((state) => state.orders.orders);
  const [offerValidation, setOfferValidation] = useState("");
  const userInfo = getUserInfo();
  const { data } = useGetSingleUserQuery(userInfo?.id);
  const [claimOffer] = useClaimOfferMutation();
  const [confirmPayment] = useConfirmPaymentMutation();
  const { data: userTransactions } = useGetSingleTransactionQuery({
    email: userInfo?.email,
  });

  const userDetails = data?.data;

  const handleAddOrder = () => {
    if (
      service._id ===
      myOrder.find((order) => order.serviceId === service._id)?.serviceId
    ) {
      toast.error("Service already added to cart");
    } else {
      const order = {
        serviceId: service._id,
        name: service.name,
        price:
          userDetails?.offer === "free-trial"
            ? 0
            : service?.offerPrice
            ? service.offerPrice
            : service.price,
        time: service.duration,
        description: service.description,
        offer: userDetails?.offer,
      };
      dispatch(addOrder(order));
      toast.success("Service added to cart");
    }
  };

  const handleFreeTrail = async () => {
    const toastId = toast.loading("Processing free trial...");

    const isUserHaveFreeTrial = userTransactions?.data?.find(
      (item) => item.offer === "free-trial"
    );

    if (isUserHaveFreeTrial?.offer === "free-trial") {
      return toast.error("You already claim a service with free trail offer", {
        id: toastId,
      });
    }

    // save the payment in database
    const payment = {
      transactionId: "N/A",
      email: userInfo.email,
      price: 0,
      date: new Date(),
      serviceName: service.name,
      serviceId: service._id,
      status: "pending",
      offer: "free-trial",
    };

    try {
      const res = await confirmPayment(payment).unwrap();
      console.log(res);
      if (res.success) {
        toast.success("Free trial activated", { id: toastId });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const isOfferValid = getOfferValidation(
      userDetails?.offerStartDate,
      userDetails?.offerEndDate
    );

    if (!isOfferValid.isValid) {
      claimOffer({
        userId: userDetails?.id,
        offerName: "No-offer",
      });
    } else {
      setOfferValidation(isOfferValid.remainingDays);
    }
  }, [userDetails, claimOffer]);

  // useEffect(() => {
  //   const validateOffer = async () => {
  //     if (userDetails?.offer !== "No-offer") {
  //       const isOfferValid = getOfferValidation(
  //         userDetails?.offerStartDate,
  //         userDetails?.offerEndDate
  //       );

  //       console.log(isOfferValid.isValid);

  //       if (isOfferValid.isValid) {
  //         setOfferValidation(isOfferValid.remainingDays);
  //       } else {
  //         try {
  //           await claimOffer({
  //             userId: userDetails?.id,
  //             offerName: "No-offer",
  //           });
  //         } catch (err) {
  //           console.error("Error claiming offer:", err);
  //         }
  //       }
  //     }
  //   };

  //   if (userDetails) {
  //     validateOffer();
  //   }
  // }, [userDetails, claimOffer]);

  return (
    <div className="rounded-md bg-base-100 shadow-sm hover:shadow-lg transition-shadow duration-300 border">
      <div className="card-body">
        <div className="mx-auto lg:mx-0 mb-3 p-2 rounded-md w-20 flex justify-center items-center bg-secondary/10">
          <Image
            src={service.icon}
            width={60}
            height={60}
            alt="service icon"
            className="w-12"
            unoptimized
          />
        </div>
        <hr />

        <h2 className="card-title text-secondary text-center">
          {service.name}
        </h2>
        <p className="text-gray-500">{service.description}</p>
        <ul className="list-disc pl-5 mt-3 text-gray-400">
          {service.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>

        {/* Service time and price */}
        <div className="mt-4">
          <p className=" font-semibold text-gray-600">
            Service Time:{" "}
            <span className="text-primary">{service.duration}</span>
          </p>
          <div>
            <p
              className={cn(
                "font-semibold text-gray-600 flex gap-2 my-1",
                userDetails?.offer === "free-trial" &&
                  offerValidation > 0 &&
                  "line-through"
              )}
            >
              Price:{" "}
              {!service?.offerPrice ? (
                <span className="text-primary">${service.price}</span>
              ) : (
                <div className="flex gap-4">
                  <span className="text-red-500 line-through">
                    ${service.price}
                  </span>{" "}
                  <span className="text-primary">${service.offerPrice}</span>
                </div>
              )}
            </p>
            {userDetails?.offer === "free-trial" && offerValidation > 0 && (
              <p className="font-semibold text-gray-600 mb-1">
                You have 7 days free trial
              </p>
            )}
          </div>

          {offerValidation > 0 && (
            <p className="font-semibold text-gray-600">
              Offer ends in:{" "}
              <span className="text-primary">{offerValidation} days</span>
            </p>
          )}
        </div>

        {userDetails?.offer === "free-trial" && offerValidation > 0 ? (
          <button
            onClick={handleFreeTrail}
            className="custom-outline-btn bg-secondary/5 border-secondary hover:bg-secondary mt-4"
          >
            Try it free
          </button>
        ) : (
          <button
            onClick={handleAddOrder}
            className="custom-outline-btn bg-secondary/5 border-secondary hover:bg-secondary mt-4"
          >
            Buy service
          </button>
        )}
      </div>
    </div>
  );
};

export default ServicesCard;
