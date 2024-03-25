import Dashboard from "@/components/Dashboard";
import LineChart from "@/components/charts/LineChart";
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
