"use client";

import { useCreateServiceMutation } from "@/redux/api/serviceApi";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const AddServicePage = () => {
  const [createService] = useCreateServiceMutation();
  const router = useRouter();

  const handleSubmit = async (e) => {
    const toastId = toast.loading("Creating service...");
    e.preventDefault();
    const form = e.target;

    const serviceData = {
      name: form.name.value,
      icon: form.icon.value,
      features: form.features.value.split(","),
      description: form.description.value,
      duration: form.duration.value,
      price: form.price.value,
    };

    try {
      const res = await createService(serviceData).unwrap();
      console.log(res);
      if (res?.success) {
        toast.success(res?.message, { id: toastId });
        router.push("/dashboard/admin/services");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen lg:flex justify-center items-center mt-5 lg:mt-0 mx-5 lg:mx-0">
      <div className="bg-gray-50 dark:bg-gray-900 p-5 lg:p-10 rounded-md">
        <h1 className="text-2xl lg:text-3xl font-semibold border-b mb-10 dark:border-gray-400 pb-4 ">
          Add Service
        </h1>

        <form onSubmit={handleSubmit} className="w-full lg:w-[700px]">
          <div className="lg:flex justify-between items-center gap-5">
            <div className="lg:w-1/2">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text dark:text-gray-400">
                    Service name
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Service name"
                  name="name"
                  className="input input-bordered bg-transparent w-full dark:border-gray-200"
                  required
                />
              </label>
            </div>

            <div className="lg:w-1/2">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text dark:text-gray-400">
                    Service icon url
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Service name"
                  name="icon"
                  className="input input-bordered bg-transparent w-full dark:border-gray-200"
                  required
                />
              </label>
            </div>
          </div>

          <div className="lg:flex justify-between items-center gap-5">
            <div className="lg:w-1/2">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text dark:text-gray-400">
                    Duration
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Duration in months"
                  name="duration"
                  className="input input-bordered bg-transparent w-full dark:border-gray-200"
                  required
                />
              </label>
            </div>

            <div className="lg:w-1/2">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text dark:text-gray-400">Price</span>
                </div>
                <input
                  type="number"
                  placeholder="Price"
                  name="price"
                  className="input input-bordered bg-transparent w-full dark:border-gray-200"
                  required
                />
              </label>
            </div>
          </div>

          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text dark:text-gray-400">
                  Key features
                </span>
              </div>
              <input
                type="text"
                placeholder="Features"
                name="features"
                className="input input-bordered bg-transparent w-full dark:border-gray-200"
                required
              />
            </label>
          </div>

          <div>
            <label className="form-control">
              <div className="label">
                <span className="label-text dark:text-gray-400">
                  Description
                </span>
              </div>
              <textarea
                className="textarea textarea-bordered bg-transparent dark:border-gray-300 h-24"
                name="description"
                placeholder="Description"
                required
              ></textarea>
            </label>
          </div>

          <button
            type="submit"
            className="custom-outline-btn w-full bg-sky-50 dark:bg-sky-400 hover:bg-sky-500 border-sky-500 mt-5"
          >
            Add service
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddServicePage;
