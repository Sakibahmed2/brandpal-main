"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import ServicesCard from "@/components/ui/ServicesCard";

import LoadingPage from "@/components/ui/LoadingPage";
import { useGetAllServicesQuery } from "@/redux/api/serviceApi";
import { getUserInfo } from "@/utils/getUserInfo";

const OurServices = () => {
  const userInfo = getUserInfo();

  const { data, isLoading } = useGetAllServicesQuery({ userId: userInfo?.id });

  if (isLoading) return <LoadingPage />;

  const serviceData = data?.data;

  return (
    <div className="mt-20">
      <div className="text-center">
        <SectionTitle
          title={"Our services"}
          description={"Grow your brand with our digital marketing solutions."}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {serviceData?.map((service) => (
          <ServicesCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
