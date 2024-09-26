"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const CheckoutButton = ({ userInfo }) => {
  const router = useRouter();

  const handleProceedToCheckout = () => {
    if (!userInfo?.id) {
      Swal.fire({
        title: "Please login",
        text: "You need to login first to order this product",
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
      // If already logged in, redirect to payment
      router.push("/dashboard/user/payment");
    }
  };

  // Automatically redirect to payment page after successful login
  useEffect(() => {
    if (userInfo?.id) {
      router.push("/dashboard/user/payment");
    }
  }, [userInfo, router]);

  return (
    <button
      className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleProceedToCheckout}
    >
      Proceed to Checkout
    </button>
  );
};

export default CheckoutButton;
