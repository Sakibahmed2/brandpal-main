"use client";

import LoadingPage from "@/components/ui/LoadingPage";
import { useGetAllTransactionsQuery } from "@/redux/api/paymentApi";
import { useGetAllUserQuery, useGetSingleUserQuery } from "@/redux/api/userApi";
import { countUserByCountry } from "@/utils/countUserByCountry";
import { getUserInfo } from "@/utils/getUserInfo";
import {
  Bell,
  BriefcaseBusiness,
  CircleUserRound,
  DollarSign,
  Earth,
  Mail,
  ShoppingCart,
  Users,
} from "lucide-react";

const OverviewSection = () => {
  const userInfo = getUserInfo();
  const { data, isLoading } = useGetSingleUserQuery(userInfo?.id);
  const { data: allUser } = useGetAllUserQuery({});

  const countryByUser = countUserByCountry(allUser?.data);

  const { data: allTransaction } = useGetAllTransactionsQuery({});

  const totalRevenue = allTransaction?.data.reduce(
    (acc, item) => acc + item.price,
    0
  );

  if (isLoading) return <LoadingPage />;

  return (
    <div className="dark:bg-gray-900 bg-gray-50 py-10 px-5 mx-4 lg:mx-0 mt-4 lg:mt-0 rounded-t-xl">
      <div className="lg:flex justify-between items-center pb-5 text-center lg:text-start">
        <div>
          <h2 className="text-xl lg:text-3xl mt-4 lg:mt-0">
            Good Morning,{" "}
            <span className="text-primary font-semibold">
              {data?.data?.name}
            </span>
          </h2>
          <p className="light-text">Your ID: 13647832648</p>
        </div>

        <div className="flex items-center justify-center lg:justify-end gap-5 text-gray-400 mt-4 lg:mt-0">
          <span className="hover:bg-gray-300 hover:text-gray-800 p-3 rounded-full ease-in-out duration-200">
            <CircleUserRound size={24} />
          </span>
          <span className="hover:bg-gray-300 hover:text-gray-800 p-3 rounded-full ease-in-out duration-200">
            <Bell size={24} />
          </span>
          <span className="hover:bg-gray-300 hover:text-gray-800 p-3 rounded-full ease-in-out duration-200">
            <Mail size={24} />
          </span>
        </div>
      </div>

      <hr className="border-gray-500 " />

      <div className="mt-7 text-center lg:text-start">
        <h2 className="text-xl lg:text-2xl ">Overview</h2>
        <p className="light-text">last month</p>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
          <div className="flex gap-5 bg-white dark:bg-gray-800 shadow-sm rounded-xl w-full  py-4 px-6 mx-auto">
            <p className="bg-[#EAF0FF] size-16 text-sky-500 rounded-full flex justify-center items-center">
              <Users size={24} />
            </p>
            <div>
              <span className="light-text">Total Users</span>
              <p className="text-xl lg:text-2xl">{allUser?.data?.length}</p>
            </div>
          </div>

          <div className="flex gap-5 bg-white dark:bg-gray-800 shadow-sm rounded-xl w-full py-4 px-6 mx-auto">
            <p className="bg-[#FFE8E0] size-16 text-[#FE5152] rounded-full flex justify-center items-center">
              <Earth size={24} />
            </p>
            <div>
              <span className="light-text">Worldwide User Base</span>
              <p className="text-xl lg:text-2xl">{countryByUser}</p>
            </div>
          </div>

          <div className="flex gap-5 bg-white dark:bg-gray-800 shadow-sm rounded-xl w-full py-4 px-6 mx-auto">
            <p className="bg-[#F2EAFF] size-16 text-[#742EFE] rounded-full flex justify-center items-center">
              <DollarSign size={24} />
            </p>
            <div>
              <span className="light-text">Total revenue</span>
              <p className="text-xl lg:text-2xl">{totalRevenue}$+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
