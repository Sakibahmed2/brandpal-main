"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import React, { useState } from "react";
import ashiqurzamanImg from "@/assets/team/ashiquramman.png";
import shaounImg from "@/assets/team/shaoun.png";
import minhazImg from "@/assets/team/minhaz.png";
import sakibImg from "@/assets/team/sakib.png";
import Image from "next/image";
import cn from "@/libs/cn";
import TeamCard from "@/components/ui/TeamCard";

const teamData = [
  {
    id: 1,
    name: "SM ASHIQURZAMMAN",
    role: "CEO & Founder",
    image: ashiqurzamanImg,
  },
  {
    id: 2,
    name: "MD REJUANUL ISLAM SHAOUN",
    role: "Web Developer",
    image: shaounImg,
  },
  {
    id: 3,
    name: "MD MINHAZUL ABDIN",
    role: "Web Developer",
    image: minhazImg,
  },
  {
    id: 4,
    name: "SAKIB AHMED LOSKOR",
    role: "Web Developer",
    image: sakibImg,
  },
];

const OurTeam = () => {
  return (
    <div className="lg:mt-32 mt-20">
      <div className="text-center">
        <SectionTitle
          title={"Exceptional Team"}
          description={"Meet with our team"}
        />
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-10 mt-16 w-10/12 mx-auto">
        {teamData.map((item) => (
          <TeamCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
