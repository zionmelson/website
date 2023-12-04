import { useState, createContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Startup from "./pages/Startup";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Error from "./pages/Error";
import Privacy from "./pages/Privacy";
import { Analytics } from "@vercel/analytics/react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Savage from "./pages/developers/dcb916";
import Liang from "./pages/developers/62328c";
import Grimm from "./pages/developers/27ff01";
import Rogers from "./pages/developers/601892";
import Blaze from "./pages/developers/672957";
import Richards from "./pages/developers/0459bb";
import Queen from "./pages/developers/2e31c0";
import Wilson from "./pages/developers/c29e3b";
import Murdock from "./pages/developers/3f7099";
import Douglas from "./pages/developers/5adff2";
import Spencer from "./pages/developers/1270f5";
import Lucas from "./pages/developers/8a6ca5";

import "./App.css";

export const ThemeContext = createContext(null);

function App() {
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

          <button onClick={toggleTheme} className="theme-button">
            {theme === "" ? (
              <h4 className="h4" style={{ color: "#302f31" }}>
                darkmode
              </h4>
            ) : (
              <h4 className="h4" style={{ color: "#fff" }}>
                lightmode
              </h4>
            )}
          </button>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/startup" element={<Startup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />

            <Route path="/developers/2e31c0" element={<Queen />} />
            <Route path="/developers/601892" element={<Rogers />} />
            <Route path="/developers/27ff01" element={<Grimm />} />
            <Route path="/developers/62328c" element={<Liang />} />
            <Route path="/developers/672957" element={<Blaze />} />
            <Route path="/developers/0459bb" element={<Richards />} />
            <Route path="/developers/dcb916" element={<Savage />} />
            <Route path="/developers/c29e3b" element={<Wilson />} />
            <Route path="/developers/3f7099" element={<Murdock />} />
            <Route path="/developers/5adff2" element={<Douglas />} />
            <Route path="/developers/1270f5" element={<Spencer />} />
            <Route path="/developers/8a6ca5" element={<Lucas />} />

            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
        <Analytics />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
