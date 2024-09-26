import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";
import testimonialImg from "@/assets/testimonial.png";
import userImg from "@/assets/user.png";

const Testimony = () => {
  return (
    <div className="md:mt-32 mt-10">
      <p className="text-xl text-primary md:hidden flex justify-center ice">
        TESTIMONY
      </p>
      <div className="md:flex justify-between items-center w-full ">
        <div className="md:w-1/2">
          <Image
            src={testimonialImg}
            width={720}
            height={720}
            alt="why choose us image"
            className="lg:w-[500px] w-[300px] "
          />
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 ml-4">
          <p className="text-xl text-primary hidden md:flex">TESTIMONY</p>
          <h3 className="text-2xl md:text-4xl font-semibold text-center lg:text-left">
            Our client get a result
          </h3>

          {/* Client reviews */}
          <div className="mt-8  gap-10 relative">
            <div className="absolute left-64 top-5 md:-left-20">
              <Image
                src={userImg}
                width={60}
                height={60}
                alt="user image"
                className="w-11 md:w-16"
              />
            </div>
            <div>
              <p className="md:text-xl md:font-semibold">
                &quot;Very Creative and Professional&quot;
              </p>
              <p className="light-text mt-3 mb-6 text-sm md:w-full w-[240px]">
                Very helpful for my business, also the achievement is very big
                and rising fast. Marketek is very professional and very
                creative. thank you
              </p>
              <p className="text-secondary">Baim, Entrepreneur tahu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
