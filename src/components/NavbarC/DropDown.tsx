"use client";
import React from "react";
import DropDownMenu from "./DropDownMenu";

const DropDown = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  return (
    <>
      <div
        className={`relative inline-block ${
          isDrawerOpen ? "w-60" : ""
        } transition-all duration-1000 md:w-60 `}
      >
        <div>
          <button
            type="button"
            className="inline-flex justify-between items-center w-full rounded-md border border-gray-300 shadow-sm bg-white dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-2 dark:focus:ring-offset-2 dark:focus:ring-blue-500 dark:focus:ring-offset-gray-900 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            id="options-menu"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <span className="flex items-center">
              <img
                className="w-8 h-8 rounded-full"
                src="https://source.unsplash.com/100x100/?user"
                alt="user"
              />
              <span className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                User
              </span>
            </span>
            <svg
              className="w-5 h-5 rtl:ms-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        <DropDownMenu IsDrawerOpen={isDrawerOpen} />
      </div>
    </>
  );
};

export default DropDown;
