"use client";

import Sidebar from "@/components/dashboard/Sidebar/Sidebar";
import cn from "@/libs/cn";
import { getUserInfo } from "@/utils/getUserInfo";
import { Menu } from "lucide-react";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/navigation";

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["cyrillic"],
});

const DashboardLayout = ({ children }) => {
  const userInfo = getUserInfo();
  const router = useRouter();

  if (!userInfo) {
    return router.push("/login");
  }

  return (
    <div
      className={cn(
        "dark:bg-gray-800 bg-white dark:text-white text-black",
        montserrat.className
      )}
    >
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center ">
          {/* Page content here */}

          <div className="w-full max-w-[1190px] mt-12 lg:mt-0">{children}</div>

          <label
            htmlFor="my-drawer-2"
            className="drawer-button lg:hidden absolute top-4 left-7 text-gray-400 border border-gray-600 p-2 rounded-sm dark:bg-gray-800 mb-4"
          >
            <Menu size={24} />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
