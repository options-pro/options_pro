import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { FiSettings } from "react-icons/fi";

import { Route, Routes } from "react-router-dom";

import { Page1, Page2, Page3, Page4, Page5, Page6, HomePage } from "./pages";
import { useStateContext } from "./contexts/ContextProvider";
import ThemeSettings from "./components/ThemeSettings";

const App = () => {
  // const [themeSettings, setThemeSettings] = useState(false);
  // const [currentMode, setCurrentMode] = useState("Light");
  const { currentMode, themeSettings, setThemeSettings } =
    useStateContext();

  // const setMode = (e) => {
  //   setCurrentMode(e.target.value);
  //   localStorage.setItem("themeMode", e.target.value);
  //   setThemeSettings(false);
  // };

  // const themeSettings = true;
  return (
    <div className={currentMode === "Dark" ? "h-[100vh] dark" : "h-[100vh]"}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <button
              type="button"
              className="text-3xl p-3 bg-blue-900 hover:drop-shadow-2xl text-white"
              style={{ borderRadius: "50%" }}
              onClick={() => setThemeSettings(true)}
            >
              <FiSettings color="white" />
            </button>
          </div>
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
        </Routes>
        <div>{themeSettings && <ThemeSettings />}</div>
      </BrowserRouter>
    </div>
  );
};

export default App;
