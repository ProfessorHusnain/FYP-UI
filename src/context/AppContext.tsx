"use client";

import { Auth, MetaData, User } from "@/types";
import React, { createContext, useEffect, useState } from "react";

interface IAppContext {
  chartColor: string;
  metaData: MetaData;
  auth: Auth;
  user: User;
  isDrawerOpen: boolean;
  isProfileMenuOpen: boolean;
  isLoading: boolean;
  setIsProfileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  setAuth: React.Dispatch<React.SetStateAction<Auth>>;
  setMetaData: React.Dispatch<React.SetStateAction<MetaData>>;
}

const AppContext = createContext<IAppContext | undefined>(undefined);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [metaData, setMetaData] = useState<MetaData>({
    theme: "",
  });
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User>({ username: "", password: "" });
  const [auth, setAuth] = useState<Auth>({ accessToken: "" });
  const [chartColor, setChartColor] = useState<string>("#293245");
  useEffect(() => {
    const Theme = () => {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const localTheme =
        window.localStorage.getItem("theme") ||
        (prefersDarkMode ? "dark" : "light");
      if (localTheme) {
        setMetaData((prev) => ({ ...prev, theme: localTheme }));
      }
    };
    Theme();
  }, []);

  useEffect(() => {
    if (metaData.theme === "dark") {
      document.documentElement.classList.add("dark");
      setChartColor("rgb(226 232 240)");
    } else if (metaData.theme === "light") {
      setChartColor("#232A3C");
      document.documentElement.classList.remove("dark");
    }
  }, [metaData.theme]);

  return (
    <AppContext.Provider
      value={{
        chartColor,
        metaData,
        setMetaData,
        auth,
        setAuth,
        user,
        setUser,
        isLoading,
        setIsLoading,
        isDrawerOpen,
        setIsDrawerOpen,
        isProfileMenuOpen,
        setIsProfileMenuOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export { AppProvider, useAppContext };
