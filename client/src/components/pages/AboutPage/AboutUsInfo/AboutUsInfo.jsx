import React from "react";
// import aboutUsInfo from "@/assets/about-us-info.jpg";
import aboutUsInfo from "@/assets/images/about-us-info.png";
import Image from "next/image";

const AboutUsInfo = () => {
  return (
    <div className="mt-32">
      <p className="text-xl text-primary md:hidden flex justify-center mb-3">
        About us
      </p>
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full gap-10">
        <div className="lg:w-1/2">
          <p className="text-xl text-primary hidden md:flex">About us</p>
          <h3 className="text-2xl md:text-4xl font-semibold text-center lg:text-left">
            Why BRANDPAL Should Be Your Top Choice
          </h3>
          <p className="light-text mt-4 mb-6">
            Choose BRANDPAL for digital success where expertise and innovation
            converge to elevate your business. Partner with us to unlock
            solutions that drive results and propel your brand forward.
          </p>
          <div className="flex gap-2 lg:gap-5">
            <div className="bg-primary/10 p-3 lg:p-5 rounded-md shadow-sm">
              <p className="text-3xl lg:text-4xl font-semibold">12+</p>
              <p className="light-text mt-2">Years of experience</p>
            </div>
            <div className="bg-primary/10 p-3 lg:p-5 rounded-md shadow-sm">
              <p className="text-3xl lg:text-4xl font-semibold">10k+</p>
              <p className="light-text mt-2">Completed Projects</p>
            </div>
            <div className="bg-primary/10 p-3 :lg:p-5 rounded-md shadow-sm">
              <p className="text-3xl lg:text-4xl font-semibold">5k+</p>
              <p className="light-text mt-2">Trusted Customers</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <Image
            src={aboutUsInfo}
            height={500}
            width={500}
            alt="About us info"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsInfo;
