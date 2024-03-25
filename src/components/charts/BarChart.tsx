// Code for BarChart component:
import type { ChartConfiguration } from "chart.js";
import ChartComponent from "./ChartComponent";
import { Suspense } from "react";
import compareDates from "@/utils";
import { useNavigation } from "@/hooks/AppContext";
import useChartDataBuilder from "@/hooks/ChartDataBuilder";
import { useAppContext } from "@/context/AppContext";
const data = compareDates(
  new Date("2024-03-25T08:00:00"),
  new Date("2024-07-02T18:00:00")
);

const BarChart = () => {
  let delayed: any;
  const{chartColor} = useAppContext()
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
  const { plugins, backgroundColor, borderColor, generateRandomArray } =
    useChartDataBuilder();
  
  const BarChartData = {
    type: "bar",
    data: {
      labels: data.x_axis,
      datasets: [
        {
          label: "Scanned",
          data: generateRandomArray(data.x_axis.length, 0, 100),
          backgroundColor: [chartColor],
          borderColor: [chartColor],
          borderWidth: 1,
          fill: true,
          borderRadius: 10,
          //borderSkipped: false,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      animation: {
        onComplete: () => {
          delayed = true;
        },
        delay: (context: any) => {
          let delay = 0;
          if (
            context.type === "data" &&
            context.mode === "default" &&
            !delayed
          ) {
            delay = context.dataIndex * 300 + context.datasetIndex * 100;
          }
          return delay;
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
