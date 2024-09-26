"use client";

import dynamic from "next/dynamic";
import OverviewSection from "@/components/dashboard/DashboardHome/OverviewSection/OverviewSection";
import LoadingPage from "@/components/ui/LoadingPage";
import { useGetAllTransactionsQuery } from "@/redux/api/paymentApi";
import Link from "next/link";

// Dynamically import ChartSection to avoid SSR issues
const ChartSection = dynamic(
  () =>
    import("@/components/dashboard/DashboardHome/ChartSection/ChartSection"),
  {
    ssr: false,
  }
);

const DashboardHomePage = () => {
  const { data, isLoading } = useGetAllTransactionsQuery({});

  if (isLoading) return <LoadingPage />;

  return (
    <div className="mt-0 lg:mt-5">
      <OverviewSection />

      {/* customer chart */}
      <div className="mt-4 lg:flex">
        <ChartSection />

        <div className="dark:bg-gray-900 bg-gray-50 p-5 mx-4 lg:mx-0 lg:w-[280px] lg:ml-4 mt-4 lg:mt-0">
          <p className="text-xl lg:text-2xl pb-2 lg:pb-4">Transaction</p>
          <hr className="border-gray-500 " />

          <div className="mt-4 space-y-5">
            {data?.data.slice(0, 4).map((transaction) => (
              <div
                key={transaction._id}
                className="flex justify-between items-center"
              >
                <div>
                  <p>{transaction.email}</p>
                  <p className="text-gray-400 text-sm">
                    {new Date(transaction.date).toLocaleDateString()}
                  </p>
                </div>
                <p>$ {transaction.price}</p>
              </div>
            ))}
            <Link href={"/dashboard/admin/billing"}>
              <button className="custom-outline-btn bg-sky-50 dark:bg-sky-400 hover:bg-sky-500 border-sky-500 mt-4">
                View all
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHomePage;
