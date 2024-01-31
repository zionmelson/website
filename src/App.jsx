import { useState, createContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Startup from "./pages/Startup";
import Developers from "./pages/Developers";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Error from "./pages/Error";
import Privacy from "./pages/Privacy";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Hotjar from "@hotjar/browser";

import { PiMoonStarsDuotone } from "react-icons/pi";
import { IoPartlySunny } from "react-icons/io5";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// import Dana from "./pages/full/dana";
// import Ian from "./pages/full/Ian";
// import Jonathan from "./pages/full/Jonathan";

import {
  Quee,
  Murd,
  Luca,
  Grim,
  Rich,
  Spen,
  Lian,
  Doug,
  Roge,
  Blaz,
  Wils,
  Sava,
  Bart,
  Bann,
  Seco,
  Jave,
  Barn,
  Park,
  Alle,
  Jord,
  Wayn,
  Maso,
  Drak,
  Kor,
  Nels,
  Fre,
  Smit,
} from "./devs";

import "./App.css";

export const ThemeContext = createContext(null);
const siteId = 3788387;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

function App() {
  useEffect(() => {
    if ("sw" in navigator) {
      navigator.serviceWorker
        .register("./sw.js")
        .then((registration) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }
  }, []);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "" : "light");
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div
          className={theme === "" ? "App" : "App-light"}
          id={theme === "" ? "" : "light"}
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
            <Route path="/startup" element={<Startup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/developers" element={<Developers />} />

            <Route path="/developers/62328c" element={<Lian />} />
            <Route path="/developers/8a6ca5" element={<Luca />} />
            <Route path="/developers/601892" element={<Roge />} />
            <Route path="/developers/3f7099" element={<Murd />} />
            <Route path="/developers/dcb916" element={<Sava />} />
            <Route path="/developers/2e31c0" element={<Quee />} />
            <Route path="/developers/27ff01" element={<Grim />} />
            <Route path="/developers/672957" element={<Blaz />} />
            <Route path="/developers/0459bb" element={<Rich />} />
            <Route path="/developers/c29e3b" element={<Wils />} />
            <Route path="/developers/5adff2" element={<Doug />} />
            <Route path="/developers/1270f5" element={<Spen />} />
            <Route path="/developers/8f112e" element={<Bart />} />
            <Route path="/developers/ae6248" element={<Bann />} />
            <Route path="/developers/0c04a5" element={<Seco />} />
            <Route path="/developers/7b81ce" element={<Jave />} />
            <Route path="/developers/5f84d3" element={<Barn />} />
            <Route path="/developers/9f15b7" element={<Park />} />
            <Route path="/developers/65f1f4" element={<Alle />} />
            <Route path="/developers/4ba90e" element={<Jord />} />
            <Route path="/developers/49f40f" element={<Wayn />} />
            <Route path="/developers/405d4a" element={<Maso />} />
            <Route path="/developers/ae37ba" element={<Drak />} />
            <Route path="/developers/af5bf7" element={<Kor />} />
            <Route path="/developers/df2916" element={<Nels />} />
            <Route path="/developers/de412a" element={<Fre />} />
            <Route path="/developers/34b12a" element={<Smit />} />

            {/* <Route path="/developers/dana" element={<Dana />} /> */}
            {/* <Route path="/developers/ian" element={<Ian />} /> */}
            {/* <Route path="/developers/jonathan" element={<Jonathan />} />  */}

            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
