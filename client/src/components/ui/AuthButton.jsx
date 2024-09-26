import { getUserInfo } from "@/utils/getUserInfo";
import { removeUserInfo } from "@/utils/local-storage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();

  const handleLogout = () => {
    removeUserInfo();
    router.refresh();
  };

  return (
    <>
      {!userInfo?.id ? (
        <>
          {" "}
          <Link href="/register">
            <button className="bg-primary text-white rounded-md px-6 py-2">
              Sign up
            </button>
          </Link>
          <Link href="/login">
            <button className="custom-outline-btn bg-secondary/10 hover:bg-orange-500 border-orange-500">
              Login
            </button>
          </Link>{" "}
        </>
      ) : (
        <>
          <button
            onClick={() => handleLogout()}
            className="bg-secondary/10 border-secondary custom-outline-btn hover:bg-secondary rounded-md px-8 py-2"
          >
            Logout
          </button>
        </>
      )}
    </>
  );
};

export default AuthButton;
