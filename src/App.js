import React, { useState } from "react";
import Navbar from "./components/Navbar";
// import { FiSettings } from "react-icons/fi";
import { Route, Routes } from "react-router-dom";
import { Page1, Page2, Page3, Page4, Page5, Page6, HomePage } from "./pages";
import { useStateContext } from "./contexts/ContextProvider";
// import ThemeSettings from "./components/ThemeSettings";
import { MdFeedback } from "react-icons/md";
import PopUp from "./components/PopUp";
// import DemoCarousel from "./components/Login_Signup";

const App = () => {
  // const [currentMode, themeSettings] = useState("Light");
  const [popUp, savePopUp] = useState(false);
  const closeModal = () => savePopUp(false);

  const { currentMode } = useStateContext();

  let color = "";
  if (currentMode === "Light") color = "blue";
  else color = "white";

  console.log(currentMode);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <>
        <div className="flex relative">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            {/* <button
              type="button"
              className="text-3xl p-3 bg-blue-900 hover:drop-shadow-2xl text-white"
              style={{ borderRadius: "50%" }}
              onClick={() => setThemeSettings(true)}
            >
              <FiSettings color="white" />
            </button> */}
          </div>
        </div>
        <div className="min-h-screen min-w-full bg-main-bg dark:bg-main-dark-bg">
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
          <div className="Feedback">
            <MdFeedback
              color={color}
              fontSize={35}
              onClick={() => savePopUp(true)}
            />
          </div>
          <PopUp popUp={popUp} closeModal={closeModal} />
        </div>
        {/* <div>{themeSettings && <ThemeSettings />}</div> */}
      </>
    </div>
  );
};

export default App;
