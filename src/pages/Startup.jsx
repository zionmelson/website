import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import {
  FaReact,
  FaAngular,
  FaPython,
  FaJs,
  FaDocker,
  FaEthereum,
  FaLaravel,
  FaNpm,
  FaNode,
} from "react-icons/fa";

import startups from "../assets/svg/startups.svg";
import calen from "../assets/svg/calen.svg";

import Lottie from "lottie-react";
import animation from "../assets/json/animate2.json";

import gsap from "gsap";
import SplitText from "split-text-js";
import { useEffect } from "react";

import "../App.css";

function Startup() {
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
        "<1.6"
      );
    });

    return () => tl.kill();
  }, []);

  return (
    <div className="main">
      {/* startup-intro desktop */}
      <div className="startup-box">
        <div className="vertical-content" style={{ marginTop: "3rem" }}>
          <h1
            className="h1"
            style={{
              marginBottom: "1rem",
            }}
          >
            find a senior
            <div
              className="text-wrapper"
              style={{
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              <p className="h1" id="p">
                full-stack developer
              </p>
              <p className="h1" id="p">
                front-end developer
              </p>
              <p className="h1" id="p">
                back-end developer
              </p>
              <p className="h1" id="p">
                machine learning engineer
              </p>
              <p className="h1" id="p">
                blockchain architect
              </p>
              <p className="h1" id="p">
                cloud engineer
              </p>
              <p className="h1" id="p">
                devops engineer
              </p>
              <p className="h1" id="p">
                mobile developer
              </p>
              <p className="h1" id="p">
                software engineer
              </p>
              <p className="h1" id="p">
                data scientist
              </p>
              <p className="h1" id="p">
                software architect
              </p>
              <p className="h1" id="p">
                database administrator
              </p>
            </div>
            for your startup
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem", width: "70%" }}>
            we specialize in placing developers in critical roles at promising
            startups
          </h2>{" "}
          <div className="icons">
            <AiFillAndroid id="android" className="icon" />
            <AiFillApple id="apple" className="icon" />
            <FaReact id="react" className="icon" />
          </div>
          <h2 className="h2" style={{ marginBottom: "1rem", width: "70%" }}>
            we specifically target vetted full-stack senior web developers
          </h2>
          <div className="icons" style={{ marginBottom: "1rem" }}>
            <FaLaravel id="laravel" className="icon" />
            <FaJs id="js" className="icon" />
            <FaAngular id="angular" className="icon" />
            <FaPython id="python" className="icon" />
            <FaDocker id="docker" className="icon" />
            <FaEthereum id="solidity" className="icon" />
            <FaNpm id="npm" className="icon" />
          </div>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            recruit your next developer with learnmutiny
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
      {/* startup-intro phone */}
      <div className="startup-box-mobile">
        <div className="vertical-content">
          <h1
            className="h1"
            style={{
              marginBottom: "1rem",
              width: "100%",
            }}
          >
            find a senior
            <div
              className="text-wrapper"
              style={{
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              <p className="h1" id="ph">
                full-stack developer
              </p>
              <p className="h1" id="ph">
                front-end developer
              </p>
              <p className="h1" id="ph">
                back-end developer
              </p>
              <p className="h1" id="ph">
                machine learning dev
              </p>
              <p className="h1" id="ph">
                blockchain architect
              </p>
              <p className="h1" id="ph">
                cloud engineer
              </p>
              <p className="h1" id="ph">
                devops engineer
              </p>
              <p className="h1" id="ph">
                mobile developer
              </p>
              <p className="h1" id="ph">
                software engineer
              </p>
              <p className="h1" id="ph">
                data scientist
              </p>
              <p className="h1" id="ph">
                software architect
              </p>
              <p className="h1" id="ph">
                database admin
              </p>
            </div>
            for your startup
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            we specialize in placing developers in critical roles at promising
            startups
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
            recruit your next developer with learnmutiny
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
      {/* matching-algo desktop */}
      <div className="startup-box">
        <div className="vertical-content">
          {" "}
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            our matching model
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            expanding teams can be difficult, at learnmutiny we excel at placing
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
            all of our developers are vetted and have a proven track record of
            industry expertise leading successful teams and developing projects.
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
            expanding teams can be difficult, at learnmutiny we excel at placing
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
            all of our developers are vetted and have a proven track record of
            industry expertise leading successful teams and developing projects.
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
            our direct-to-hire fee for full-time positions:
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
              <h1 className="h1">20%</h1>
              <h3
                className="h3"
                style={{ marginBottom: "1rem", width: "100%" }}
              >
                of annual salary
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
          <h2 className="h2" style={{ marginBottom: "1rem", width: "60%" }}>
            we know the hiring process can be stressful, because of this we work
            closely with your team to ensure successful placement
          </h2>
          <h3 className="h3" style={{ marginBottom: "3rem" }}>
            learnmutiny will refund a pro-rated portion of the fee paid if
            placement fails within the first 60 days
          </h3>
          <h2
            className="h2"
            style={{ marginBottom: "1rem", marginTop: "1rem" }}
          >
            meet with our team to start the source
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
      {/* pricing phone */}
      <div className="startup-box-mobile">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            pricing
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            our direct-to-hire fee for full-time positions:
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
            <h1 className="h1">20%</h1>
            <h3 className="h3" style={{ marginBottom: "1rem", width: "100%" }}>
              of annaul salary
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
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            we know the hiring process can be stressful, because of this we work
            closely with your team to ensure successful placement
          </h2>
          <h3 className="h3" style={{ marginBottom: "2rem" }}>
            learnmutiny will refund a pro-rated portion of the fee paid if
            placement fails within the first 60 days{" "}
          </h3>
          <h2
            className="h2"
            style={{ marginBottom: "1rem", marginTop: "1rem" }}
          >
            meet with our team to start the source
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
    </div>
  );
}

export default Startup;
