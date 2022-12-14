import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [currentMode, setCurrentMode] = useState("Light");
  // const [themeSettings, setThemeSettings] = useState(false);

  // const setMode = (e) => {
  //   setCurrentMode(e.target.value);
  //   localStorage.setItem("themeMode", e.target.value);

  //   setThemeSettings(false);
  // };

  return (
    <StateContext.Provider
      value={{
        currentMode,
        setCurrentMode,
        // themeSettings,
        // setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
