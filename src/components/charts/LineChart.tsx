// Code for LineChart component:

import type { ChartConfiguration } from "chart.js";
import ChartComponent from "./ChartComponent";
import { Suspense } from "react";
const LineChartData = {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

const LineChart = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChartComponent
        data={LineChartData.data}
        options={LineChartData.options}
        type={LineChartData.type as ChartConfiguration["type"]}
      />
    </Suspense>
  );
};

export default LineChart;

/*
    The LineChart component is a simple wrapper around the ChartComponent component. It provides the data and options for the line chart, and specifies the type as "line". The LineChartData object contains the data and options for the line chart, which are passed as props to the ChartComponent component. The ChartComponent component creates a new Chart instance using the Chart.js library, and renders the chart on a canvas element. The useEffect hook is used to create and destroy the chart when the data, options, or type props change.
    
  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chart = new Chart(ctx, {
      type: LineChartData.type as ChartConfiguration["type"],
      data: LineChartData.data,
      options: LineChartData.options,
    });

    return () => {
      chart.destroy();
    };
  }, []);
    */
