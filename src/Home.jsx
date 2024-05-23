/* eslint-disable use-isnan */
/* eslint-disable react/prop-types */
// import { io } from "socket.io-client";
import { FaUber, FaStripeS, FaDiscord } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { SiCashapp } from "react-icons/si";
import { FaMeta } from "react-icons/fa6";
import { TbBrandAirbnb } from "react-icons/tb";

import { Link } from "react-router-dom";

import logo from "./assets/svg/logo.svg";

import gsap from "gsap";
import SplitText from "split-text-js";
import { useEffect, useState } from "react";

import "./App.css";

function Home() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "");

  const [mobile, setMobile] = useState(false);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTheme(theme);
    if (window.screen.width < 1100) {
      setMobile(true);
    }

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
          y: 60,
          rotateX: -35,
          stagger: 0.02,
        },
        "<"
      ).to(
        splitText.chars,
        {
          opacity: 0,
          fontWeight: 700,
          y: -60,
          rotateX: 35,
          stagger: 0.02,
        },
        "<1.8"
      );
    });

    setTimeout(() => setLoaded(true), 800);

    return () => tl.kill();
  }, [loaded, theme]);

  return (
    <div className="main">
      {/* intro */}
      <div className="box">
        <div className="vertical-content">
          <h1 className="h1">
            Hire a big tech
            {loaded ? (
              <div className="span">
                {loaded ? (
                  <>
                    <h2 className="h1" id="gsap">
                      full-stack developer
                    </h2>
                    <h2 className="h1" id="gsap">
                      back-end developer
                    </h2>
                    <h2 className="h1" id="gsap">
                      systems engineer
                    </h2>
                    <h2 className="h1" id="gsap">
                      software architect
                    </h2>
                    <h2 className="h1" id="gsap">
                      regression engineer
                    </h2>
                    <h2 className="h1" id="gsap">
                      cloud engineer
                    </h2>
                    <h2 className="h1" id="gsap">
                      blockchain engineer
                    </h2>
                    <h2 className="h1" id="gsap">
                      devops engineer
                    </h2>
                    <h2 className="h1" id="gsap">
                      database engineer
                    </h2>
                    <h2 className="h1" id="gsap">
                      data engineer
                    </h2>
                    <h2 className="h1" id="gsap">
                      project manager
                    </h2>
                    <h2 className="h1" id="gsap">
                      ui/ux designer
                    </h2>
                    <h2 className="h1" id="gsap">
                      graphic designer
                    </h2>
                    <h2 className="h1" id="gsap">
                      animation engineer
                    </h2>
                    <h2 className="h1" id="gsap">
                      product manager
                    </h2>
                    <h2 className="h1" id="gsap">
                      scrum master
                    </h2>
                  </>
                ) : (
                  <>
                    <div className="span"></div>
                  </>
                )}
              </div>
            ) : (
              <div className="span"></div>
            )}
            for your startup
          </h1>
          <h2 className="h2">
            we source tech talent from tech giants and unicorns
          </h2>
          {loaded ? (
            <div
              className={`icons ${mobile ? "mobile" : ""}`}
              style={{
                height: "5rem",
              }}
            >
              <SiCashapp id="cashapp" className="icon" />
              <FaMeta id="meta" className="icon" />
              <RiTwitterXFill id="X" className="icon" />
              <TbBrandAirbnb id="airbnb" className="icon" />
              {!mobile && (
                <>
                  <FaUber id="uber" className="icon" />
                  <FaStripeS id="stripe" className="icon" />
                  <FaDiscord id="discord" className="icon" />
                </>
              )}
            </div>
          ) : (
            <div
              className={`icons ${mobile ? "mobile" : ""}`}
              style={{ height: "5rem" }}
            >
              <img src={logo} id="icon" />
            </div>
          )}
          <h2 className="h2">and place them at your startup</h2>
          <Link to="https://discord.gg/SG9RvqWb88">
            <h5 className="h5">
              <button className="emoji-container">book a demo</button>
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
