import { useState, createContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Startup from "./pages/Startup";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Error from "./pages/Error";
import Privacy from "./pages/Privacy";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
              <h4 className="h4">darkmode</h4>
            ) : (
              <h4 className="h4">lightmode</h4>
            )}
          </button>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/startup" element={<Startup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
