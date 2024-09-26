import SalesReportsChart from "@/components/ui/SalesReportsChart";
import TransactionsTable from "@/components/ui/TransactionsTable";
import { ChartColumnDecreasing, ChartPie, File } from "lucide-react";

const ReportsPage = () => {
  return (
    <div className="mt-5 min-h-screen mx-5 lg:mx-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="dark:bg-gray-900 bg-gray-50 p-6 rounded-lg flex items-center">
          <p className="w-12 h-12 text-purple-500 mr-4">
            <ChartPie size={42} />
          </p>
          <div>
            <h3 className="text-xl ">Sales Report</h3>
            <p className="text-gray-400">View sales by category</p>
          </div>
        </div>

        <div className="dark:bg-gray-900 bg-gray-50 p-6 rounded-lg flex items-center">
          <p className="w-12 h-12 text-blue-500 mr-4">
            <ChartColumnDecreasing size={42} />
          </p>
          <div>
            <h3 className="text-xl ">Revenue Report</h3>
            <p className="text-gray-400">View revenue trends</p>
          </div>
        </div>

        <div className="dark:bg-gray-900 bg-gray-50 p-6 rounded-lg flex items-center">
          <p className=" text-green-500 mr-4">
            <File size={42} />
          </p>
          <div>
            <h3 className="text-xl ">Expense Report</h3>
            <p className="text-gray-400">View expense breakdown</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <SalesReportsChart />

      {/* Table */}
      <TransactionsTable />
    </div>
  );
};

export default ReportsPage;
