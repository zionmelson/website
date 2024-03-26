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
import { useRef, useState } from "react";

import zion from "./assets/png/zion.png";
import zionBlurry from "./assets/png/zionBlurry.png";
import maxmillian from "./assets/png/maxmillian.png";
import maxmillianBlurry from "./assets/png/maxmillianBlurry.png";
import atlanta from "./assets/svg/atlanta.svg";
import link from "./assets/svg/link.svg";
import logo from "./assets/svg/logo.svg";
import instagram from "./assets/svg/instagram.svg";
import github from "./assets/svg/github.svg";
import linkedin from "./assets/svg/linkedin.svg";
import x from "./assets/svg/X.svg";

import "./App.css";
import { useEffect } from "react";

function Home() {
  const blurredImageDivRef = useRef(null);
  const imgRef = useRef(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const setDiscord = async () => {
    const data = await fetch(
      "https://discord.com/api/guilds/984461709806804992/widget.json"
    );
    const json = await data.json();

    console.log(json);
  };

  useEffect(() => {
    setDiscord();
    if (isLoaded) {
      console.log("img loaded");
      const blurredImageDiv = blurredImageDivRef.current;
      const img = imgRef.current;

      const loaded = () => {
        if (blurredImageDiv) {
          console.log("blurredImageDiv loaded");
        }
      };

      if (isLoaded) {
        console.log("img loaded");
        loaded();
      } else {
        console.log("img not loaded");
        img.addEventListener("load", loaded);
      }
    }
  }, [isLoaded]);

  return (
    //
    <div className="main">
      {/* intro */}
      <div className="box">
        <div className="vertical-content">
          <h1 className="h1">Sourcing senior engineers for startups</h1>
          <h2 className="h2">find your next position at</h2>
          <span
            className="emoji-container"
            style={{
              marginBottom: "1rem",
            }}
          >
            <img src={logo} className="emoji" alt="mu" />
            learnmutiny.io
          </span>
          <iframe
            src="https://discord.com/widget?id=984461709806804992&theme=dark"
            width="350"
            height="500"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </div>
      {/* value */}
      <div className="box">
        <div className="vertical-content">
          <h1 className="h1">Find your next position</h1>
          <h2 className="h2">we take a different approach</h2>
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

          <a
            href="https://discord.com/invite/ZbGfyErE3w"
            target="_blank"
            rel="noreferrer"
          >
            <span className="emoji-container">
              <h3 className="h3" style={{ marginBottom: "0" }}>
                join discord
              </h3>
            </span>
          </a>
        </div>
      </div>
      {/* partners */}
      <div className="box">
        <div className="vertical-content">
          <h1 className="h1">Meet the team</h1>
          <div className="horizontal-content">
            <div className="headshot">
              {isLoaded ? (
                <div>
                  <img
                    src={zion}
                    loading="eagar"
                    decoding="async"
                    className="headshots"
                    alt="zion"
                  />
                </div>
              ) : (
                <div
                  ref={blurredImageDivRef}
                  className="blurred-image"
                  style={{
                    backgroundImage: `url(${zionBlurry})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    animation: "pulse 2.5s infinite",
                    filter: "blur(10px)",
                    borderRadius: "0.5rem",
                    border: "2px solid #fff",
                  }}
                >
                  <img
                    onLoad={handleImageLoad}
                    src={zion}
                    loading="eagar"
                    decoding="async"
                    className="headshots"
                    alt="zion"
                    ref={imgRef}
                  />
                </div>
              )}
              <h5 className="h5">zion | managing partner</h5>
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
              {isLoaded ? (
                <div>
                  <img
                    src={maxmillian}
                    loading="eagar"
                    decoding="async"
                    className="headshots"
                    alt="maxmillian"
                  />
                </div>
              ) : (
                <div
                  ref={blurredImageDivRef}
                  className="blurred-image"
                  style={{
                    backgroundImage: `url(${maxmillianBlurry})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    animation: "pulse 2.5s infinite",
                    filter: "blur(10px)",
                  }}
                >
                  <img
                    onLoad={handleImageLoad}
                    src={maxmillian}
                    loading="eagar"
                    decoding="async"
                    className="headshots"
                    alt="maxmillian"
                    ref={imgRef}
                  />
                </div>
              )}
              <h5 className="h5">maxmillian | managing partner</h5>
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
            our team is invested in uplifting the startup ecosystem in the
            southeast.
          </h5>
          <h5 className="h5" id="bio">
            learnmutiny is giving back to the startup community and turning ATL
            into a tech hub.
          </h5>
          <img src={atlanta} className="emoji" alt="mu" />
        </div>
      </div>
      {/* contact */}
      <div className="box">
        <div className="vertical-content" style={{ padding: "2rem" }}>
          <h1 className="h1">Contact us</h1>
          <span
            className="emoji-container"
            id="support"
            style={{ marginBottom: "1rem" }}
          >
            <img src={logo} className="emoji" alt="mu" />
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
