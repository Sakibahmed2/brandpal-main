import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";
import ourProductHeader from "@/assets/images/our-product-image.jpg";
import ServicesCard from "@/components/ui/ServicesCard";

import seo from "@/assets/icons/SEO.svg";
import socialMediaMarketing from "@/assets/icons/social-media-marketing.svg";
import emailMarketing from "@/assets/icons/email-marketing.svg";
import payPerClick from "@/assets/icons/pay-per-click.svg";
import contentWriting from "@/assets/icons/content-writing.svg";
import webDevelopment from "@/assets/icons/web-development.svg";
import Link from "next/link";

const services = [
  {
    id: 1,
    icon: seo,
    title: "Search Engine Optimization (SEO)",
    description: "Boost your online presence with our expert SEO services.",
    features: [
      "Keyword Research & Strategy",
      "On-Page & Off-Page Optimization",
      "Technical & Local SEO",
    ],
  },
  {
    id: 2,
    icon: payPerClick,
    title: "Pay-Per-Click Advertising (PPC)",
    description: "Maximize your ROI with our targeted PPC campaigns.",
    features: [
      "Campaign Strategy & Management",
      "Keyword Targeting",
      "A/B Testing & Conversion Tracking",
    ],
  },
  {
    id: 3,
    icon: socialMediaMarketing,
    title: "Social Media Marketing",
    description: "Engage your audience and build brand loyalty.",
    features: [
      "Social Media Strategy Development",
      "Content Creation & Curation",
      "Community Management",
    ],
  },
  {
    id: 4,
    icon: contentWriting,
    title: "Content Marketing",
    description: "Tell your brand’s story with high-quality content.",
    features: [
      "Content Strategy",
      "Blog Writing & Visual Content",
      "Email Marketing Campaigns",
    ],
  },
  {
    id: 5,
    icon: emailMarketing,
    title: "Email Marketing",
    description: "Nurture leads and convert them into loyal customers.",
    features: [
      "Email Campaign Strategy",
      "Template Design & Automation",
      "Segmentation & Performance Analytics",
    ],
  },
  {
    id: 6,
    icon: webDevelopment,
    title: "Web Design & Development",
    description: "Create a responsive, user-friendly website for your brand.",
    features: [
      "Custom Web Design",
      "Responsive Development",
      "UX/UI Design & E-commerce Solutions",
    ],
  },
];

const OurProductPage = () => {
  return (
    <Container className="lg:pt-32 pb-20  pt-20">
      <div className="lg:flex justify-between w-full">
        <div className="lg:w-1/2">
          <Image
            src={ourProductHeader}
            className="lg:w-[400px] w-[300px] mx-auto"
            alt="our product image"
          />
        </div>

        <div className="lg:w-1/2">
          <h3 className="text-3xl lg:text-4xl font-semibold">
            How to Streamline a Marketing Strategy for an Enterprise?
          </h3>
          <p className="light-text mt-4 mb-8">
            There are many variations of lorem passages of Lorem Ipsum
            available, but the majority have suffered. This book is a treatise
            on the theory of ethics, very popular during the Renaissance.
          </p>

          <div className="flex justify-between items-center gap-10">
            <div>
              <p className="lg:text-2xl font-semibold">
                1. Planned Revenue Growth
              </p>
              <p className="light-text mt-2 mb-4">
                There are many variations of lorem spassages of Lorem Ipsum
                available internet tend to repeat.
              </p>
              <Link href={"/contact"}>
                <button className="custom-primary-btn py-3">Contact now</button>
              </Link>
            </div>

            <div>
              <p className="lg:text-2xl font-semibold">
                2. Professional Risk Management
              </p>
              <p className="light-text mt-2 mb-4">
                There are many variations of lorem spassages of Lorem Ipsum
                available internet tend to repeat.
              </p>
              <Link href={"/contact"}>
                <button className="custom-outline-btn bg-primary/10 border-primary hover:bg-primary py-3">
                  Contact now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div>
          <h2 className="text-3xl lg:text-4xl font-semibold text-center">
            What we provide to client
          </h2>
          <p className="light-text lg:w-[600px] mx-auto text-center mt-4">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested alteration in some form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-md bg-base-100 shadow-sm hover:shadow-lg transition-shadow duration-300 border"
            >
              <div className="card-body">
                <div className="mx-auto lg:mx-0 mb-3 p-2 rounded-md w-20 flex justify-center items-center bg-secondary/10">
                  <Image
                    src={service.icon}
                    width={60}
                    height={60}
                    alt="service icon"
                    className="w-12"
                    unoptimized
                  />
                </div>
                <hr />

                <h2 className="card-title text-secondary text-center">
                  {service.name}
                </h2>
                <p className="text-gray-500">{service.description}</p>
                <ul className="list-disc pl-5 mt-3 text-gray-400">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default OurProductPage;
