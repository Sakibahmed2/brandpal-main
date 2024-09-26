import AnalyticsCard from "@/components/ui/AnalyticsCard";
import SalesReportsChart from "@/components/ui/SalesReportsChart";

const AnalyticsPage = () => {
  return (
    <div className="mt-6 mx-5 lg:mx-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnalyticsCard />
      </div>

      <SalesReportsChart />
    </div>
  );
};

export default AnalyticsPage;
