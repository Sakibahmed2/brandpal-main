"use client";

import { useGetSingleTransactionQuery } from "@/redux/api/paymentApi";
import { getUserInfo } from "@/utils/getUserInfo";
import { Bell, CircleUserRound, Mail } from "lucide-react";

import LoadingPage from "@/components/ui/LoadingPage";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import cn from "@/libs/cn";

const UserDashboardPage = () => {
  const userInfo = getUserInfo();

  const { data, isLoading } = useGetSingleTransactionQuery({
    email: userInfo.email,
  });

  const { data: userData } = useGetSingleUserQuery(userInfo?.id);

  if (isLoading) return <LoadingPage />;

  return (
    <div className="min-h-screen">
      <div className="dark:bg-gray-900 bg-gray-50 py-10 px-5 mx-4 lg:mx-0 mt-5 rounded-t-xl">
        <div className="lg:flex justify-between items-center pb-5 text-center lg:text-start">
          <div>
            <h2 className="text-xl lg:text-3xl mt-4 lg:mt-0">
              Good Morning, {userData?.data.name || "User"}!
            </h2>
            <p className="light-text">Your ID: {userInfo.id || "N/A"}</p>
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
      </div>

      <div className="dark:bg-gray-900 bg-gray-50 p-3 lg:p-5 mt-5 lg:mx-0 mx-4">
        {/* Recent Activity Table */}
        <div className="dark:bg-gray-800 bg-white p-5 mt-4">
          <h2 className="text-secondary text-left lg:text-2xl mb-4 font-semibold">
            Recent Transactions
          </h2>
          {isLoading ? (
            <LoadingPage />
          ) : data?.data?.length === 0 ? (
            <p>No recent transactions</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">Service Name</th>
                    <th className="px-4 py-2 text-left">Transaction ID</th>
                    <th className="px-4 py-2 text-left">Status</th>
                    <th className="px-4 py-2 text-left">Price</th>
                    <th className="px-4 py-2 text-left">Offer</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.map((transaction, index) => (
                    <tr
                      key={index}
                      className="border-b dark:border-gray-600 bg-white dark:bg-gray-800 "
                    >
                      <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                        {new Date(transaction.date).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                        {transaction.serviceName.join(" || ")}
                      </td>
                      <td className="px-4 py-2">
                        <p className=" text-gray-700 dark:text-gray-300">
                          {transaction.transactionId}
                        </p>
                      </td>
                      <td
                        className={`px-4 py-2 ${
                          transaction.status === "success"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {transaction.status}
                      </td>

                      <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                        ${transaction.price}
                      </td>
                      <td className="px-4 py-2">
                        <p
                          className={cn(
                            "badge w-20",
                            transaction.offer === "40%-off"
                              ? "badge-success text-white"
                              : transaction.offer === "free-trial"
                              ? "badge-info"
                              : "badge-error"
                          )}
                        >
                          {transaction.offer}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;
