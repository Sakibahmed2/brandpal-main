"use client";

import cn from "@/libs/cn";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import { addOrder } from "@/redux/features/orderSlice";
import { getUserInfo } from "@/utils/getUserInfo";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const ServicesCard = ({ service }) => {
  const dispatch = useDispatch();
  const myOrder = useSelector((state) => state.orders.orders);
  const userInfo = getUserInfo();
  const { data } = useGetSingleUserQuery(userInfo?.id);

  const userDetails = data?.data;

  const handleAddOrder = () => {
    if (
      service._id ===
      myOrder.find((order) => order.serviceId === service._id)?.serviceId
    ) {
      toast.error("Service already added to cart");
    } else {
      const order = {
        serviceId: service._id,
        name: service.name,
        price: service?.offerPrice ? service.offerPrice : service.price,
        time: service.duration,
        description: service.description,
      };
      dispatch(addOrder(order));
      toast.success("Service added to cart");
    }
  };

  return (
    <div className="rounded-md bg-base-100 shadow-sm hover:shadow-lg transition-shadow duration-300 border">
      <div className="card-body">
        <div className="mx-auto lg:mx-0 mb-3 p-2 rounded-md w-20 flex justify-center items-center bg-secondary/10">
          <Image
            src={service.icon}
            width={60}
            height={60}
            alt="service icon"
            className="w-12"
            unoptimized
          />
        </div>
        <hr />

        <h2 className="card-title text-secondary text-center">
          {service.name}
        </h2>
        <p className="text-gray-500">{service.description}</p>
        <ul className="list-disc pl-5 mt-3 text-gray-400">
          {service.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>

        {/* Service time and price */}
        <div className="mt-4">
          <p className=" font-semibold text-gray-600">
            Service Time:{" "}
            <span className="text-primary">{service.duration}</span>
          </p>
          <div>
            <p className={cn("font-semibold text-gray-600 flex gap-2 my-1")}>
              Price:{" "}
              {!service?.offerPrice ? (
                <span className="text-primary">${service.price}</span>
              ) : (
                <div className="flex gap-4">
                  <span className="text-red-500 line-through">
                    ${service.price}
                  </span>{" "}
                  <span className="text-primary">${service.offerPrice}</span>
                </div>
              )}
            </p>
          </div>
        </div>

        <button
          onClick={handleAddOrder}
          className="custom-outline-btn bg-secondary/5 border-secondary hover:bg-secondary mt-4"
        >
          Buy service
        </button>
      </div>
    </div>
  );
};

export default ServicesCard;
