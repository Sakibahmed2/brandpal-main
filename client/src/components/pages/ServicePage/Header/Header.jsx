import Image from "next/image";
import React from "react";
// import serviceHeaderImg from "@/assets/service-header-image.png";
import serviceHeaderImg from "@/assets/images/service.svg";

const ServiceHeader = () => {
  return (
    <div>
      <div className="md:flex justify-between items-center w-full">
        <div className="lg:w-1/2">
          <Image src={serviceHeaderImg} width={500} height={500} alt="hero" />
        </div>

        <div className="lg:w-1/2 ">
          <div className="text-center lg:text-left ">
            <h2 className="lg:text-4xl md:text-4xl text-3xl font-semibold">
              Engaging in Fruitful Partnerships for a Successful Outcome
            </h2>
            <p className="light-text mt-4 mb-6">
              Our team of experts is dedicated to providing you with the best
              digital marketing services to help your brand stand out from the
              competition. With our innovative strategies and cutting-edge
              technology, we can help you achieve your business goals and drive
              growth.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <button className="custom-secondary-btn py-5 ">
              Discover more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeader;
