import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import {
  FaReact,
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
// import { gsap } from "gsap";
// import SplitType from "split-type";

import startups from "../assets/startups.svg";
import calen from "../assets/calen.svg";

import Lottie from "lottie-react";
import animation from "../assets/animate2.json";

import "../App.css";

function Startup() {
  // const positions = gsap.utils.toArray("#position");
  // const time = gsap.timeline();

  // positions.forEach((position) => {
  //   const splitText = new SplitType(position);

  //   time
  //     .from(
  //       splitText.chars,
  //       {
  //         opacity: 0,
  //         fontFamily: "Inter, sans-serif",
  //         y: 40,
  //       },
  //       "<"
  //     )
  //     .to(
  //       splitText.chars,
  //       {
  //         opacity: 0,
  //         fontFamily: "Inter, sans-serif",
  //         y: -40,
  //       },
  //       "<2"
  //     );
  // });

  return (
    <div className="main">
      {/* startup-intro desktop */}
      <div className="startup-box">
        <div className="vertical-content">
          <h1
            className="h1"
            style={{
              marginTop: "5rem",
              marginBottom: "1rem",
            }}
          >
            find a <span className="span">senior tech lead</span> for your
            startup
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem", width: "70%" }}>
            we specialzie in placing technical leaders in critical roles at
            promising startups
          </h2>{" "}
          <div className="icons">
            <AiFillAndroid id="android" className="icon" />
            <AiFillApple id="apple" className="icon" />
            <FaReact id="react" className="icon" />
          </div>
          <h2 className="h2" style={{ marginBottom: "1rem", width: "70%" }}>
            we specifically target vetted full-stack senior web developers
          </h2>
          <div className="icons">
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
        </div>
      </div>
      {/* startup-intro phone */}
      <div className="startup-box-mobile">
        <div className="vertical-content">
          <h1
            className="h1"
            style={{
              marginBottom: "1rem",
            }}
          >
            find a <span className="span">senior tech lead</span> for your
            startup
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            we specialzie in placing technical leaders in critical roles at
            promising startups
          </h2>{" "}
          <div className="icons">
            <AiFillAndroid id="android" className="icon" />
            <AiFillApple id="apple" className="icon" />
            <FaReact id="react" className="icon" />
          </div>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            we specifically target full-stack senior web developers
          </h2>
          <div className="icons" style={{ marginBottom: "2rem" }}>
            <FaDocker
              id="docker"
              className="icon"
              style={{ margin: "0.6rem" }}
            />
            <FaEthereum
              id="solidity"
              className="icon"
              style={{ margin: "0.6rem" }}
            />
            <FaLaravel
              id="laravel"
              className="icon"
              style={{ margin: "0.6rem" }}
            />
            <FaNode id="node" className="icon" style={{ margin: "0.6rem" }} />
          </div>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            hire with us
          </h2>
          <a
            href="https://calendly.com/learnmutiny/company-intro"
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
      {/* startup-mu desktop */}
      {/* <div className="startup-box">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            create your startup profile
          </h1>
          <div className="vertical-content">
            <img src={startup} className="logo" alt="startup" />
            <h2 className="h3" style={{ marginBottom: "1rem" }}>
              your startup profile will reflect your company
            </h2>
          </div>
        </div>
      </div> */}
      {/* startup-mu phone */}
      {/* <div className="startup-box-mobile">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            create your startup mu
          </h1>
          <div className="vertical-content">
            <img src={startup} className="logo" alt="startup" />
            <h2 className="h3" style={{ marginBottom: "1rem" }}>
              your startup profile will reflect your company
            </h2>
          </div>
        </div>
      </div> */}
      {/* matching-algo desktop */}
      <div className="startup-box">
        <div className="vertical-content">
          {" "}
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            our matching model
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            expanding teams are difficult, at learnmutiny we excel at placing
            professionals that compliment the exact needs of your company
          </h2>
          <Lottie
            animationData={animation}
            style={{
              marginBottom: "1rem",
              width: "20%",
            }}
          />
          <h3 className="h3" style={{ width: "75%" }}>
            all of our professionals are vetted and have a proven track record
            of industry expertise leading successful teams and developing
            projects.
          </h3>
        </div>
      </div>
      {/* matching-algo phone */}
      <div className="startup-box-mobile">
        <div className="vertical-content">
          {" "}
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            our matching model
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            expanding teams are difficult, at learnmutiny we excel at placing
            professionals that compliment the exact needs of your company
          </h2>
          <Lottie
            animationData={animation}
            style={{
              marginBottom: "1rem",
              width: "60%",
            }}
          />
          <h3 className="h3">
            all of our professionals are vetted and have a proven track record
            of industry expertise leading successful teams and developing
            projects.
          </h3>
        </div>
      </div>
      {/* pricing desktop */}
      <div className="startup-box">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            pricing
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            our staffing fees for full-time positions:
          </h2>
          <div
            className="horizontal-content-small"
            style={{ marginBottom: "1rem" }}
          >
            <div
              className="vertical-content"
              id="startup-box"
              style={{
                borderRadius: "2rem",
                padding: "1rem",
                margin: "1rem",
              }}
            >
              <h1 className="h1">25%</h1>
              <h3
                className="h3"
                style={{ marginBottom: "1rem", width: "100%" }}
              >
                of total salary
              </h3>
              <h3
                className="h3"
                style={{ marginBottom: "0.5rem", width: "90%" }}
              >
                <a
                  href="https://calendly.com/learnmutiny/company-intro"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="emoji-container">
                    <h4 className="h4">view salaries</h4>
                  </span>{" "}
                </a>
              </h3>
              <img src={startups} className="logo" alt="medium" />
            </div>
          </div>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            we know the hiring process can be stressful, because of this we work
            closely with your team to ensure successful placement
          </h2>
          <h3 className="h3" style={{ marginBottom: "1rem" }}>
            find your next co-founder with learnmutiny
          </h3>
          <a
            href="https://calendly.com/learnmutiny/company-intro"
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
      {/* pricing phone */}
      <div className="startup-box-mobile">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            pricing
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            our staffing fees for full-time positions:
          </h2>
          <div
            className="vertical-content"
            id="startup-box"
            style={{
              borderRadius: "2rem",
              padding: "1rem",
              margin: "1rem",
            }}
          >
            <h1 className="h1">25%</h1>
            <h3 className="h3" style={{ marginBottom: "1rem", width: "100%" }}>
              of total salary
            </h3>
            <h3 className="h3" style={{ marginBottom: "0.5rem", width: "90%" }}>
              <a
                href="https://calendly.com/learnmutiny/company-intro"
                target="_blank"
                rel="noreferrer"
              >
                <span className="emoji-container">
                  <h4 className="h4">view salaries</h4>
                </span>{" "}
              </a>
            </h3>
            <img src={startups} className="logo" alt="medium" />
          </div>
        </div>
        <h2 className="h2" style={{ marginBottom: "1rem" }}>
          we know the hiring process can be stressful, because of this we work
          closely with your team to ensure successful placement
        </h2>
        <h3 className="h3" style={{ marginBottom: "1rem" }}>
          find your next co-founder with learnmutiny
        </h3>
        <a
          href="https://calendly.com/learnmutiny/company-intro"
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
  );
}

export default Startup;
