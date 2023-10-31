import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Startup from "./pages/Startup";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/startup" element={<Startup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
