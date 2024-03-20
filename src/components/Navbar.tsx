"use client";
//import { AppName } from "@/lib/Constant";
import React from "react";
import { FaIdCardClip as AppIcon } from "react-icons/fa6";
import ThemeToggle from "./ThemeToggle";
import metaData from "../dictionaries/globals.json";
import { useNavigation } from "@/hooks/AppContext";
import DropDown from "@/components/NavbarC/DropDown";
import { useAppContext } from "@/context/AppContext";
const Navbar = () => {
  const { App } = metaData;
  const { pathname } = useNavigation();
  const {} = useAppContext();
  return (
    <nav className="bg-white z-10 border-gray-200 dark:bg-gray-900">
      <div className="w-full ">
        {pathname === "/" || pathname === "/login" ? (
          <div className="max-w-screen-xl p-4 flex flex-wrap items-center justify-between mx-auto  ">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <AppIcon className="w-8 h-8 text-indigo-500" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                {App.name}
              </span>
            </a>
            <ThemeToggle />
          </div>
        ) : (
          <div className="max-w-screen-xl p-2 flex flex-wrap items-center justify-between mx-auto  ">
            <DropDown />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
