"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import type { ChartConfiguration } from "chart.js";

interface ChartComponentProps {
  data: ChartConfiguration["data"]; // Use ChartConfiguration['data'] to access data type
  options?: ChartConfiguration["options"]; // Use ChartConfiguration['options'] to access options type
  type: ChartConfiguration["type"]; // Use ChartConfiguration['type'] to access type type
}

const ChartComponent: React.FC<ChartComponentProps> = ({
  data,
  options,
  type,
}) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!chartRef.current && !data && !options) 
      return;
       const ctx = chartRef.current?.getContext("2d");
       if (!ctx) return;

       const chart = new Chart(ctx, {
         type: type,
         data: data,
         options: options,
       });

       return () => {
         chart.destroy();
       };
  }, [data, options, type]);

  return <canvas className="w-2 h-96" ref={chartRef} />;
};

export default ChartComponent;
