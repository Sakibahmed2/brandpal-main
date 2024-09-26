import { Check, FileUp, Target, TrendingUp } from "lucide-react";
import Image from "next/image";
import strategyMarketing from "@/assets/StrategyMarketing.png";
import React from "react";

const StrategyMarketing = () => {
  return (
    <div className="mt-10 md:mt-32 mb-20">
      <p className="text-xl text-primary md:hidden flex justify-center mb-3">
        FIND STRATEGY MARKETING
      </p>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full ">
        <div className="w-full max-w-[450px] mt-10 md:mt-0">
          <p className="text-xl text-primary hidden md:flex">
            FIND STRATEGY MARKETING
          </p>
          <h3 className="text-2xl md:text-4xl font-semibold text-center lg:text-left">
            Find your potentional strategy marketing
          </h3>

          <div className="mt-10">
            <div>
              <p className="flex items-center gap-4 text-secondary font-semibold md:text-xl">
                <Target className="text-secondary" />
                Target audience
              </p>
              <p className="pl-10 mt-2 light-text">
                We will upgrade your brand so that the target audience is
                suitable
              </p>
            </div>

            <div className="my-8">
              <p className="flex items-center gap-4 text-secondary font-semibold md:text-xl">
                <FileUp className="text-secondary" />
                Upgrade your design brand
              </p>
              <p className="pl-10 mt-2 light-text">
                We will upgrade your design to be more creative
              </p>
            </div>

            <div>
              <p className="flex items-center gap-4 text-secondary font-semibold md:text-xl">
                <TrendingUp className="text-secondary" />
                High conversation rate
              </p>
              <p className="pl-10 mt-2 light-text">
                We will increase your brand rating
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={strategyMarketing}
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

export default StrategyMarketing;
