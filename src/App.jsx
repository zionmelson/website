import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next/react";
import Hotjar from "@hotjar/browser";

import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Stats from "./Stats";
import Error from "./Error";
import Footer from "./Footer";
import Careers from "./Careers";

import Terms from "./Terms";
import Privacy from "./Privacy";

import "./App.css";

const siteId = 3788387;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
