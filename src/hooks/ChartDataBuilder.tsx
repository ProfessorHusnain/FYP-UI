"use client";

import { useState } from "react";
const useChartDataBuilder = () => {
  
  const [hey, setHey] = useState();
  function generateRandomArray(
    length: number,
    min: number,
    max: number
  ): number[] {
    const randomArray: number[] = [];
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      randomArray.push(randomNumber);
    }
    return randomArray;
  }
  const backgroundColor = [
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(255, 159, 64, 0.2)",
  ];
  const borderColor = [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
  ];
  const plugins = {
    interaction: {
      intersect: false,
      mode: "index",
    },
    tooltips: {
      mode: "index",
      axis: "x",
    },
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  };
  return {
    plugins,
    backgroundColor,
    borderColor,
     
    generateRandomArray,
  };
};

export default useChartDataBuilder;
