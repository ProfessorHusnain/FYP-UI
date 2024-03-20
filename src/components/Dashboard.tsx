"use client";
import { GET } from "@/lib/CommunicationHelper";
import React, { useEffect } from "react";
const Dashboard = () => {
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
      <button onClick={profile}>Get</button>
    </div>
  );
};

export default Dashboard;
