"use client";

import { MetaData } from "@/types";
import React, { createContext, useEffect, useState } from "react";

interface IAppContext {
    metaData: MetaData;
    setMetaData: React.Dispatch<React.SetStateAction<MetaData>>;
}

const AppContext = createContext<IAppContext | undefined>(undefined);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [metaData, setMetaData] = useState<MetaData>({
    theme: "dark",
  });
    
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setMetaData((prev) => ({ ...prev, theme: localTheme }));
    }
  }, []);

  return (
    <AppContext.Provider value={{ metaData, setMetaData }}>
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