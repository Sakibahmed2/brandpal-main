import { Pencil, Trash } from "lucide-react";
import { off } from "process";
import React from "react";

const offers = [
  {
    id: 1,
    title: "Limited Time Offer",
    description:
      "Get a 50% discount on our premium plan! Enjoy exclusive benefits and top-notch support.",
  },
  {
    id: 2,
    title: "Free Trial",
    description:
      "Sign up today and get a 30-day free trial of our services. No credit card required!",
  },
  {
    id: 3,
    title: "Bundle Deal",
    description:
      "Purchase our service bundle and save 30%! Get access to all our premium features.",
  },
];

const DashboardOfferPage = () => {
  return (
    <div className="min-h-screen mt-5 mx-5 lg:mx-0">
      <div className="">
        <div className="flex justify-between items-center dark:bg-gray-900 bg-gray-50 p-5 rounded-md">
          <p className="text-xl lg:text-2xl">Offers</p>
          <button className="custom-dashboard-btn">Add offer</button>
        </div>
        <div className="dark:bg-gray-900 bg-gray-50 p-5 mt-5 rounded-lg">
          <div className="overflow-x-auto ">
            <table className="table ">
              {/* head */}
              <thead className="text-white/80">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {offers.map((offer, index) => (
                  <tr key={offer.id}>
                    <th>{index + 1}</th>

                    <td>{offer.title}</td>

                    <td>
                      <div className="flex justify-center items-center gap-2">
                        <button className="bg-blue-500 p-2 rounded-sm">
                          <Pencil size={18} />
                        </button>
                        <button className="bg-red-500 p-2 rounded-sm ">
                          <Trash size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOfferPage;
