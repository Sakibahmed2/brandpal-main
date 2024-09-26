import React from "react";
// import aboutImage from "@/assets/about-us-image.jpg";
import aboutImage from "@/assets/images/about us.svg";
import Image from "next/image";
import { CircleArrowRight } from "lucide-react";

const AboutHeader = () => {
  return (
    <div>
      <div className="lg:flex justify-between items-center w-full">
        <div className="md:w-1/2">
          <Image src={aboutImage} height={500} width={500} alt="About Us" />
        </div>

        <div className="lg:w-1/2 mt-4 lg:mt-0">
          <div className="lg:text-left text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold">
              A Bunch of Enthusiastic & Creative Minds
            </h2>
            <p className="light-text mt-4 mb-6">
              Finalizing new corporate ideas, game-plans and strategies for a
              firm.
            </p>
          </div>
          <div className="text-gray-400 flex flex-col space-y-5">
            <p className="flex items-center gap-4 ">
              <CircleArrowRight /> An array of business formulation strategies
            </p>
            <p className="flex items-center gap-4 ">
              <CircleArrowRight /> Revenue generation and user engagement plans
            </p>
            <p className="flex items-center gap-4 ">
              <CircleArrowRight /> Establishing a strong foothold in the
              industry
            </p>
            <p className="flex items-center gap-4 ">
              <CircleArrowRight /> An array of business formulation strategies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
