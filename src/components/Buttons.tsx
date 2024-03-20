"use client";
import { useNavigation } from "@/hooks/AppContext";
import React from "react";

const CommonButton = ({ navigationPath }: { navigationPath: string }) => {
  const { navigateTo } = useNavigation();
  return (
    <button
      className="w-full py-3 px-4 mb-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
      onClick={navigateTo(navigationPath)}
    >
      Login
    </button>
  );
};

export default CommonButton;
