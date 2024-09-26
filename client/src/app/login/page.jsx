"use client";

import Link from "next/link";
import React from "react";
// import loginImg from "@/assets/login.jpg";
import loginImg from "@/assets/images/login.jpg";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { useLoginUserMutation } from "@/redux/api/authApi";
import { toast } from "sonner";
import { setUserInfo } from "@/utils/local-storage";
import { usePathname, useRouter } from "next/navigation";

const LoginPage = () => {
  const [loginUser] = useLoginUserMutation();
  const router = useRouter();

  // handle user form submission
  const handleSubmit = async (e) => {
    const toastId = toast.loading("Please wait...");
    e.preventDefault();

    const userData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const res = await loginUser(userData).unwrap();
      if (res?.success) {
        setUserInfo(res?.data?.accessToken);
        toast.success(res?.message, { id: toastId });
        router.push("/");
      }
    } catch (err) {
      toast.error(err?.data?.message, { id: toastId });
    }
  };

  return (
    <div className="bg-zinc-100 h-screen flex justify-center items-center ">
      <Container className="bg-white p-5 rounded-md shadow-md mx-4 lg:mx-0 w-full max-w-[900px]">
        <div className="lg:flex justify-between items-center w-full">
          <div className="lg:w-1/2 ">
            <form
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto p-1 lg:p-6  rounded-lg"
            >
              <h2 className="text-2xl lg:text-3xl font-semibold border-b-2 pb-2 mb-3">
                Please login here
              </h2>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                />
              </div>

              <div className=" mb-4 flex items-center">
                <input type="checkbox" className="checkbox" />
                <label className="label ml-2">
                  I agree to the Terms and Conditions
                </label>
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="custom-primary-btn py-3">
                  Login
                </button>
              </div>

              <div className="mt-4 text-center">
                <p className="text-gray-600">
                  Don&rsquo;t have an account?{" "}
                  <Link
                    href="/register"
                    className="text-primary hover:underline"
                  >
                    Register here
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>

          <div className="divider divider-horizontal"></div>

          <div className="w-1/2 hidden lg:flex">
            <Image src={loginImg} width={500} height={500} alt="login image" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
