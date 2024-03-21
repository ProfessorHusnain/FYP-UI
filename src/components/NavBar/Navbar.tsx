"use client";
//import { AppName } from "@/lib/Constant";
import React from "react";
import { FaIdCardClip as AppIcon } from "react-icons/fa6";
import ThemeToggle from "../ThemeToggle";
import metaData from "../../dictionaries/globals.json";
import { useNavigation } from "@/hooks/AppContext";
import { useAppContext } from "@/context/AppContext";
import ProfileNavIcon from "./ProfileNavIcon/ProfileNavIcon";
import DestopMenu from "./DestopMenu";
import { TiThMenu as Menu } from "react-icons/ti";
const Navbar = () => {
  const { App } = metaData;
  const { pathname } = useNavigation();
  const { setIsDrawerOpen, isDrawerOpen } = useAppContext();
  return (
    <nav className="bg-white z-10 px-2 xl:px-0 border-gray-200 dark:bg-gray-900">
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
          <div className="max-w-screen-xl px-2 pt-2 flex justify-between mx-auto">
            <Menu
              className="md:hidden flex my-auto text-2xl cursor-pointer"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            />
            <DestopMenu />
            <ProfileNavIcon />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
