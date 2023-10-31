import { useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Startup from "./pages/Startup";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(true);

  const toggleMode = () => setTheme(!theme);
  return (
    <>
      <ThemeContext.Provider value={{ toggleMode }}>
        <div className={theme ? "App" : "App-light"} id={theme ? "" : "light"}>
          <Navbar />
          <button onClick={toggleMode} className="theme-button">
            {theme ? (
              <h3 className="h3">darkmode</h3>
            ) : (
              <h3 className="h3">lightmode</h3>
            )}
          </button>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/startup" element={<Startup />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
