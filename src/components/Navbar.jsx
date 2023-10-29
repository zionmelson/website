import "./Components.css";

import bear from "../assets/bear.svg";
import startup from "../assets/startup.svg";
import learnmutiny from "../assets/learnmutiny.svg";

import { FaBars } from "react-icons/fa";
// import { AiFillCloseCircle } from "react-icons/ai";

export default function Navbar() {
  const pathname = window.location.pathname;
  return (
    <div className="navbar">
      <ul className="navigation">
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/startup">startups</a>
        </li>
        <li>
          {" "}
          <a href="/">login</a>
        </li>
      </ul>
      {pathname !== "undefined" && pathname === "/startup" ? (
        <a href="/startup">
          <div className="startup-logo">
            <img src={startup} className="full-logo" alt="logo" />
            <img src={bear} className="bear-logo" alt="logo" />
          </div>
        </a>
      ) : (
        <a href="/">
          <div className="normal-logo">
            <img src={learnmutiny} className="full-logo" alt="logo" />
            <img src={bear} className="bear-logo" alt="logo" />
          </div>
        </a>
      )}
      <div className="navigation-buttons">
        <FaBars className="navigation-button" />
      </div>
    </div>
  );
}
