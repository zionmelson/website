import { Analytics } from "@vercel/analytics/react";
import Hotjar from "@hotjar/browser";

import { useState, createContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { PiMoonStarsDuotone } from "react-icons/pi";
import { IoPartlySunny } from "react-icons/io5";

import Home from "./Home";
import Find from "./Find";
import Hire from "./Hire";
import Privacy from "./Privacy";
import Terms from "./Terms";
import Error from "./Error";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

export const ThemeContext = createContext(null);

const siteId = 3788387;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "white" ? "" : "white");
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div
          className={theme === "" ? "App" : "App-white"}
          id={theme === "" ? "" : "white"}
        >
          <Navbar />
          {theme === "" ? (
            <PiMoonStarsDuotone
              className="daytime"
              onClick={toggleTheme}
              style={{ color: "yellow" }}
            />
          ) : (
            <IoPartlySunny
              className="daytime"
              onClick={toggleTheme}
              style={{ color: "#fff" }}
            />
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/find-work" element={<Find />} />
            <Route path="/hire" element={<Hire />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
        <Analytics />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
