"use client";

import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import cn from "@/libs/cn";
import { getUserInfo } from "@/utils/getUserInfo";
import { removeUserInfo } from "@/utils/local-storage";
import {
  Archive,
  BadgeDollarSign,
  ChartPie,
  File,
  House,
  LogOut,
  MessageCircle,
  ReceiptText,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const userInfo = getUserInfo();
  const userRole = userInfo?.role;
  const pathname = usePathname();
  const router = useRouter();

  const sideBarItem = [];

  if (userRole === "admin") {
    sideBarItem.push(
      {
        id: 1,
        label: "Home",
        path: "/dashboard/admin",
        icon: House,
      },
      {
        id: 2,
        label: "Analytics",
        path: "/dashboard/admin/analytics",
        icon: ChartPie,
      },
      {
        id: 3,
        label: "Services",
        path: "/dashboard/admin/services",
        icon: MessageCircle,
      },
      {
        id: 4,
        label: "Reports",
        path: "/dashboard/admin/reports",
        icon: File,
      },
      {
        id: 5,
        label: "Billing",
        path: "/dashboard/admin/billing",
        icon: ReceiptText,
      }
    );
  } else if (userRole === "user") {
    sideBarItem.push(
      {
        id: 1,
        label: "Home",
        path: "/dashboard/user",
        icon: House,
      },
      {
        id: 2,
        label: "My orders",
        path: "/dashboard/user/my-orders",
        icon: Archive,
      }
    );
  }

  const handleLogout = () => {
    removeUserInfo();
    router.push("/");
  };

  return (
    <div className="drawer dark:bg-gray-900 bg-gray-200 px-5 pb-5 h-full max-h-screen w-72">
      <div className="text-3xl font-semibold mx-auto mt-10 ">
        <Link
          href="/"
          className="mt-10 py-5 px-10 bg-gray-800 rounded-lg text-white"
        >
          BRAND<span className="text-gray-500">PAL</span>
        </Link>
      </div>
      <ul className="p-4 space-y-6 ">
        {/* Sidebar content here */}

        {sideBarItem.map((item) => (
          <Link
            href={item.path}
            key={item.id}
            className={cn(
              "flex items-center space-x-5 py-2 px-4 rounded-md",
              pathname === item.path
                ? "bg-gradient-to-r from-gray-600 to-gray-900 text-white"
                : ""
            )}
          >
            <item.icon />
            <p>{item.label}</p>
          </Link>
        ))}
      </ul>
      <hr className="border-gray-600" />
      <div className="space-y-5">
        <Link href={"/dashboard"} className="flex items-center space-x-5">
          <Settings />
          <p>Setting</p>
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center space-x-5 text-red-500 "
        >
          <LogOut />
          <p>Log out</p>
        </button>

        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
