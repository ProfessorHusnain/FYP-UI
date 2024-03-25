// Code for LineChart component:
import type { ChartConfiguration } from "chart.js";
import ChartComponent from "./ChartComponent";
import { Suspense } from "react";
import compareDates from "@/utils";
import useChartDataBuilder from "@/hooks/ChartDataBuilder";
import { useAppContext } from "@/context/AppContext";
const data = compareDates(
  new Date("2024-03-25T08:00:00"),
  new Date("2024-04-02T18:00:00")
);

const LineChart = () => {
  const { chartColor } = useAppContext();
  const { plugins, backgroundColor, borderColor, generateRandomArray } =
    useChartDataBuilder();
  const LineChartData = {
    type: "line",
    data: {
      labels: data.x_axis,
      datasets: [
        {
          label: "Card Created Time",
          data: generateRandomArray(data.x_axis.length, 0, 100),
          backgroundColor: [backgroundColor],
          borderColor: [backgroundColor],
          pointBackgroundColor: chartColor,
          pointStyle: "circle",
          pointRadius: 5,
          pointHoverRadius: 8,
          pointBorderColor: "red",
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
          duration: 1000,
          easing: "linear",
          from: 1,
          to: 0,
          loop: true,
          //delay: 1000,
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
    <Suspense fallback={<div>Loading...</div>}>
      <ChartComponent
        data={LineChartData.data as ChartConfiguration["data"]}
        options={LineChartData.options as ChartConfiguration["options"]}
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
