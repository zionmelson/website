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

import "./App.css";

function Home() {
  return (
    //
    <div className="main">
      {/* intro desktop */}
      <div className="box">
        <div className="vertical-content" style={{ marginTop: "3rem" }}>
          <h1 className="h1" style={{ marginBottom: "1rem", width: "70%" }}>
            we source senior full-stack developers for startups
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
        <div className="vertical-content" style={{ marginTop: "2rem" }}>
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            we source senior full-stack developers for startups
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
      {/* mu desktop */}
      {/* <div className="box">
        <div className="vertical-content" style={{ marginBottom: "1rem" }}>
          <h1 className="h1" style={{ margin: "1rem" }}>
            build up your mu profile
          </h1>
          <img src={black} className="logo" alt="mu" />
        </div>
        <div className="vertical-content">
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            <span className="horizontal-content-small">
              connect your mu with{" "}
              <a
                href="https://github.com/learnmutiny-io"
                target="_blank"
                rel="noreferrer"
              >
                <span className="emoji-container">
                  <img src={git} className="emoji" alt="mu" /> Github
                </span>{" "}
              </a>
              <p className="and">and</p>{" "}
              <a
                href="https://linkedin.com/company/learnmutiny"
                target="_blank"
                rel="noreferrer"
              >
                <span className="emoji-container">
                  {" "}
                  <img src={link} className="emoji" alt="mu" /> LinkedIn
                </span>
              </a>
            </span>
          </h2>
          <h2 className="h3" style={{ marginBottom: "1rem" }}>
            you simply sign up by creating a mu profile. you connect your
            LinkedIn and Github so we can use that data to pair you with
            startups and to get you paid!
          </h2>
        </div>
      </div> */}
      {/* money desktop */}
      {/* <div className="box">
        <div className="vertical-content">
          <h1 className="h1" style={{ margin: "1rem" }}>
            earn with your mu profile
          </h1>
          <img
            src={blackmoney}
            className="logo"
            alt="mu"
            style={{ marginBottom: "1rem" }}
          />
          <h2 className="h3" style={{ marginBottom: "1rem" }}>
            as you continue to learn and improve, startups will reach out and
            look at your information. for every look you get, we pay you.
          </h2>
        </div>
      </div> */}
      {/* attributes desktop */}
      {/* <div className="box">
        <div className="vertical-content">
          <h1 className="h1" style={{ margin: "1rem" }}>
            rack up attributes
          </h1>
          <img
            src={attributes}
            className="logo"
            style={{ marginBottom: "1rem" }}
            alt="attributes"
          />
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            attributes are gifted to you from founders
          </h2>
          <h3 className="h3" style={{ marginBottom: "1rem" }}></h3>
        </div>
      </div> */}
      {/* mu phone */}
      {/* <div className="box-mobile">
        <div className="horizontal-content-small">
          <div className="vertical-content">
            <h1 className="h1" style={{ margin: "1rem" }}>
              build up your mu
            </h1>
            <img src={black} className="logo" alt="mu" />
          </div>
          <div className="vertical-content" style={{ marginBottom: "1rem" }}>
            <span
              className="horizontal-content-small"
              style={{ marginBottom: "1rem" }}
            >
              {" "}
              connect your mu with
              <a
                href="https://github.com/learnmutiny-io"
                target="_blank"
                rel="noreferrer"
              >
                <span className="emoji-container">
                  <img src={git} className="emoji" alt="mu" /> Github
                </span>{" "}
              </a>
              <p className="and">and</p>{" "}
              <a
                href="https://linkedin.com/company/learnmutiny"
                target="_blank"
                rel="noreferrer"
              >
                <span className="emoji-container">
                  {" "}
                  <img src={link} className="emoji" alt="mu" /> LinkedIn
                </span>
              </a>
            </span>

            <h2 className="h3">
              you simply sign up by creating a mu profile. you connect your
              LinkedIn and Github so we can use that data to pair you with
              startups and to get you paid!
            </h2>
          </div>
        </div>
      </div> */}
      {/* money phone */}
      {/* <div className="box-mobile">
        <div className="vertical-content">
          <h1 className="h1" style={{ margin: "1rem" }}>
            earn with your mu
          </h1>
          <img
            src={blackmoney}
            className="logo"
            alt="mu"
            style={{ marginBottom: "1rem" }}
          />
          <h2 className="h3" style={{ marginBottom: "1rem" }}>
            as you continue to learn and improve, startups will reach out and
            look at your information. for every look you get, we pay you.
          </h2>
        </div>
      </div> */}
      {/* attributes phone */}
      {/* <div className="box-mobile">
        <div className="vertical-content">
          <h1 className="h1" style={{ margin: "1rem" }}>
            rack up attributes
          </h1>
          <img
            src={attributes}
            className="logo"
            style={{ marginBottom: "1rem" }}
            alt="attributes"
          />
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            attributes are gifted to you from founders
          </h2>
          <h3 className="h3" style={{ marginBottom: "1rem" }}></h3>
        </div>
      </div> */}
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
    // </div>
  );
}

export default Home;
