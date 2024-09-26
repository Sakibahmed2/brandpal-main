"use client";

import Container from "@/components/ui/Container";
import cn from "@/libs/cn";
import { removeOrder } from "@/redux/features/orderSlice";
import { getUserInfo } from "@/utils/getUserInfo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const CartPage = () => {
  const userInfo = getUserInfo();
  const router = useRouter();
  const cartItems = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleProceedToCheckout = () => {
    if (!userInfo?.id) {
      Swal.fire({
        title: "Please login",
        text: "You wan to login first to order this product",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          return router.push("/login");
        }
      });
    } else {
      router.push("/dashboard/user/payment");
    }
  };

  return (
    <Container className="pt-20 pb-20">
      <div className="py-10 mx-4 lg:mx-0 mt-5 rounded-t-xl">
        <div className="flex flex-col lg:flex-row justify-between items-center border-b mb-10 pb-5">
          <h2 className="text-2xl lg:text-3xl font-semibold">My Cart items</h2>
          <div className="flex gap-4">
            <button
              onClick={() => dispatch(removeOrder())}
              className="custom-outline-btn bg-red-100 border-red-500 hover:bg-red-500 lg:mt-0 mt-2"
            >
              Delete items
            </button>

            <button
              onClick={handleProceedToCheckout}
              className="custom-outline-btn bg-primary/10 border-primary hover:bg-primary lg:mt-0 mt-2"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>

        <div className="space-y-5">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-4 "
            >
              <div>
                <p className="font-semibold text-xl text-primary w-64 lg:w-full">
                  {item.title}
                </p>
                <p className="light-text w-64 lg:w-full">{item.description}</p>
                <p className="light-text">Duration: {item.time}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-lg">$ {item.price}</p>
              </div>
            </div>
          ))}

          {cartItems.length === 0 && (
            <div className="flex flex-col justify-center items-center space-y-5">
              <p className="font-semibold text-2xl lg:text-4xl text-gray-400">
                No items in the cart
              </p>
              <Link href={"/service"}>
                <button className="custom-outline-btn bg-primary/10 border-primary hover:bg-primary ">
                  Buy services
                </button>
              </Link>
            </div>
          )}
        </div>

        <div
          className={cn(
            "mt-10",

            cartItems.length === 0 && "hidden"
          )}
        >
          <hr className="border-gray-500 mb-4" />
          <div className="flex justify-between items-center">
            <p className="font-semibold text-xl">Total Price</p>
            <p className="font-semibold text-lg ">$ {totalPrice}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
