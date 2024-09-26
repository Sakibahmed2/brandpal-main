import { FileUp, Target, TrendingUp } from "lucide-react";
import Image from "next/image";
import React from "react";
import letsJoinImage from "@/assets/whyChooseUs.png";
import Link from "next/link";

const LetsJoin = () => {
  return (
    <div className="mt-10 md:mt-32 mb-20">
      <p className="text-xl text-primary md:hidden flex justify-center mb-3">
        LET&lsquo;S JOIN
      </p>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center w-full ">
        <div className=" mt-10 md:mt-0">
          <p className="text-xl text-primary hidden md:flex">
            LET&lsquo;S JOIN
          </p>
          <h3 className="text-2xl md:text-4xl font-semibold mt-4 mb-6 text-center">
            Let&rsquo;s create something amazing!
          </h3>
          <Link href={"/service"}>
            <button className="custom-primary-btn py-4">Get Started</button>
          </Link>
        </div>
        <div>
          <Image
            src={letsJoinImage}
            width={500}
            height={500}
            alt="why choose us image"
            className="lg:w-[500px] w-[300px] "
          />
        </div>
      </div>
    </div>
  );
};

export default LetsJoin;
