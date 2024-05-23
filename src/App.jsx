import { Analytics } from "@vercel/analytics/react";
import Hotjar from "@hotjar/browser";

import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Find from "./Find";
import Privacy from "./Privacy";
import Terms from "./Terms";
import Error from "./Error";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

const siteId = 3788387;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-work" element={<Find />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
