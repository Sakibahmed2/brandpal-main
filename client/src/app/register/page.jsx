"use client";

import Container from "@/components/ui/Container";
import loginImg from "@/assets/images/login.jpg";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { useCreateUserMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useMemo, useState } from "react";

const RegisterPage = () => {
  const [addUser] = useCreateUserMutation();
  const router = useRouter();

  const [country, setCountry] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setCountry(value);
  };

  // // handle form submission
  const handleSubmit = async (e) => {
    const toastId = toast.loading("Please wait...");
    e.preventDefault();

    const userData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      country: country.label,
    };

    try {
      const res = await addUser(userData).unwrap();

      if (res?.success) {
        toast.success(res?.message, { id: toastId });
        router.push("/login");
      }
    } catch (err) {
      toast.error(err?.data?.message, { id: toastId });
    }
  };

  return (
    <div className="bg-zinc-100 h-screen flex justify-center items-center ">
      <Container className="bg-white p-5 rounded-md shadow-md mx-4 lg:mx-0">
        <div className="lg:flex justify-between items-center w-full ">
          <div className="w-1/2 hidden lg:flex">
            <Image src={loginImg} width={500} height={500} alt="login image" />
          </div>

          <div className="divider divider-horizontal"></div>

          <div className="lg:w-1/2 ">
            <form
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto p-1 lg:p-6 rounded-lg"
            >
              <h2 className="text-2xl lg:text-3xl font-semibold border-b-2 pb-2 mb-3">
                Please sign up here
              </h2>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="input input-bordered w-full "
                />
              </div>

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

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Choose your country</span>
                </label>
                <Select
                  options={options}
                  value={country}
                  onChange={changeHandler}
                />
              </div>

              <div className="mb-4 flex items-center">
                <input type="checkbox" className="checkbox" />
                <label className="label ml-2">
                  I agree to the Terms and Conditions
                </label>
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="custom-primary-btn py-3">
                  Register
                </button>
              </div>

              <div className="mt-4 text-center">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <Link href="/login" className="text-primary hover:underline">
                    Login here
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RegisterPage;
