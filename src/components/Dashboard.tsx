"use client";
import { GET } from "@/lib/CommunicationHelper";
import React, { useEffect } from "react";
import LineChart from "@/components/charts/LineChart";
import compareDates from "@/utils";
import BarChart from "./charts/BarChart";
const Dashboard = () => {
  const btn = () => {
    // Example usage:
    const date1 = new Date("2024-03-25T08:00:00");
    const date2 = new Date("2024-04-25T18:00:00");
    console.log(compareDates(date1, date2)); // Output: [0, 1, 2, ..., 23]
  };
  const profile = async () => {
    await GET({ api: "api/v1/profile" }).then((response) => {
      if (!response?.ok) {
        console.log("error");
      }
      response?.json().then((data) => {
        console.log(data);
      });
    });
  };
  return (
    <div>
      <div className="flex flex-col items-center md:flex-row gap-5">
        <Card title="Yearly Report of Indentity">
          <BarChart />
        </Card>
        <Card title="Monthly Report of Indentity">
          <LineChart />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

const Card = ({ children, title }: { children: any; title: string }) => {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <div>{children}</div>
    </div>
  );
};
