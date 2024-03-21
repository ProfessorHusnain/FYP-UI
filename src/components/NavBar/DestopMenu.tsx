"use client";
import React from "react";
import metaData from "@/dictionaries/globals.json";
import { useNavigation } from "@/hooks/AppContext";
import Link from "next/link";
const DestopMenu = () => {
  const { navbarMenu } = metaData;
  const { pathname } = useNavigation();
  return (
    <div className="hidden nav-list pb-0 mb-0 md:flex w-full justify-between items-end max-w-lg">
      {navbarMenu.map((item, index) => {
        return (
          <li
            key={index}
            className={`${
              pathname === `/dashboard/${item.toLocaleLowerCase()}`
                ? "active"
                : (pathname === "/dashboard" && item === "Home") && "active"
            }`}
          >
            <Link
              href={`/dashboard/${item === "Home" ? "" : item.toLowerCase()}`}
              className="nav-link"
            >
              {item}
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default DestopMenu;
