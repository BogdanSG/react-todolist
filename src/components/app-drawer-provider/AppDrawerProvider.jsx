import React, { useState } from "react";
import AppDrawerContext from "../../contexts/app-drawer-context";

const AppDrawerProvider = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <AppDrawerContext.Provider
      value={{ isDrawerOpen: isDrawerOpen, setIsDrawerOpen: setIsDrawerOpen }}
    >
      {children}
    </AppDrawerContext.Provider>
  );
}; //AppDrawerProvider

export default AppDrawerProvider;
