import "./Components.css";

import { useState } from "react";

import bear from "../assets/bear.svg";
import support from "../assets/support.svg";
import startup from "../assets/startup.svg";
import learnmutiny from "../assets/learnmutiny.svg";

import { FaBars } from "react-icons/fa";
// import { AiFillCloseCircle } from "react-icons/ai";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => setIsNavOpen(!isNavOpen);

  const pathname = window.location.pathname;
  return (
    <div className="navbar">
      {isNavOpen && (
        <div className="navigation-screen">
          <div className="links">
            <a href="/">
              <div className="emoji-container">
                <h2 className="h2">home</h2>{" "}
              </div>{" "}
            </a>
            <a href="/startup">
              {" "}
              <div className="emoji-container">
                <h2 className="h2">startup</h2>
              </div>{" "}
            </a>
            <a href="/contact">
              <div className="emoji-container">
                <h2 className="h2">login</h2>
              </div>{" "}
            </a>
          </div>
        </div>
      )}
      <ul className="navigation">
        <li className="nav-text">
          <a href="/">home</a>
        </li>
        <li className="nav-startup-text">
          <a href="/startup">startups</a>
        </li>
        {/* <li className="nav-text">
          <a href="/contact">contact</a>
        </li> */}
        <li className="nav-text">
          {" "}
          {/* change this in production */}
          <a
            // href="https://learnmutiny-sigma.vercel.app/"
            href="/contact"
          >
            login
          </a>
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
          {pathname !== "undefined" && pathname === "/" ? (
            <div className="normal-logo">
              <img src={learnmutiny} className="full-logo" alt="logo" />
              <img src={bear} className="bear-logo" alt="logo" />
            </div>
          ) : (
            <div className="support-logo">
              <img src={support} className="full-logo" alt="logo" />
              <img src={bear} className="bear-logo" alt="logo" />
            </div>
          )}
        </a>
      )}
      {isNavOpen ? (
        <div className="navigation-buttons-mobile">
          <button onClick={toggleMenu}>
            <FaBars className="navigation-button" />
          </button>
        </div>
      ) : (
        <div className="navigation-buttons">
          <button onClick={toggleMenu}>
            <FaBars className="navigation-button" />
          </button>
        </div>
      )}
    </div>
  );
}
