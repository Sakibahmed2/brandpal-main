"use client";

import { useGetAllTransactionsQuery } from "@/redux/api/paymentApi";
import { useTheme } from "next-themes";
import React from "react";
import ReactApexChart from "react-apexcharts";

const SalesReportsChart = () => {
  const { theme } = useTheme();
  const { data: allTransaction } = useGetAllTransactionsQuery({});

  const aggregateRevenueByDay = (transactions) => {
    const revenueByDay = {};

    transactions?.forEach((transaction) => {
      const date = new Date(transaction.date).toISOString().split("T")[0]; // Get the date in YYYY-MM-DD format
      if (!revenueByDay[date]) {
        revenueByDay[date] = 0;
      }
      revenueByDay[date] += transaction.price;
    });

    return revenueByDay;
  };

  const getChartSeriesData = (data) => {
    const dates = Object.keys(data);
    const revenues = Object.values(data);

    return {
      categories: dates,
      data: revenues,
    };
  };

  const revenueData = aggregateRevenueByDay(allTransaction?.data);
  const { categories, data } = getChartSeriesData(revenueData);

  const series = [
    {
      name: "Revenue",
      data: data,
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
    stroke: {
      curve: "straight",
    },
    xaxis: {
      categories: categories,
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
    colors: ["#A155B9"],
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
          xaxis: {
            labels: {
              show: false,
            },
          },
          yaxis: {
            labels: {
              show: false,
            },
          },
        },
      },
    ],
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 mt-5 p-5">
      <div>
        <h3 className="text-xl lg:text-2xl">Sales Report</h3>
      </div>
      <div className="p-4 text-white rounded-md">
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

export default SalesReportsChart;
