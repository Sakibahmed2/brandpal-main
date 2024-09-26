"use client";

import cn from "@/libs/cn";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const TeamCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="border-2 border-zinc-400 rounded-xl p-2 text-center lg:w-[330px] w-[300px] mx-auto">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "mx-auto rounded-lg duration-500 ease-in-out",
          isHovered ? "bg-secondary/50" : "xl:bg-gray-200 bg-secondary/50"
        )}
      >
        <Image
          src={item.image}
          alt={item.name}
          className={cn(
            "mx-auto rounded-lg object-cover h-72 lg:h-80 duration-500 ease-in-out",
            isHovered ? "saturate-100" : "xl:saturate-0"
          )}
        />
      </div>
      <div className="text-center mt-2">
        <h3 className="text-xl font-semibold">{item.name}</h3>
        <p className="light-text mt-2">{item.role}</p>
      </div>

      <div className="flex items-center justify-center gap-8 mt-4 mb-4 ">
        <p>
          <Instagram size={24} />
        </p>
        <p>
          <Linkedin size={24} />
        </p>
        <p>
          <Facebook size={24} />
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
