import chooseUsImg from "@/assets/whyChooseUs.png";
import { Check } from "lucide-react";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="mt-32 ">
      <p className="text-xl text-primary md:hidden flex justify-center ice">
        WHY CHOOSE US?
      </p>
      <div className="md:flex justify-between items-center w-full mx-auto">
        <div className="lg:w-[680px] mx-auto">
          <Image
            src={chooseUsImg}
            width={500}
            height={500}
            alt="why choose us image"
          />
        </div>
        <div className="lg:w-[451px] mx-auto mt-10 md:mt-0 text-center lg:text-left">
          <p className="text-xl text-primary hidden md:flex">WHY CHOOSE US?</p>
          <h3 className="text-2xl md:text-4xl font-semibold">
            We Serve Your Digital Objective Better{" "}
          </h3>
          <div>
            <p className="md:text-xl text-gray-400 mt-6 mb-7 md:mb-9 w-full max-w-[420px]">
              Were experts with integrated digital strategy, mplementation, and
              management to grow companies across borders
            </p>

            <div>
              <p className="flex items-center gap-4 light-text">
                <Check className="text-secondary" />
                We work differently
              </p>
              <p className="flex items-center gap-4 light-text">
                <Check className="text-secondary" />
                Manage your brand faster
              </p>
              <p className="flex items-center gap-4 light-text">
                <Check className="text-secondary" />
                Provide good facilities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
