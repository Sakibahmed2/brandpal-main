"use client";

import TransactionsTable from "@/components/ui/TransactionsTable";

const AdminBillingDashboard = () => {
  return (
    <div className="min-h-screen mx-5 lg:mx-0">
      <div className=" bg-gray-50 dark:bg-gray-900 p-6 mt-5 ">
        {/* Page Title */}
        <h1 className="text-xl lg:text-3xl  font-semibold mb-6">
          Billing Details
        </h1>
      </div>
      <TransactionsTable />
    </div>
  );
};

export default AdminBillingDashboard;
