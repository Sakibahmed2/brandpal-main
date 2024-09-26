import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import { MoveRight, PanelsTopLeft, SquarePen, Video } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Content Writing",
    description: "Create interesting and innovative content",
    icon: <SquarePen className="size-8 md:size-16" />,
  },
  {
    id: 2,
    title: "Video Producing",
    description:
      "Improve your video online. And grow your marketing with video. ",
    icon: <Video className="size-8 md:size-16" />,
  },
  {
    id: 3,
    title: "Web Development",
    description: "Improve your website, and app to make it easier",
    icon: <PanelsTopLeft className="size-8 md:size-16" />,
  },
];

const WhatWeDo = () => {
  return (
    <div className="mt-40">
      <div className="text-center">
        <SectionTitle
          title={"WHAT WE DO?"}
          description={"Our Digital Marekting Expertice"}
        />
      </div>

      <div className="mt-10 md:mt-28 md:flex justify-center items-center gap-5 space-y-10 md:space-y-0">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-5">
        <Link href={"/service"}>
          <button className="custom-secondary-btn flex items-center gap-5 py-3">
            See all <MoveRight size={24} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WhatWeDo;
