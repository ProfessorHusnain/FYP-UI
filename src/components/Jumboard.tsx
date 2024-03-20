import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import metaData from "../dictionaries/globals.json";
import CommonButton from "./Buttons";
const Jumboard = () => {
  //useNavigation
  const { App } = metaData;
  return (
    <section className="bg-white flex justify-between flex-col dark:bg-gray-900 bg-[url('/hero-pattern.svg')] dark:bg-[url('/hero-pattern-dark.svg')]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
        <a
          href="#"
          className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"
        >
          <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">
            New
          </span>{" "}
          <span className="text-sm font-medium">See what s new</span>
          <IoIosArrowForward className="w-2.5 h-2.5 ms-2 rtl:rotate-180" />
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Unleashing Digital Creativity and Connectivity
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
          {App.description}
        </p>
        <div className="w-full max-w-md mx-auto">
          <CommonButton navigationPath="/login"/>
        </div>
      </div>
      <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
    </section>
  );
};

export default Jumboard;
