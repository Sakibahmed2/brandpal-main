"use client";

import { getUserInfo } from "@/utils/getUserInfo";
import { toast } from "sonner";

const offers = [
  {
    id: 1,
    title: "Limited Time Offer",
    description:
      "Get a 40% discount for 1 year! Enjoy exclusive benefits and top-notch support.",
    offerName: "40%-off",
  },
  {
    id: 2,
    title: "Free Trial",
    description:
      "Sign up today and get a 7-day free trial of our services. No credit card required!",
    offerName: "free-trial",
  },
];

const OfferSection = () => {
  return (
    <div className="mt-16">
      <div className="container mx-auto">
        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl lg:text-4xl font-semibold mb-4">
            Don&rsquo;t Miss Out!
          </h2>
          <p className="text-lg mb-6 text-gray-400 w-full max-w-[500px] mx-auto">
            Take advantage of these special offers before they are gone. Enhance
            your experience with our premium services.
          </p>
        </div>

        {/* Offer Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-gray-100 rounded-xl shadow-lg  flex flex-col"
            >
              <div className="bg-black text-center p-4 rounded-t-xl">
                <h2 className="text-xl lg:text-2xl text-white">
                  {offer.title}
                </h2>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <p className="text-lg">{offer.description}</p>
                <button className="custom-outline-btn border-black hover:bg-black mt-5 font-semibold py-3">
                  Claim now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
