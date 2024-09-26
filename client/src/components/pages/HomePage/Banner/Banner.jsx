"use client";

import bannerImg from "@/assets/bannerImg.png";
import { useClaimOfferMutation } from "@/redux/api/userApi";
import { getUserInfo } from "@/utils/getUserInfo";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const Banner = () => {
  const userInfo = getUserInfo();
  const [claimOffer] = useClaimOfferMutation();

  const handleClaimOffer = async (offerName) => {
    const toastId = toast.loading("Claiming offer...");

    if (!userInfo?.id) {
      toast.error("Please login to claim the offer", { id: toastId });
    }
    try {
      const res = await claimOffer({
        userId: userInfo?.id,
        offerName,
      }).unwrap();
      if (res?.success) {
        toast.success(res?.message, { id: toastId });
      }
    } catch (err) {
      toast.error(err?.data?.message, { id: toastId });
    }
  };

  return (
    <div className="pt-28 md:pt-40">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="mt-5 md:mt-0 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl w-[250px] lg:w-full font-semibold mx-auto">
            The next level marketing digital{" "}
          </h1>
          <p className="light-text mt-6 mb-7 md:mb-9 w-full max-w-[500px]">
            Make your marketing something show off. And effective strategies
            your need and branding goal
          </p>
          <div className="flex flex-col md:flex-row gap-2 lg:gap-6 w-1/2 lg:w-full">
            <Link href="/service">
              <button className="custom-secondary-btn py-3 md:py-5">
                Get Started
              </button>
            </Link>
            <button
              onClick={() => handleClaimOffer("free-trial")}
              className="custom-primary-btn py-3 md:py-5"
            >
              Try to free trial
            </button>
          </div>
        </div>
        <div>
          <Image
            src={bannerImg}
            width={500}
            height={500}
            alt="Banner image"
            className="lg:w-[500px] w-[300px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
