"use client";

import { useGetAllTransactionsQuery } from "@/redux/api/paymentApi";
import { useGetAllUserQuery } from "@/redux/api/userApi";
import { ArrowLeftRight, DollarSign, User } from "lucide-react";

const AnalyticsCard = () => {
  const { data: allUser } = useGetAllUserQuery({});
  const { data: allTransaction } = useGetAllTransactionsQuery({});

  const totalRevenue = allTransaction?.data.reduce(
    (acc, item) => acc + item.price,
    0
  );

  return (
    <>
      <div className="dark:bg-gray-900 bg-gray-50 dark:text-white rounded-lg  p-6 flex items-center space-x-4">
        <div className="bg-purple-200 text-purple-500 rounded-full p-3">
          {/* Render the icon here */}
          <User />
        </div>
        <div className="flex flex-col">
          <h4 className="dark:text-gray-300 text-sm">Total user</h4>
          <div className="flex items-center space-x-2 my-2">
            <p className="text-2xl font-semibold ">{allUser?.data.length}</p>
            <span className="text-xl text-green-500">+</span>
          </div>
          <p className="dark:text-gray-300 text-xs">Than Last Month</p>
        </div>
      </div>

      <div className="dark:bg-gray-900 bg-gray-50 dark:text-white rounded-lg  p-6 flex items-center space-x-4">
        <div className="bg-green-200 text-green-500 rounded-full p-3">
          {/* Render the icon here */}
          <DollarSign />
        </div>
        <div className="flex flex-col">
          <h4 className="dark:text-gray-300 text-sm">Total Revenue</h4>
          <div className="flex items-center space-x-2 my-2">
            <p className="text-2xl font-semibold ">${totalRevenue}</p>
            {/* <span
              className={`text-sm ${
                changeType === "positive" ? "text-green-500" : "text-red-500"
              }`}
            >
              {change}
            </span> */}
          </div>
          <p className="dark:text-gray-300 text-xs">
            Total Revenue of all transactions
          </p>
        </div>
      </div>

      <div className="dark:bg-gray-900 bg-gray-50 dark:text-white rounded-lg  p-6 flex items-center space-x-4">
        <div className="bg-sky-200 text-sky-500 rounded-full p-3">
          {/* Render the icon here */}
          <ArrowLeftRight />
        </div>
        <div className="flex flex-col">
          <h4 className="dark:text-gray-300 text-sm">Total Transaction</h4>
          <div className="flex items-center space-x-2 my-2">
            <p className="text-2xl font-semibold ">
              {allTransaction?.data.length}
            </p>
            {/* <span
              className={`text-sm ${
                changeType === "positive" ? "text-green-500" : "text-red-500"
              }`}
            >
              {change}
            </span> */}
          </div>
          <p className="dark:text-gray-300 text-xs">
            Total Transaction of all transactions
          </p>
        </div>
      </div>
    </>
  );
};

export default AnalyticsCard;
