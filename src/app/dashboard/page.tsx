import Dashboard from "@/components/Dashboard";
import Drawer from "@/components/Drawer";
import TextArea from "@/components/TextArea";
import LineChart from "@/components/charts/LineChart";
import { Suspense } from "react";

const page = () => {
  return (
    <div>
      <Dashboard />

      <div className="h-screen px-10 py-10">
        <LineChart />
      </div>
    </div>
  );
};

export default page;
