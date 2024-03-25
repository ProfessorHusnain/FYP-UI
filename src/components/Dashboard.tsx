"use client";
import { GET } from "@/lib/CommunicationHelper";
import React, { useEffect } from "react";
import compareDates from "@/utils";
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
      <button onClick={btn}>Get</button>
    </div>
  );
};

export default Dashboard;
