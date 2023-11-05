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

import small from "../assets/small.svg";
import maxP from "../assets/maxP.svg";
import bearP from "../assets/bearP.svg";
import calen from "../assets/calen.svg";

import Lottie from "lottie-react";
import animation from "../assets/animate2.json";

import "../App.css";

function Startup() {
  return (
    <div className="main">
      {/* startup-intro desktop */}
      <div className="startup-box">
        <div className="vertical-content">
          <h1
            className="h1"
            style={{ marginBottom: "1rem", marginTop: "5rem" }}
          >
            we source and vet qualified and reputable developer talent for your{" "}
            <span className="span">tech startup</span>
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem", width: "70%" }}>
            we are an atlanta based team whose mission is to help aid startups
            by providing them with talented web developers.
          </h2>{" "}
          <div className="icons">
            <AiFillAndroid id="android" className="icon" />
            <AiFillApple id="apple" className="icon" />
            <FaReact id="react" className="icon" />
          </div>
          <h2 className="h2" style={{ marginBottom: "1rem", width: "60%" }}>
            we specifically targeting talented full-stack college web developers
            from top universities in the atlanta area.
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
            style={{ marginBottom: "1rem", marginTop: "2rem" }}
          >
            we source and vet qualified tech talent for your{" "}
            <span className="span">tech startup</span>
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            we are an atlanta based team whose mission is to help aid startups
            by providing them with talented web developers.
          </h2>{" "}
          <div className="icons">
            <AiFillAndroid id="android" className="icon" />
            <AiFillApple id="apple" className="icon" />
            <FaReact id="react" className="icon" />
          </div>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            we specifically targeting talented full-stack college web developers
            from top universities in the atlanta area.
          </h2>
          <div className="icons">
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
            we know finding the perfect team is daunting, at learnmutiny we take
            a deeper approach into the world of staffing, we&apos;ve crafted our
            sourcing strategy around one key metric,{" "}
            <span className="span">data</span>.
          </h2>
          <Lottie
            animationData={animation}
            style={{
              marginBottom: "1rem",
              width: "20%",
            }}
          />
          <h3 className="h3" style={{ width: "75%" }}>
            our goal is to make it as painless as possible to build your idea or
            continue growing your company. we source and vet every developer,
            taking time to understand their skills, personality, and passion.
            this allows us to find the right developer for your individual
            needs, whether you&apos;re a technical founder or not.
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
            early stage startups have the difficult task of finding the perfect
            team, so we crafted our sourcing strategy around{" "}
            <span className="span">developer data</span> to find the best
            possible hire.
          </h2>
          <h3 className="h3" style={{ marginBottom: "1rem", width: "80%" }}>
            our goal is to make it as painless as possible to build your idea or
            continue growing your company.
          </h3>
          <Lottie
            animationData={animation}
            style={{
              marginBottom: "1rem",
              width: "60%",
            }}
          />
          <h3 className="h3">
            {" "}
            we source and vet every developer, taking time to understand their
            skills, personality, and passion. this allows us to find the right
            developer for your individual needs, whether you&apos;re a technical
            founder or not.
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
            our rates are as follows:
          </h2>
          <div
            className="horizontal-content-small"
            style={{ marginBottom: "1rem" }}
          >
            <div
              className="vertical-content"
              style={{
                border: "2px solid #5dc4ff",
                borderRadius: "2rem",
                padding: "1rem",
                margin: "1rem",
              }}
            >
              <h2 className="h2" style={{ marginBottom: "0.7rem" }}>
                small company
              </h2>
              <h3 className="h3" style={{ marginBottom: "1rem", width: "90%" }}>
                <a
                  href="https://calendly.com/learnmutiny/company-intro"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    className="emoji-container"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    <h4 className="h4">$0 - $12,500</h4>
                  </span>{" "}
                </a>
                contract value (per employee)
              </h3>
              <h1 className="h1">15%</h1>
              <h3
                className="h3"
                style={{ marginBottom: "1rem", width: "100%" }}
              >
                of contract value
              </h3>
              <img src={small} className="logo" alt="small" />
            </div>
            <div
              className="vertical-content"
              style={{
                border: "2px solid #5dc4ff",
                borderRadius: "2rem",
                padding: "1rem",
                margin: "1rem",
              }}
            >
              <h2 className="h2" style={{ marginBottom: "0.7rem" }}>
                startup
              </h2>
              <h3 className="h3" style={{ marginBottom: "1rem", width: "90%" }}>
                <a
                  href="https://calendly.com/learnmutiny/company-intro"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    className="emoji-container"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    <h4 className="h4">$12,500 - $25,000</h4>
                  </span>{" "}
                </a>
                contract value (per employee)
              </h3>
              <h1 className="h1">12%</h1>
              <h3
                className="h3"
                style={{ marginBottom: "1rem", width: "100%" }}
              >
                of contract value
              </h3>
              <img src={maxP} className="logo" alt="medium" />
            </div>
            <div
              className="vertical-content"
              style={{
                border: "2px solid #5dc4ff",
                borderRadius: "2rem",
                padding: "1rem",
                margin: "1rem",
              }}
            >
              <h2 className="h2" style={{ marginBottom: "0.7rem" }}>
                unicorn
              </h2>
              <h3 className="h3" style={{ marginBottom: "1rem", width: "90%" }}>
                <a
                  href="https://calendly.com/learnmutiny/company-intro"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    className="emoji-container"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    <h4 className="h4">$25,000+</h4>
                  </span>{" "}
                </a>
                contract value (per employee)
              </h3>
              <h1 className="h1">10%</h1>
              <h3
                className="h3"
                style={{ marginBottom: "1rem", width: "100%" }}
              >
                of contract value
              </h3>
              <img src={bearP} className="logo" alt="unicorn" />
            </div>
          </div>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            we know hiring students can be complicated, we are also here to help
            advise decision making when it comes to pricing, and paying student
            developers.
          </h2>
          <h3 className="h3" style={{ marginBottom: "1rem" }}>
            find your next co-founder with learnmutiny.
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
        {" "}
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            pricing
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            our rates are as follows:
          </h2>
          <div className="horizontal-content-small">
            <div
              className="vertical-content"
              style={{
                border: "2px solid #5dc4ff",
                borderRadius: "2rem",
                padding: "1rem",
                margin: "1rem",
              }}
            >
              <h2 className="h2" style={{ marginBottom: "1rem" }}>
                small company
              </h2>
              <h3 className="h3" style={{ marginBottom: "1rem", width: "90%" }}>
                <a
                  href="https://calendly.com/learnmutiny/company-intro"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    className="emoji-container"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    <h4 className="h4">$0 - $12,500</h4>
                  </span>{" "}
                </a>
                contract value (per employee)
              </h3>
              <h1 className="h1">15%</h1>
              <h3 className="h3" style={{ marginBottom: "1rem" }}>
                of contract value
              </h3>
              <img src={small} className="logo" alt="small" />
            </div>
            <div
              className="vertical-content"
              style={{
                border: "2px solid #5dc4ff",
                borderRadius: "2rem",
                padding: "1rem",
                margin: "1rem",
              }}
            >
              <h2 className="h2" style={{ marginBottom: "1rem" }}>
                startup
              </h2>
              <h3 className="h3" style={{ marginBottom: "1rem", width: "90%" }}>
                <a
                  href="https://calendly.com/learnmutiny/company-intro"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    className="emoji-container"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    <h4 className="h4">$12,500 - $25,000</h4>
                  </span>{" "}
                </a>
                contract value (per employee)
              </h3>
              <h1 className="h1">12%</h1>
              <h3 className="h3" style={{ marginBottom: "1rem" }}>
                of contract value
              </h3>
              <img src={maxP} className="logo" alt="medium" />
            </div>
            <div
              className="vertical-content"
              style={{
                border: "2px solid #5dc4ff",
                borderRadius: "2rem",
                padding: "1rem",
                margin: "1rem",
              }}
            >
              <h2 className="h2" style={{ marginBottom: "1rem" }}>
                unicorn
              </h2>
              <h3 className="h3" style={{ marginBottom: "1rem", width: "90%" }}>
                <a
                  href="https://calendly.com/learnmutiny/company-intro"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    className="emoji-container"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    <h4 className="h4">$25,000+</h4>
                  </span>{" "}
                </a>
                contract value (per employee)
              </h3>
              <h1 className="h1">10%</h1>
              <h3 className="h3" style={{ marginBottom: "1rem" }}>
                of contract value
              </h3>
              <img src={bearP} className="logo" alt="unicorn" />
            </div>
          </div>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            hiring students can be complicated, we also help advise decision
            making when it comes to and paying student developers.
          </h2>
          <h3 className="h3" style={{ marginBottom: "1rem" }}>
            find your next dev with learnmutiny{" "}
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
    </div>
  );
}

export default Startup;
