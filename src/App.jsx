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

import Joesph from "./pages/developers/2e31c0";

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
            <Route path="/developers/2e31c0" element={<Joesph />} />
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
