import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import { FaReact, FaUber, FaStripeS } from "react-icons/fa";

import { RiTwitterXFill } from "react-icons/ri";
import { SiCashapp } from "react-icons/si";
import { FaMeta } from "react-icons/fa6";
import { TbBrandAirbnb } from "react-icons/tb";

import calen from "../assets/svg/calen.svg";

import Lottie from "lottie-react";
import animation from "../assets/json/animate2.json";

import metamask from "../assets/svg/metamask.svg";
import stock from "../assets/svg/stock.svg";
import apple from "../assets/svg/apple.svg";
import yc from "../assets/svg/yc.svg";
import a16z from "../assets/svg/a16z.svg";
import founders from "../assets/svg/founders.svg";

import jonathan from "../assets/png/jonathan.png";
import ian from "../assets/png/ian.png";
import smiley from "../assets/png/max.png";

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
              width: "100%",
            }}
          >
            hire a &quot;laid-off&quot; senior
            <div
              className="text-wrapper"
              style={{
                marginTop: "1.2rem",
                marginBottom: "1.2rem",
              }}
            >
              <p className="h1" id="p">
                full-stack developer
              </p>
              <p className="h1" id="p">
                systems engineer
              </p>
              <p className="h1" id="p">
                back-end developer
              </p>
              <p className="h1" id="p">
                machine learning dev
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
                software engineer
              </p>
              <p className="h1" id="p">
                data scientist
              </p>
              <p className="h1" id="p">
                software architect
              </p>
              <p className="h1" id="p">
                database admin
              </p>
            </div>
            for your startup
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            we specialize in placing professional developers in critical roles
            at startups
          </h2>{" "}
          <div className="icons">
            <AiFillAndroid id="android" className="icon" />
            <AiFillApple id="apple" className="icon" />
            <FaReact id="react" className="icon" />
          </div>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            we source recently laid-off senior developers from tech giants and
            unicorns
          </h2>
          <div className="icons" style={{ marginBottom: "2rem" }}>
            <SiCashapp id="cashapp" className="icon" />
            <FaMeta id="meta" className="icon" />
            <RiTwitterXFill id="X" className="icon" />
            <TbBrandAirbnb id="airbnb" className="icon" />
            <FaUber id="uber" className="icon" />
            <FaStripeS id="stripe" className="icon" />
          </div>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            and place them at your startup company
          </h2>
        </div>
      </div>
      {/* hiring desktop */}
      <div className="startup-box">
        <div className="vertical-content">
          {" "}
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            hiring laid-off talent
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            the biggest names in tech are laying off thousands of talented
            senior engineers that are now available for hire
          </h2>
          <Lottie
            animationData={animation}
            style={{
              marginBottom: "1rem",
              width: "20%",
            }}
          />
          <h3 className="h3">
            we have built relationship pipelines with these engineers and can
            work with your team to get you access to our professionals
          </h3>
        </div>
      </div>
      {/* companies desktop  */}
      <div className="startup-box">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            venture backed clients
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            we work with clients that are backed by top venture capital firms
            and have raised their series A to B round
          </h2>
          <h3 className="h3" style={{ marginBottom: "1rem" }}>
            we have helped companies backed by YCombinator, Andreessen Horowitz,
            and Founder&apos;s Fund source talent for their teams
          </h3>
          <div
            className="horizontal-content-small"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
              margin: 0,
            }}
          >
            <span
              className="emoji-container"
              style={{
                marginBottom: "1rem",
                padding: "1rem",
                border: "2px solid #fff",
              }}
            >
              <img src={yc} className="emoji-2" alt="calendar" />
              YCombinator
            </span>
            <span
              className="emoji-container"
              style={{
                marginBottom: "1rem",
                padding: "1rem",
                border: "2px solid #fff",
              }}
            >
              <img src={a16z} className="emoji-2" alt="calendar" />
              Andreessen Horowitz
            </span>
            <span
              className="emoji-container"
              style={{
                marginBottom: "1rem",
                padding: "1rem",
                border: "2px solid #fff",
              }}
            >
              <img src={founders} className="emoji-2" alt="calendar" />
              Founder&apos;s Fund
            </span>
          </div>
        </div>
      </div>
      {/* pricing desktop */}
      <div className="startup-box">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            head hunting costs
          </h1>
          <div
            className="vertical-content"
            id="startup-box"
            style={{
              borderRadius: "2rem",
              marginBottom: "1rem",
              padding: "1rem",
              width: "60%",
            }}
          >
            <h1 className="h1">standard search</h1>
            <h3 className="h3" style={{ marginBottom: "1rem", width: "100%" }}>
              $2,000 engagement
            </h3>
            <a
              href="https://calendly.com/learnmutiny/company-intro"
              target="_blank"
              rel="noreferrer"
              style={{ marginBottom: "1rem" }}
            >
              <span className="emoji-container">
                <h4 className="h4">contact sales</h4>
              </span>{" "}
            </a>
            <h5 className="h5" style={{ width: "100%" }}>
              with a 60-day guarantee
            </h5>
          </div>
          <div
            className="vertical-content"
            id="startup-box"
            style={{
              borderRadius: "2rem",
              marginBottom: "1rem",
              padding: "1rem",
              width: "60%",
            }}
          >
            <h1 className="h1">executive search</h1>
            <h3 className="h3" style={{ marginBottom: "1rem", width: "100%" }}>
              $4,000 engagement
            </h3>
            <a
              href="https://calendly.com/learnmutiny/company-intro"
              target="_blank"
              rel="noreferrer"
              style={{ marginBottom: "1rem" }}
            >
              <span className="emoji-container">
                <h4 className="h4">contact sales</h4>
              </span>{" "}
            </a>
            <h5 className="h5" style={{ width: "100%" }}>
              with a 90-day guarantee
            </h5>
          </div>
          <h2
            className="h2"
            style={{ marginBottom: "1rem", marginTop: "1rem" }}
          >
            meet with our team to get started
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
            hire a &quot;laid-off&quot; senior
            <div
              className="text-wrapper"
              style={{
                marginTop: "1.2rem",
                marginBottom: "1.2rem",
              }}
            >
              <p className="h1" id="ph">
                full-stack developer
              </p>
              <p className="h1" id="ph">
                systems engineer
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
          <h2 className="h2" style={{ marginBottom: "0.5rem" }}>
            we specialize in placing professional developers in critical roles
            at startups
          </h2>
          <div className="icons">
            <AiFillAndroid id="android" className="icon" />
            <AiFillApple id="apple" className="icon" />
            <FaReact id="react" className="icon" />
          </div>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            we source recently laid-off senior developers from tech giants and
            unicorns
          </h2>
          <div className="icons" style={{ marginBottom: "2rem" }}>
            <SiCashapp id="cashapp" className="icon" />
            <FaMeta id="meta" className="icon" />
            <RiTwitterXFill id="X" className="icon" />
            <TbBrandAirbnb id="airbnb" className="icon" />
          </div>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            and place them at your startup company
          </h2>
        </div>
      </div>
      {/* hiring phone */}
      <div className="startup-box-mobile">
        <div className="vertical-content">
          {" "}
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            hiring laid-off talent
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            the biggest names in tech are laying off thousands of talented
            senior engineers that are now available for hire
          </h2>
          <Lottie
            animationData={animation}
            style={{
              marginBottom: "1rem",
              width: "60%",
            }}
          />
          <h3 className="h3" style={{ marginBottom: "2rem" }}>
            we have built relationship pipelines with these engineers and can
            work with your team to get you access to our professionals
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
      {/* lay-offs phone */}
      <div className="startup-box-mobile">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            sourced &quot;lay-offs&quot;
          </h1>
          <div
            className="horizonatal-content"
            id="startup-box"
            style={{
              borderRadius: "2rem",
              border: "2px solid #fff",
              background: "linear-gradient(135deg, #111111, #404040)",
              marginBottom: "3rem",
              gap: "1rem",
              padding: "2rem",
              paddingBottom: "0.5rem",
              width: "80%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className="memoji-container"
              style={{ position: "relative", scale: "1.2", margin: "0" }}
            >
              <img src={jonathan} alt="ian" className="memoji" />
            </div>
            <div className="horizontal-content">
              <h2
                className="h2"
                style={{
                  width: "100%",
                }}
              >
                Bryce Lane
              </h2>
              <h5
                className="h5"
                style={{ marginBottom: "1rem", width: "100%" }}
              >
                laid-off on December 2023
              </h5>
              <div
                className="horizontal-content-small"
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 0,
                  margin: 0,
                }}
              >
                <span
                  className="emoji-container"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                    border: "2px solid #fff",
                  }}
                >
                  <img src={apple} className="emoji-2" alt="calendar" />
                  Apple
                </span>
              </div>
            </div>
          </div>
          <div
            className="horizonatal-content"
            id="startup-box"
            style={{
              borderRadius: "2rem",
              border: "2px solid #fff",
              background: "linear-gradient(135deg, #111111, #404040)",
              marginBottom: "3rem",
              gap: "1rem",
              padding: "2rem",
              paddingBottom: "0.5rem",
              width: "80%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className="memoji-container"
              style={{ position: "relative", scale: "1.2", margin: "0" }}
            >
              <img src={ian} alt="ian" className="memoji" />
            </div>
            <div className="horizontal-content">
              <h2
                className="h2"
                style={{
                  width: "100%",
                }}
              >
                Cody Ranger
              </h2>
              <h5
                className="h5"
                style={{ marginBottom: "1rem", width: "100%" }}
              >
                laid-off on January 2024
              </h5>
              <div
                className="horizontal-content-small"
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 0,
                  margin: 0,
                }}
              >
                <span
                  className="emoji-container"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                    border: "2px solid #fff",
                  }}
                >
                  <img src={stock} className="emoji-2" alt="calendar" />
                  StockX
                </span>
              </div>
            </div>
          </div>
          <div
            className="horizonatal-content"
            id="startup-box"
            style={{
              borderRadius: "2rem",
              border: "2px solid #fff",
              background: "linear-gradient(135deg, #111111, #404040)",
              gap: "1rem",
              padding: "2rem",
              paddingBottom: "0.5rem",
              width: "80%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className="memoji-container"
              style={{
                position: "relative",
                scale: "1.2",
                margin: "0",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img src={smiley} alt="ian" className="memoji" />
            </div>
            <div className="horizontal-content">
              <h2
                className="h2"
                style={{
                  width: "100%",
                }}
              >
                Aymen Silver
              </h2>
              <h5
                className="h5"
                style={{ marginBottom: "1rem", width: "100%" }}
              >
                laid-off on July 2023
              </h5>
              <div
                className="horizontal-content-small"
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 0,
                  margin: 0,
                }}
              >
                <span
                  className="emoji-container"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                    border: "2px solid #fff",
                  }}
                >
                  <img src={metamask} className="emoji-2" alt="calendar" />
                  Metamask
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* companies phone  */}
      <div className="startup-box-mobile">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            venture backed clients
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            we work with clients that are backed by top venture capital firms
            and have raised their series A to B round
          </h2>
          <h3 className="h3" style={{ marginBottom: "1rem" }}>
            we have helped companies backed by YCombinator, Andreessen Horowitz,
            and Founder&apos;s Fund source talent for their teams
          </h3>
          <div
            className="horizontal-content-small"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
              margin: 0,
            }}
          >
            <span
              className="emoji-container"
              style={{
                marginBottom: "1rem",
                padding: "1rem",
                border: "2px solid #fff",
              }}
            >
              <img src={yc} className="emoji-2" alt="calendar" />
              YCombinator
            </span>
            <span
              className="emoji-container"
              style={{
                marginBottom: "1rem",
                padding: "1rem",
                border: "2px solid #fff",
              }}
            >
              <img src={a16z} className="emoji-2" alt="calendar" />
              Andreessen Horowitz
            </span>
            <span
              className="emoji-container"
              style={{
                marginBottom: "1rem",
                padding: "1rem",
                border: "2px solid #fff",
              }}
            >
              <img src={founders} className="emoji-2" alt="calendar" />
              Founder&apos;s Fund
            </span>
          </div>
        </div>
      </div>
      {/* pricing phone */}
      <div className="startup-box-mobile">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            head hunting costs
          </h1>
          <div
            className="vertical-content"
            id="startup-box"
            style={{
              borderRadius: "2rem",
              marginBottom: "1rem",
              padding: "1rem",
              width: "100%",
            }}
          >
            <h1 className="h1">standard search</h1>
            <h3 className="h3" style={{ marginBottom: "1rem", width: "100%" }}>
              $2,000 engagement
            </h3>
            <a
              href="https://calendly.com/learnmutiny/company-intro"
              target="_blank"
              rel="noreferrer"
              style={{ marginBottom: "1rem" }}
            >
              <span className="emoji-container">
                <h4 className="h4">contact sales</h4>
              </span>{" "}
            </a>
            <h5 className="h5" style={{ width: "100%" }}>
              with a 60-day guarantee
            </h5>
          </div>
          <div
            className="vertical-content"
            id="startup-box"
            style={{
              borderRadius: "2rem",
              marginBottom: "1rem",
              padding: "1rem",
              width: "100%",
            }}
          >
            <h1 className="h1">executive search</h1>
            <h3 className="h3" style={{ marginBottom: "1rem", width: "100%" }}>
              $4,000 engagement
            </h3>
            <a
              href="https://calendly.com/learnmutiny/company-intro"
              target="_blank"
              rel="noreferrer"
              style={{ marginBottom: "1rem" }}
            >
              <span className="emoji-container">
                <h4 className="h4">contact sales</h4>
              </span>{" "}
            </a>
            <h5 className="h5" style={{ width: "100%" }}>
              with a 90-day guarantee
            </h5>
          </div>
          <h2
            className="h2"
            style={{ marginBottom: "1rem", marginTop: "1rem" }}
          >
            meet with our team to get started
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
