//import { AppName } from "@/lib/Constant";
import React from "react";
import { IoIdCard as AppIcon } from "react-icons/io5";
import ThemeToggle from "./ThemeToggle";
import metaData from "../dictionaries/globals.json";
const Navbar = () => {
  const { App } = metaData;

  return (
    <nav className="bg-white z-10 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <AppIcon className="w-8 h-8 text-indigo-500" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            {App.name}
          </span>
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
