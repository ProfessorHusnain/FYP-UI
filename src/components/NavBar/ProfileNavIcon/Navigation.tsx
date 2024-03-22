"use client";
import { useNavigation } from "@/hooks/AppContext";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  const { pathname } = useNavigation();
  return (
    <div className="cursor-pointer md:max-w-[15rem]  w-full px-4 md:px-0 md:ps-4 py-4 ">
      <ul className="flex flex-col text-center gap-y-2 user-navigation">
        <li
          className={`${
            pathname === "/dashboard/user/profile"
              ? "md:active bg-gray-200 dark:bg-gray-600"
              : ""
          }  py-2 px-4 rounded-xl`}
        >
          <Link href="/dashboard/user/profile">Profile</Link>
        </li>
        <li
          className={`${
            pathname === "/dashboard/user/settings"
              ? "md:active rounded-[1rem] bg-gray-200 dark:bg-gray-600"
              : ""
          } py-2 px-4 rounded-xl`}
        >
          <Link href="/dashboard/user/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
