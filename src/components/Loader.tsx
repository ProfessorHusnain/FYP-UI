"use client";
import { useAppContext } from "@/context/AppContext";
import React from "react";

const smallSize = [
  "animate-div-small animate-div-small-size",
  "animate-div-small animate-div-small-size -delay-400",
  "animate-div-small animate-div-small-size -delay-800",
  "animate-div-small animate-div-small-size -delay-1200",
  "animate-div-small animate-div-small-size -delay-1600",
];
const largeSize = [
  "animate-div",
  "animate-div -delay-400",
  "animate-div -delay-800",
  "animate-div -delay-1200",
  "animate-div -delay-1600",
];

function Loader() {
  const { isLoading } = useAppContext();
  return (
    isLoading && (
      <div className="flex justify-center items-center h-svh w-full absolute bg-white z-30 opacity-50 ">
        <div className="relative w-100 h-100 top-0 -left-14">
          {window.innerWidth < 768
            ? smallSize.map((item, index) => (
                <div key={index} className={`${item} loader-color`} />
              ))
            : largeSize.map((item, index) => (
                <div key={index} className={`${item} loader-color`} />
              ))}
        </div>
      </div>
    )
  );
}

export default Loader;
