import "./Components.css";

import { useState, useEffect } from "react";

import bear from "../assets/bear.svg";
import startup from "../assets/startup.svg";
import learnmutiny from "../assets/learnmutiny.svg";

import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 125) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsNavOpen(!isNavOpen);

  const pathname = window.location.pathname;
  return (
    <>
      <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
        {isNavOpen && (
          <div className="navigation-screen">
            <div className="links">
              <a href="/">
                <div className="link-container">
                  <h4 className="h4">home</h4>
                </div>
              </a>
              <a href="/startup">
                <div className="link-container">
                  <h4 className="h4">startups</h4>
                </div>
              </a>
              <a href="/contact">
                <div className="link-container">
                  <h4 className="h4">contact</h4>
                </div>
              </a>
            </div>
          </div>
        )}

        {pathname !== "undefined" && pathname === "/startup" ? (
          <a href="/startup">
            <div className={`startup-logo ${scrolled ? "logo-scrolled" : ""}`}>
              <img src={startup} className="full-logo" alt="logo" />
              <img src={bear} className="bear-logo" alt="logo" />
            </div>
          </a>
        ) : (
          <a href="/">
            {pathname !== "undefined" && pathname === "/" ? (
              <div className={`normal-logo ${scrolled ? "logo-scrolled" : ""}`}>
                <img src={learnmutiny} className="full-logo" alt="logo" />
                <img src={bear} className="bear-logo" alt="logo" />
              </div>
            ) : (
              <div className={`normal-logo ${scrolled ? "logo-scrolled" : ""}`}>
                <img src={learnmutiny} className="full-logo" alt="logo" />
                <img src={bear} className="bear-logo" alt="logo" />
              </div>
            )}
          </a>
        )}
        <ul className="navigation">
          <li className={`nav-text ${scrolled ? "text-scrolled" : ""}`}>
            <a href="/">
              <h4 className="h4">home</h4>
            </a>
          </li>
          <li className={`nav-startup-text ${scrolled ? "text-scrolled" : ""}`}>
            <a href="/startup">
              <h4 className="h4">startups</h4>
            </a>
          </li>
          {/* <li className="nav-text">
          <a href="/contact">contact</a>
        </li> */}
          <li className={`nav-text ${scrolled ? "text-scrolled" : ""}`}>
            {" "}
            <a href="/contact">
              <h4 className="h4">contact</h4>
            </a>
          </li>
        </ul>
        {isNavOpen ? (
          <div className="navigation-buttons-mobile">
            <button onClick={toggleMenu}>
              <AiFillCloseCircle className="navigation-button" />
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
    </>
  );
}
