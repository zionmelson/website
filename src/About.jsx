import {
  FaAngular,
  FaPython,
  FaRust,
  FaJs,
  FaDocker,
  FaEthereum,
  FaLaravel,
  FaNpm,
  FaNode,
} from "react-icons/fa";

import zion from "./assets/svg/zion.svg";
import max from "./assets/svg/max.svg";
import atlanta from "./assets/svg/atlanta.svg";

import Lottie from "lottie-react";
import animation from "./assets/json/animate.json";
import link from "./assets/svg/link.svg";
import bear from "./assets/svg/bear.svg";
import instagram from "./assets/svg/instagram.svg";
import github from "./assets/svg/github.svg";
import linkedin from "./assets/svg/linkedin.svg";
import x from "./assets/svg/X.svg";

import gsap from "gsap";
import SplitText from "split-text-js";

import "./App.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const technologies = gsap.utils.toArray("#gsap");
    const tl = gsap.timeline({ repeat: -1 });

    technologies.forEach((technology) => {
      const splitText = new SplitText(technology);

      splitText.chars.forEach((char) => {
        char.classList.add(`chars`);
      });

      tl.from(
        splitText.chars,
        {
          opacity: 0,
          fontWeight: 700,
          rotateX: -90,
          y: 80,
          stagger: 0.02,
        },
        "<"
      ).to(
        splitText.chars,
        {
          opacity: 0,
          fontWeight: 700,
          rotateX: 90,
          y: -80,
          stagger: 0.02,
        },
        "<1.8"
      );
    });

    return () => tl.kill();
  }, []);

  return (
    //
    <div className="main">
      {/* intro */}
      <div className="box">
        <div className="vertical-content">
          <h1 className="h1">sourcing senior engineers for startups</h1>
          <h2 className="h2">
            find your next full-time position with learnmutiny
          </h2>
          <Lottie animationData={animation} />
          <h3 className="h3">
            the clients we source for have raised at least a series A to B
            funding round, and are looking to hire a lead developer to amplify
            their internal development processes.
          </h3>
        </div>
      </div>
      {/* value */}
      <div className="box">
        <div className="vertical-content">
          <h1 className="h1">looking for your next position?</h1>
          <h2 className="h2">we take a different approach to sourcing</h2>
          <h3 className="h3">
            at learnmutiny our mission is to match you to companies that align
            with your career goals. <br />
          </h3>
          {window.screen.width > 768 ? (
            <div className="icons" style={{ marginBottom: "2rem" }}>
              <FaPython id="python" className="icon" />
              <FaRust id="rust" className="icon" />
              <FaJs id="js" className="icon" />
              <FaAngular id="angular" className="icon" />
              <FaDocker id="docker" className="icon" />
              <FaEthereum id="solidity" className="icon" />
              <FaLaravel id="laravel" className="icon" />
              <FaNpm id="npm" className="icon" />
              <FaNode id="node" className="icon" />
            </div>
          ) : (
            <div className="icons" style={{ marginBottom: "2rem" }}>
              <FaPython id="python" className="icon" />
              <FaRust id="rust" className="icon" />
              <FaJs id="js" className="icon" />
              <FaAngular id="angular" className="icon" />
            </div>
          )}
        </div>
      </div>
      {/* founders */}
      <div className="box">
        <div className="vertical-content">
          <h1 className="h1">meet the founders</h1>
          <div className="horizontal-content">
            <div className="headshot">
              <img src={zion} className="headshots" alt="zion" />
              <a
                href="https://linkedin.com/in/zionmelson"
                target="_blank"
                rel="noreferrer"
              >
                <span className="emoji-container">
                  <img src={link} className="emoji" alt="mu" />
                </span>
              </a>
            </div>
            <div className="headshot">
              <img src={max} className="headshots" alt="max" />
              <a
                href="https://www.linkedin.com/in/mxmilan/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="emoji-container">
                  <img src={link} className="emoji" alt="mu" />
                </span>
              </a>
            </div>
          </div>
          <h5 className="h5" id="bio">
            zion and max are atlanta natives who are invested in uplifting the
            startup ecosystem in the southeast. learnmutiny is our way of giving
            back to the startup community and turning ATL into a tech hub.
          </h5>
          <img src={atlanta} className="emoji" alt="mu" />
        </div>
      </div>
      {/* contact */}
      <div className="box">
        <div className="vertical-content" style={{ padding: "2rem" }}>
          <h1 className="h1">contact us</h1>
          <span
            className="emoji-container"
            id="support"
            style={{ marginBottom: "1rem" }}
          >
            <img src={bear} className="emoji" alt="mu" />
            support@learnmutiny.io
          </span>
          <div className="socials">
            <a
              href="https://www.instagram.com/learnmutiny/"
              target="_blank"
              rel="noreferrer"
              className="social"
            >
              <img src={instagram} alt="instagram" />
            </a>
            <a
              href="https://www.github.com/learnmutiny-io/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="social" src={github} alt="github" />
            </a>
            <a
              href="https://www.linkedin.com/company/learnmutiny/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="social" src={linkedin} alt="linkedin" />
            </a>
            <a
              href="https://www.twitter.com/learnmutiny/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="social" src={x} alt="x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
