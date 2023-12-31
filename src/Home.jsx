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
import calen from "./assets/svg/calen.svg";

import gsap from "gsap";
import SplitText from "split-text-js";

import "./App.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const technologies = gsap.utils.toArray("#p");
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
        "<1.6"
      );
    });

    return () => tl.kill();
  }, []);

  useEffect(() => {
    const technologies = gsap.utils.toArray("#ph");
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
          y: 80,
          rotateX: -90,
          stagger: 0.02,
        },
        "<"
      ).to(
        splitText.chars,
        {
          opacity: 0,
          fontWeight: 700,
          y: -80,
          rotateX: 90,
          stagger: 0.02,
        },
        "<1.6"
      );
    });

    return () => tl.kill();
  }, []);

  return (
    //
    <div className="main">
      {/* intro desktop */}
      <div className="box">
        <div className="vertical-content" style={{ marginTop: "3rem" }}>
          <h1 className="h1" style={{ marginBottom: "1rem", width: "70%" }}>
            we source senior
            <div>
              <div
                className="text-wrapper"
                style={{ marginTop: "1.1rem", marginBottom: "1.3rem" }}
              >
                <p id="p">Go-Lang</p>
                <p id="p">Python</p>
                <p id="p">Rust</p>
                <p id="p">Javascript</p>
                <p id="p">C++</p>
                <p id="p">AWS</p>
                <p id="p">Docker</p>
                <p id="p">Solidity</p>
                <p id="p">Kubernetes</p>
                <p id="p">Node.js</p>
                <p id="p">GCP</p>
                <p id="p">Azure Cloud</p>
                <p id="p">.NET</p>
                <p id="p">Django</p>
                <p id="p">Postgres</p>
                <p id="p">MySQL</p>
                <p id="p">MongoDB</p>
                <p id="p">C#</p>
                <p id="p">Kotlin</p>
                <p id="p">Java</p>
                <p id="p">Flutter</p>
                <p id="p">React</p>
                <p id="p">Vue</p>
                <p id="p">React Native</p>
                <p id="p">Swift</p>
                <p id="p">C</p>
              </div>
            </div>
            developers for startups
          </h1>
          <h2 className="h2">
            find your next full-time position with learnmutiny
          </h2>
          <Lottie
            animationData={animation}
            style={{
              width: "20%",
            }}
          />
          <h3 className="h3" style={{ marginBottom: "1rem", width: "65%" }}>
            we source for startups who have raised pre-seed to series B funding
            rounds and are looking to hire a full-stack lead developer to
            amplify their internal development processes.
          </h3>
        </div>
      </div>
      {/* value desktop*/}
      <div className="box">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            looking for your next position?
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem", width: "70%" }}>
            we take a different approach to sourcing
          </h2>
          <h3 className="h3" style={{ marginBottom: "1rem", width: "75%" }}>
            at learnmutiny our mission is to match you with companies that align
            with your career goals. <br />
            we place full-stack developers at startups that are working in up
            and coming areas of technology.
          </h3>
          <div className="icons" style={{ marginBottom: "1rem" }}>
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
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            schedule a developer introduction with us
          </h2>
          <a
            href="https://calendly.com/learnmutiny/showcase"
            target="_blank"
            rel="noreferrer"
          >
            <span className="emoji-container">
              <img src={calen} className="emoji" alt="mu" />
              Calendly
            </span>
          </a>
        </div>
      </div>
      {/* intro phone */}
      <div className="box-mobile">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            we source senior
            <div
              className="text-wrapper"
              style={{ marginTop: "1rem", marginBottom: "1rem" }}
            >
              <p id="ph">Go-Lang</p>
              <p id="ph">Python</p>
              <p id="ph">Rust</p>
              <p id="ph">Javascript</p>
              <p id="ph">C++</p>
              <p id="ph">AWS</p>
              <p id="ph">Docker</p>
              <p id="ph">Solidity</p>
              <p id="ph">Kubernetes</p>
              <p id="ph">Node.js</p>
              <p id="ph">GCP</p>
              <p id="ph">Azure Cloud</p>
              <p id="ph">.NET</p>
              <p id="ph">Django</p>
              <p id="ph">Postgres</p>
              <p id="ph">MySQL</p>
              <p id="ph">MongoDB</p>
              <p id="ph">C#</p>
              <p id="ph">Kotlin</p>
              <p id="ph">Java</p>
              <p id="ph">Flutter</p>
              <p id="ph">React</p>
              <p id="ph">Vue</p>
              <p id="ph">React Native</p>
              <p id="ph">Swift</p>
              <p id="ph">C</p>
            </div>
            developers for startups
          </h1>
          <h2 className="h2">
            find your next full-time position with learnmutiny
          </h2>
          <Lottie
            animationData={animation}
            style={{
              marginBottom: "1rem",
              width: "60%",
            }}
          />
          <h3 className="h3" style={{ marginBottom: "1rem" }}>
            we source for startups who have raised pre-seed to series B funding
            rounds and are looking to hire a full-stack lead developer to
            amplify their internal development processes.
          </h3>
        </div>
      </div>
      {/* value phone*/}
      <div className="box-mobile">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            looking for your next position?
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            we take a different approach to sourcing
          </h2>
          <h3 className="h3" style={{ marginBottom: "1rem", width: "85%" }}>
            at learnmutiny our mission is to place full-stack developers at
            startups that are working in up and coming areas of technology.
          </h3>
          <div className="icons" style={{ marginBottom: "1rem" }}>
            <FaPython id="python" className="icon" />
            <FaRust id="rust" className="icon" />
            <FaJs id="js" className="icon" />
            <FaNode id="node" className="icon" />
          </div>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            schedule a developer intro with us
          </h2>
          <a
            href="https://calendly.com/learnmutiny/showcase"
            target="_blank"
            rel="noreferrer"
          >
            <span className="emoji-container">
              <img src={calen} className="emoji" alt="mu" />
              Calendly
            </span>
          </a>
        </div>
      </div>
      {/* founders desktop */}
      <div className="box">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            meet the founders
          </h1>
          <div className="horizontal-content">
            <div className="headshot">
              <img src={zion} className="headshots" alt="zion" />
              <h2
                className="h2"
                style={{ marginBottom: "1rem", marginTop: "1rem" }}
              >
                <span className="horizontal-content-small">
                  zion
                  <a
                    href="https://linkedin.com/in/zionmelson"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="emoji-container" style={{ padding: 0 }}>
                      {" "}
                      <img src={link} className="emoji" alt="mu" />
                    </span>
                  </a>
                </span>
              </h2>
            </div>
            <div className="horizontal-content">
              <div className="headshot">
                <img src={max} className="headshots" alt="max" />
                <h2
                  className="h2"
                  style={{ marginBottom: "1rem", marginTop: "1rem" }}
                >
                  <span className="horizontal-content-small">
                    maxmillian
                    <a
                      href="https://www.linkedin.com/in/mxmilan/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="emoji-container" style={{ padding: 0 }}>
                        {" "}
                        <img src={link} className="emoji" alt="mu" />
                      </span>
                    </a>
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            zion and max are atlanta natives who are invested in the uplifting
            the startup ecosystem by sourcing high caliber tech talent for
            innovative startups
          </h2>
          <h3 className="h3" style={{ marginBottom: "1rem" }}>
            learnmutiny is our way of giving back to the startup community and
            turning ATL into the tech hub of the southeast (represent).
          </h3>
        </div>
      </div>
      {/* founders phone */}
      <div className="box-mobile">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            meet the founders
          </h1>
          <div className="vertical-content">
            <div className="headshot">
              <img src={zion} className="headshots" alt="zion" />
              <h2
                className="h2"
                style={{ marginBottom: "1rem", marginTop: "1rem" }}
              >
                <span className="horizontal-content-small">
                  zion
                  <a
                    href="https://linkedin.com/in/zionmelson"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="emoji-container" style={{ padding: 0 }}>
                      {" "}
                      <img src={link} className="emoji" alt="mu" />
                    </span>
                  </a>
                </span>
              </h2>
            </div>
            <div className="headshot">
              <img src={max} className="headshots" alt="max" />
              <h2
                className="h2"
                style={{ marginBottom: "1rem", marginTop: "1rem" }}
              >
                <span className="horizontal-content-small">
                  maxmillian
                  <a
                    href="https://linkedin.com/in/mxmilan"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="emoji-container" style={{ padding: 0 }}>
                      {" "}
                      <img src={link} className="emoji" alt="mu" />
                    </span>
                  </a>
                </span>
              </h2>
            </div>
          </div>
          <h2 className="h2" style={{ marginBottom: "1rem", width: "80%" }}>
            zion and max are atlanta natives and are invested in the uplifting
            the startup ecosystem.
          </h2>
          <h3 className="h3" style={{ marginBottom: "1rem" }}>
            learnmutiny is our way of turning ATL into the southeast tech hub.
          </h3>
          <span className="emoji-container" style={{ padding: 0 }}>
            <img src={atlanta} className="emoji" alt="mu" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
