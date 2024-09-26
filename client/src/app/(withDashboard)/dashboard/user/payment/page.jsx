"use client";

import PaymentForm from "@/components/form/paymentForm/PaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

// todo add publishable key

const stripePublishableKey = process?.env?.NEXT_PUBLIC_PAYMENT_GETAWAY_KEY;
const stripePromise = loadStripe(stripePublishableKey);

const UserPaymentPage = () => {
  return (
    <div>
      <div>
        <Elements stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      </div>
    </div>
  );
};

export default UserPaymentPage;
