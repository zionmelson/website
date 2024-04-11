import "./Components.css";

import { useState, useEffect } from "react";

import bear from "../assets/svg/bear.svg";
import learnmutiny from "../assets/svg/learnmutiny-io.svg";

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

  return (
    <>
      <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
        {isNavOpen && (
          <div className="navigation-screen">
            <div className="links">
              <a href="/">
                <h5 className="h5">
                  <div className="link-container">home</div>
                </h5>
              </a>
              <a href="/find-work">
                <h5 className="h5">
                  <div className="link-container">find work</div>
                </h5>
              </a>
              <a href="/hire">
                <h5 className="h5">
                  <button className="link-container">book a demo</button>
                </h5>
              </a>
            </div>
          </div>
        )}
        <a href="/">
          <div className={`normal-logo ${scrolled ? "logo-scrolled" : ""}`}>
            <img src={learnmutiny} className="og-logo" alt="logo" />
            <img src={bear} className="bear-logo" alt="logo" />
          </div>
        </a>
        <ul className="navigation">
          <li className={`nav-text ${scrolled ? "text-scrolled" : ""}`}>
            <a href="/">
              <h4 className="h4">home</h4>
            </a>
          </li>
          <li className={`nav-text ${scrolled ? "text-scrolled" : ""}`}>
            <a href="/find-work">
              <h4 className="h4">find work</h4>
            </a>
          </li>
          <li className={`nav-text ${scrolled ? "text-scrolled" : ""}`}>
            {" "}
            <a href="/hire">
              <h5 className="h5">
                <button className="emoji-container">book a demo</button>
              </h5>
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
