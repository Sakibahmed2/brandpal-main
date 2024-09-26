"use client";

import LoadingPage from "@/components/ui/LoadingPage";
import { useGetAllUserQuery } from "@/redux/api/userApi";
import { useTheme } from "next-themes";
import ReactApexChart from "react-apexcharts";

const ChartSection = () => {
  const { theme } = useTheme();
  const { data, isLoading } = useGetAllUserQuery({});

  if (isLoading) return <LoadingPage />;

  const usersData = data?.data;

  const countryCounts = usersData.reduce((acc, user) => {
    acc[user.country] = (acc[user.country] || 0) + 1;
    return acc;
  }, {});

  const series = [
    {
      name: "Users",
      data: Object.keys(countryCounts).map((country) => ({
        x: country,
        y: countryCounts[country],
      })),
    },
  ];

  const options = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      categories: Object.keys(countryCounts),
      labels: {
        style: {
          colors: theme === "dark" ? "#FFFFFF" : "#000000",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: theme === "dark" ? "#FFFFFF" : "#000000",
        },
      },
    },
    colors: ["#38bdf8"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      labels: {
        colors: theme === "dark" ? "#FFFFFF" : "#000000",
      },
    },
    grid: {
      show: true,
      borderColor: theme === "dark" ? "#333333" : "#f1f1f1",
    },
    tooltip: {
      theme: theme === "dark" ? "dark" : "light",
      style: {
        fontSize: "14px",
        fontFamily: "Helvetica, Arial, sans-serif",
        color: theme === "dark" ? "#FFFFFF" : "#000000",
      },
      background: {
        color: theme === "dark" ? "#333333" : "#FFFFFF",
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
          legend: {
            position: "bottom",
            horizontalAlign: "center",
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 250,
          },
        },
      },
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 200,
          },
          legend: {
            fontSize: "12px",
          },
        },
      },
    ],
  };

  return (
    <div className="dark:bg-gray-900 bg-gray-50 p-5 mx-4 lg:mx-0 lg:w-[900px]">
      <div className="lg:flex justify-between items-center">
        <div>
          <p className="text-xl lg:text-2xl">Customer Waves</p>
          <p className="light-text">In last 6 months</p>
        </div>

        {/* <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 lg:gap-5 rounded-xl border border-gray-500 lg:py-2 lg:px-4 px-2 py-1">
            <p className="lg:w-4 lg:h-4 w-2 h-2 rounded-full bg-purple-500"></p>
            <p className="text-xs lg:text-lg">Young Age</p>
          </div>
          <div className="flex items-center gap-2 lg:gap-5 rounded-xl border border-gray-500 lg:py-2 lg:px-4 px-2 py-1">
            <p className="lg:w-4 lg:h-4 w-2 h-2 rounded-full bg-sky-500"></p>
            <p className="text-xs lg:text-lg">Old Age</p>
          </div>
        </div> */}
      </div>

      <div className="p-4 rounded-md ">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default ChartSection;
