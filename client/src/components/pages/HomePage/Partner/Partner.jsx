import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";
import google from "@/assets/google.png";
import sublimeText from "@/assets/sublimeText.png";
import blender from "@/assets/blender.png";
import soundCloud from "@/assets/sound_cloud.png";
import mi from "@/assets/mi.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Partner = () => {
  return (
    <div className="md:mt-32 mt-10">
      <div className="mx-auto text-center w-[140px] md:w-full">
        <SectionTitle
          title={"PARTNER"}
          description={"Our brand collaboration"}
        />
      </div>

      {/* company logo */}
      <div className="mt-10 md:mt-24">
        <Marquee direction="right" className="flex items-center gap-4 py-4">
          {/* SoundCloud Logo */}
          <Image
            src={soundCloud}
            width={100}
            height={100}
            alt="SoundCloud logo"
            className="md:w-24 w-16 lg:mx-20 mx-8"
          />

          {/* Google Logo */}
          <Image
            src={google}
            width={100}
            height={100}
            alt="Google logo"
            className="md:w-24 w-16 lg:mx-20 mx-8"
          />

          {/* Sublime Text Logo */}
          <Image
            src={sublimeText}
            width={100}
            height={100}
            alt="Sublime Text logo"
            className="md:w-24 w-16 lg:mx-20 mx-8"
          />

          {/* Blender Logo */}
          <Image
            src={blender}
            width={100}
            height={100}
            alt="Blender logo"
            className="md:w-24 w-16 lg:mx-20 mx-8"
          />

          {/* MI Logo */}
          <Image
            src={mi}
            width={100}
            height={100}
            alt="MI logo"
            className="md:w-24 w-16 lg:mx-20 mx-8"
          />
        </Marquee>
      </div>
    </div>
  );
};

export default Partner;
