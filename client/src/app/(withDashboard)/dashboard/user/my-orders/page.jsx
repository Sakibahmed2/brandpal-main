"use client";

import { removeOrder } from "@/redux/features/orderSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const MyOrdersPage = () => {
  const myOrder = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();

  return (
    <div className="mt-5">
      <div className="flex justify-between items-center dark:bg-gray-900 bg-gray-50 p-5 rounded-md">
        <p className="text-xl lg:text-2xl">My orders</p>
        {myOrder.length ? (
          <Link href={"/dashboard/user/payment"}>
            <button className="custom-dashboard-btn">Pay</button>
          </Link>
        ) : (
          <button disabled className="custom-dashboard-btn">
            Pay
          </button>
        )}
      </div>

      <div className="min-h-screen dark:bg-gray-900 bg-gray-50 p-5">
        <div className="container mx-auto">
          {myOrder.length === 0 ? (
            <p className="text-center text-gray-600">You have no orders yet.</p>
          ) : (
            <div className="dark:bg-gray-800 bg-white rounded-lg p-4 overflow-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="dark:bg-gray-700 bg-gray-100">
                    <th className="px-4 py-2 text-left">Service</th>
                    <th className="px-4 py-2 text-left">Duration</th>
                    <th className="px-4 py-2 text-left">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {myOrder.map((order, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-2">{order.name}</td>
                      <td className="px-4 py-2">{order.duration}</td>
                      <td className="px-4 py-2">${order.price}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="dark:bg-gray-700 bg-gray-100 font-bold">
                    <td className="px-4 py-2 text-left" colSpan="2">
                      Total
                    </td>

                    <td className="px-4 py-2 text-left text-green-500">
                      $
                      {myOrder
                        .reduce((acc, order) => acc + order.price, 0)
                        .toFixed(2)}
                    </td>
                  </tr>
                </tfoot>
              </table>
              <div className="flex justify-end w-full mt-5">
                <button
                  onClick={() => dispatch(removeOrder())}
                  className="custom-outline-btn bg-red-50 dark:bg-red-400 hover:bg-red-500 border-red-500 "
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrdersPage;
