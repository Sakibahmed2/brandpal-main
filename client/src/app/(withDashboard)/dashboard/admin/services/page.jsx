"use client";

import LoadingPage from "@/components/ui/LoadingPage";
import {
  useDeleteServiceMutation,
  useGetAllServicesQuery,
} from "@/redux/api/serviceApi";
import { Pencil, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const DashboardServicesPage = () => {
  const { data, isLoading, refetch } = useGetAllServicesQuery({});
  const [deleteService] = useDeleteServiceMutation();

  if (isLoading) return <LoadingPage />;

  const handleDelete = async (id) => {
    const toastId = toast.loading("Deleting service...");
    try {
      const res = await deleteService(id);
      if (res?.data?.success) {
        toast.success(res?.data?.message, { id: toastId });
        refetch();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-5 h-screen mx-5 lg:mx-0">
      <div className="flex justify-between items-center dark:bg-gray-900 bg-gray-50 p-5 rounded-md">
        <p className="text-xl lg:text-2xl">Services</p>
        <Link href={"/dashboard/admin/services/add-service"}>
          <button className="custom-dashboard-btn">Add service</button>
        </Link>
      </div>

      <div className="dark:bg-gray-900 bg-gray-50 p-5 mt-5 rounded-lg ">
        <div className="overflow-x-auto ">
          <table className="table   text-center ">
            {/* head */}
            <thead className="dark:text-white/80">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>

                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.data.map((service, index) => (
                <tr key={service._id}>
                  <th>{index + 1}</th>
                  <th>
                    <div className="bg-sky-400 text-white flex justify-center items-center py-2  rounded-md">
                      <Image
                        src={service.icon}
                        alt={service.name}
                        height={24}
                        width={24}
                        unoptimized
                      />
                    </div>
                  </th>
                  <td>{service.name}</td>

                  <td>
                    <div className="flex justify-center items-center gap-2">
                      <Link href={`/dashboard/admin/services/${service?._id}`}>
                        <button className="bg-blue-500 p-2 rounded-sm">
                          <Pencil size={18} />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(service?._id)}
                        className="bg-red-500 p-2 rounded-sm "
                      >
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
  );
};

export default DashboardServicesPage;
