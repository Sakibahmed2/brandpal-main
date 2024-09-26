"use client";

import cn from "@/libs/cn";
import { MoveRight } from "lucide-react";
import { useState } from "react";

const ServiceCard = ({ service }) => {
  const { title, description, icon } = service;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={cn(
        "w-full max-w-[350px] md:h-[412px] mx-auto bg-white rounded-2xl duration-300 ease-in-out",
        isHovered ? "shadow-2xl" : "shadow-md"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "p-10 md:p-6  flex flex-col justify-center items-center transition-colors duration-300 ease-in-out",
          isHovered ? "text-primary" : "text-secondary"
        )}
      >
        <p>{icon}</p>
        {/* <Image
          src={icon}
          width={50}
          height={50}
          alt="img"
          className="text-red-500"
        /> */}
        <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mt-16 mt-8">
          {title}
        </h3>
        <p
          className={cn(
            "md:text-xl transition-colors duration-300 ease-in-out",
            isHovered ? "text-black" : "light-text"
          )}
        >
          {description}
        </p>
        <p className="mt-14">
          <MoveRight size={32} />
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
