// Code for BarChart component:
import type { ChartConfiguration } from "chart.js";
import ChartComponent from "./ChartComponent";
import { Suspense } from "react";
import compareDates from "@/utils";
import { useNavigation } from "@/hooks/AppContext";
import useChartDataBuilder from "@/hooks/ChartDataBuilder";
const data = compareDates(
  new Date("2024-03-25T08:00:00"),
  new Date("2024-07-02T18:00:00")
);

const BarChart = () => {
  const { plugins, backgroundColor, borderColor, hey } = useChartDataBuilder();
  const BarChartData = {
    type: "bar",
    data: {
      labels: data.x_axis,
      datasets: [
        {
          label: "Scanned",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          borderWidth: 3,
          fill: true,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      animations: {
        tension: {
          duration: 8000,
          easing: "linear",
          from: 1,
          to: 0,
          loop: true,
          delay: 1000,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: plugins,
    },
  };
  return (
    <Suspense fallback={<div className="">Loading...</div>}>
      <ChartComponent
        data={BarChartData.data as ChartConfiguration["data"]}
        options={BarChartData.options as ChartConfiguration["options"]}
        type={BarChartData.type as ChartConfiguration["type"]}
      />
    </Suspense>
  );
};

export default BarChart;
