"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import TeamCard from "@/components/ui/TeamCard";

const teamData = [
  {
    id: 1,
    name: "Jhon doe",
    role: "CEO",
  },
  {
    id: 2,
    name: "William Smith",
    role: "Web Developer",
  },
  {
    id: 3,
    name: "Steve Jobs",
    role: "SEO Expert",
  },
  {
    id: 4,
    name: "SAKIB AHMED LOSKOR",
    role: "Web Developer",
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

      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-10 mt-16 w-10/12 mx-auto">
        {teamData.map((item) => (
          <TeamCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
