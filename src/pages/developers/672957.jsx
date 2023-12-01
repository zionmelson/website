import { useState } from "react";
import {
  FaPause,
  FaPlay,
  FaVolumeUp,
  FaVolumeDown,
  FaVolumeMute,
} from "react-icons/fa";

import flapberry from "../../assets/flapberry.mp3";

import Lottie from "lottie-react";
import voice from "../../assets/voice.json";

import calen from "../../assets/calen.svg";

import react from "../../assets/react.svg";
import ts from "../../assets/ts.svg";
import python from "../../assets/python.svg";
import flask from "../../assets/flask.svg";

export default function Flapberry() {
  const [videoPaused, setVideoPaused] = useState(true);
  const [videoElement, setVideoElement] = useState(null);

  const toggleVideo = () => {
    console.log(videoElement);
    console.log(videoElement.paused);

    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
        console.log("play");
        setVideoPaused(true);
      } else {
        videoElement.pause();
        console.log("pause");
        setVideoPaused(false);
      }
    }
  };

  const muteVideo = () => {
    if (videoElement) {
      videoElement.volume = 0;
    }
  };

  const halfVolume = () => {
    if (videoElement) {
      videoElement.volume = 0.5;
    }
  };

  const fullVolume = () => {
    if (videoElement) {
      videoElement.volume = 1;
    }
  };

  return (
    <div className="main">
      {/* desktop */}
      <div className="box">
        <div className="vertical-content">
          <div
            className="horizontal-content"
            style={{ alignItems: "flex-start", marginBottom: "1rem" }}
          >
            <div className="vertical-content">
              <div
                className="vertical-content"
                style={{
                  marginTop: "3rem",
                }}
              >
                <h1 className="h1">Flapberry Fudgewhistle</h1>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "1rem",
                  }}
                >
                  full-stack developer
                </h3>
              </div>
              <Lottie animationData={voice} />
              <audio
                ref={(el) => setVideoElement(el)}
                style={{ marginBottom: "1rem" }}
              >
                <source src={flapberry} type="audio/mpeg" />
                Your browser does not support HTML video.
              </audio>
              <div
                className="horizontal-content"
                style={{ marginBottom: "2rem" }}
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleVideo();
                  }}
                  style={{ fontSize: "1.5rem" }}
                >
                  {videoPaused ? <FaPlay /> : <FaPause />}
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    muteVideo();
                  }}
                  style={{ fontSize: "1.5rem" }}
                >
                  <FaVolumeMute />
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    halfVolume();
                  }}
                  style={{ fontSize: "1.5rem" }}
                >
                  <FaVolumeDown />
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    fullVolume();
                  }}
                  style={{ fontSize: "1.5rem" }}
                >
                  <FaVolumeUp />
                </button>
              </div>
            </div>
            <div
              className="vertical-content"
              style={{
                padding: "1rem",
                width: "50rem",
                marginTop: "3rem",
              }}
            >
              <div
                className="vertical-content"
                style={{
                  width: "100%",
                }}
              >
                <h2 className="h2" style={{ marginBottom: "1rem" }}>
                  coding ability details
                </h2>
                <span
                  className="emoji-container"
                  id="senior"
                  style={{ width: "90%", marginBottom: "1rem" }}
                >
                  senior
                </span>
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
                    id="react-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={react} className="emoji-2" alt="calendar" />
                    React
                  </span>
                  <span
                    className="emoji-container"
                    id="ts-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={ts} className="emoji-2" alt="calendar" />
                    Typescript
                  </span>
                  <span
                    className="emoji-container"
                    id="python-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={python} className="emoji-2" alt="calendar" />
                    Python
                  </span>
                  <span
                    className="emoji-container"
                    style={{
                      display: "flex",

                      marginBottom: "1rem",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <img src={flask} className="emoji-2" alt="calendar" />
                    Flask
                  </span>
                </div>
              </div>
              <div className="vertical-content" style={{ width: "100%" }}>
                <h2 className="h2" style={{ marginBottom: "1rem" }}>
                  full-time salary details
                </h2>
                <span
                  className="emoji-container"
                  style={{ width: "90%", marginBottom: "1rem" }}
                >
                  <h4 className="h4">minimum</h4>
                  <h3 className="h3" style={{ paddingLeft: "4rem" }}>
                    $170,000
                  </h3>
                </span>

                <span
                  className="emoji-container"
                  style={{ width: "90%", marginBottom: "1rem" }}
                >
                  <h4 className="h4">maximum</h4>
                  <h3 className="h3" style={{ paddingLeft: "4rem" }}>
                    $170,000
                  </h3>
                </span>
                <span
                  className="emoji-container"
                  style={{ width: "90%", marginBottom: "1rem" }}
                >
                  W-2
                </span>
              </div>
              <a
                href="https://calendly.com/learnmutiny/company-final-steps"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "100%",
                  alignContent: "center",
                  justifyContent: "center",
                  display: "flex",
                  marginTop: "3rem",
                }}
              >
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem" }}
                >
                  <img src={calen} className="emoji-2" alt="calen" />
                  Meet with developer
                </span>
              </a>
            </div>
          </div>
          <div
            className="vertical-content"
            style={{ alignItems: "flex-start" }}
          >
            <h1
              className="h1-sub"
              style={{
                textAlign: "left",
              }}
            >
              Senior Fullstack Engineer
            </h1>
            <h2
              className="h2"
              style={{
                marginBottom: "1rem",
                textAlign: "left",
              }}
            >
              7 mos
            </h2>
            <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
                textAlign: "left",
              }}
            >
              Knowledge Graph (KG) Visualization Expertise: Spearheaded the
              development and architectural design of advanced KG visualization
              data platforms, showcasing a deep understanding of data
              visualization concepts and technologies.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
                textAlign: "left",
              }}
            >
              End-to-End Development Leadership: Led the entire development
              lifecycle, demonstrating strong project management skills in
              conjunction with hands-on expertise in FastAPI, TypeScript,
              React.js, and Python. Played a key role in creating comprehensive
              and efficient data visualization solutions.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "2rem",
                textAlign: "left",
              }}
            >
              Diverse Tech Stack Mastery: Possesses a robust skill set covering
              FastAPI, TypeScript, React.js, and Python, underscoring the
              ability to navigate and excel in a diverse technological landscape
              for the creation of sophisticated data platforms.
            </h3>
          </div>
          <div
            className="vertical-content"
            style={{ alignItems: "flex-start" }}
          >
            <h1
              className="h1-sub"
              style={{
                textAlign: "left",
              }}
            >
              Full Stack Engineer
            </h1>
            <h2
              className="h2"
              style={{
                marginBottom: "1rem",
                textAlign: "left",
              }}
            >
              1 yr & 4 mos
            </h2>
            <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
                textAlign: "left",
              }}
            >
              Innovative Visualization Development: Spearheaded the MVP and
              ongoing development of the &quot;Universe View,&quot; a dynamic
              node-edge graph portraying complex relationships within the global
              supply chain. Demonstrated a deep understanding of multi-tier
              structures to visualize precise flows of goods and their origins.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
                textAlign: "left",
              }}
            >
              Optimization and Scalability Expertise: Optimized the Flask API by
              implementing workload queue splitting in Celery, unlocking
              critical low-latency requests from resource-intensive operations.
              Achieved a remarkable 88% improvement in response times, enhancing
              the overall efficiency of the platform.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "2rem",
                textAlign: "left",
              }}
            >
              Comprehensive Testing and Documentation Leadership: Took charge of
              writing end-to-end (E2E), interactive, and unit tests for over a
              hundred code files, ensuring the robustness and reliability of the
              system. Additionally, played a pivotal role in creating and
              maintaining extensive documentation, promoting clarity and
              transparency within the development process.
            </h3>
          </div>
          <div
            className="vertical-content"
            style={{ alignItems: "flex-start" }}
          >
            <h1
              className="h1-sub"
              style={{
                textAlign: "left",
              }}
            >
              SDE Intern at AWS
            </h1>
            <h2
              className="h2"
              style={{
                marginBottom: "1rem",
                textAlign: "left",
              }}
            >
              4 mos
            </h2>
            <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
                textAlign: "left",
              }}
            >
              Early Warning System Implementation: Collaborated with the AWS FSx
              Windows team to design and implement an early-warning system
              workflow and sweeper for clients modifying their Active Directory
              settings. Played a key role in detecting and reporting illegal and
              malformed client Active Directory settings.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
                textAlign: "left",
              }}
            >
              Optimized Sweeper System for Scale: Developed and deployed a new
              internal Sweeper system, ensuring daily execution of extensive
              workflows. Maintained a delicate balance, handling tens of
              thousands of requests from all Amazon FSx customers per region,
              considering maintenance zones, and preventing server overloads
              with hotspots.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "2rem",
                textAlign: "left",
              }}
            >
              Testing and Quality Assurance: Contributed to the system&apos;s
              robustness by writing and extending unit tests for both new and
              existing sweepers. Ensured thorough testing coverage to validate
              the functionality and reliability of the implemented features.
            </h3>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="box-mobile">
        <div className="vertical-content">
          <h1
            className="h1"
            style={{
              marginTop: "5rem",
              marginBottom: "1rem",
            }}
          >
            Flapberry Fudgewhistle
          </h1>
          <h3
            className="h3"
            style={{
              marginBottom: "1rem",
            }}
          >
            full-stack developer
          </h3>
          <div className="horizontal-content">
            <Lottie animationData={voice} />
            <audio
              ref={(el) => setVideoElement(el)}
              style={{ marginBottom: "0.5rem" }}
            >
              <source src={flapberry} type="audio/mpeg" />
              Your browser does not support HTML video.
            </audio>
            <a
              href="https://calendly.com/learnmutiny/company-final-steps"
              target="_blank"
              rel="noreferrer"
              style={{
                width: "100%",
                alignContent: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <span
                className="emoji-container"
                style={{ marginBottom: "1rem" }}
              >
                <img src={calen} className="emoji-2" alt="calen" />
                Get in Contact
              </span>
            </a>
            <div
              className="horizontal-content"
              style={{
                marginBottom: "1rem",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleVideo();
                }}
                style={{ fontSize: "2rem" }}
              >
                {videoPaused ? <FaPlay /> : <FaPause />}
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  muteVideo();
                }}
                style={{ fontSize: "2rem" }}
              >
                <FaVolumeMute />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  halfVolume();
                }}
                style={{ fontSize: "2rem" }}
              >
                <FaVolumeDown />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  fullVolume();
                }}
                style={{ fontSize: "2rem" }}
              >
                <FaVolumeUp />
              </button>
            </div>
            <div
              className="vertical-content"
              style={{
                padding: "1rem",
              }}
            >
              <div
                className="vertical-content"
                style={{
                  width: "100%",
                }}
              >
                <h2 className="h2" style={{ marginBottom: "1rem" }}>
                  coding ability details
                </h2>
                <span
                  className="emoji-container"
                  id="midtier"
                  style={{ width: "90%", marginBottom: "1rem" }}
                >
                  mid-tier
                </span>
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
                    id="react-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={react} className="emoji-2" alt="calendar" />
                    React
                  </span>
                  <span
                    className="emoji-container"
                    id="ts-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={ts} className="emoji-2" alt="calendar" />
                    Typescript
                  </span>
                  <span
                    className="emoji-container"
                    id="python-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={python} className="emoji-2" alt="calendar" />
                    Python
                  </span>
                  <span
                    className="emoji-container"
                    style={{
                      display: "flex",

                      marginBottom: "1rem",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <img src={flask} className="emoji-2" alt="calendar" />
                    Flask
                  </span>
                </div>
              </div>
              <div className="vertical-content" style={{ width: "100%" }}>
                <h2
                  className="h2"
                  style={{ marginBottom: "1rem", marginTop: "2rem" }}
                >
                  full-time salary details
                </h2>
                <span
                  className="emoji-container"
                  style={{ width: "90%", marginBottom: "1rem" }}
                >
                  <h4 className="h4" style={{ paddingLeft: "1rem" }}>
                    minimum
                  </h4>
                  <h3 className="h3" style={{ paddingLeft: "3rem" }}>
                    $170,000
                  </h3>
                </span>

                <span
                  className="emoji-container"
                  style={{ width: "90%", marginBottom: "1rem" }}
                >
                  <h4 className="h4" style={{ paddingLeft: "1rem" }}>
                    maximum
                  </h4>
                  <h3 className="h3" style={{ paddingLeft: "3rem" }}>
                    $170,000
                  </h3>
                </span>
                <span
                  className="emoji-container"
                  style={{ width: "90%", marginBottom: "1rem" }}
                >
                  W-2
                </span>
              </div>
            </div>
            <div
              className="vertical-content"
              style={{ alignItems: "flex-start" }}
            >
              <h1
                className="h1-sub"
                style={{
                  textAlign: "left",
                }}
              >
                Senior Fullstack Engineer
              </h1>
              <h2
                className="h2"
                style={{
                  marginBottom: "1rem",
                  textAlign: "left",
                }}
              >
                7 mos
              </h2>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                  textAlign: "left",
                }}
              >
                Knowledge Graph (KG) Visualization Expertise: Spearheaded the
                development and architectural design of advanced KG
                visualization data platforms, showcasing a deep understanding of
                data visualization concepts and technologies.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                  textAlign: "left",
                }}
              >
                End-to-End Development Leadership: Led the entire development
                lifecycle, demonstrating strong project management skills in
                conjunction with hands-on expertise in FastAPI, TypeScript,
                React.js, and Python. Played a key role in creating
                comprehensive and efficient data visualization solutions.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "2rem",
                  textAlign: "left",
                }}
              >
                Diverse Tech Stack Mastery: Possesses a robust skill set
                covering FastAPI, TypeScript, React.js, and Python, underscoring
                the ability to navigate and excel in a diverse technological
                landscape for the creation of sophisticated data platforms.
              </h3>
            </div>
            <div
              className="vertical-content"
              style={{ alignItems: "flex-start" }}
            >
              <h1
                className="h1-sub"
                style={{
                  textAlign: "left",
                }}
              >
                Full Stack Engineer
              </h1>
              <h2
                className="h2"
                style={{
                  marginBottom: "1rem",
                  textAlign: "left",
                }}
              >
                1 yr & 4 mos
              </h2>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                  textAlign: "left",
                }}
              >
                Innovative Visualization Development: Spearheaded the MVP and
                ongoing development of the &quot;Universe View,&quot; a dynamic
                node-edge graph portraying complex relationships within the
                global supply chain. Demonstrated a deep understanding of
                multi-tier structures to visualize precise flows of goods and
                their origins.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                  textAlign: "left",
                }}
              >
                Optimization and Scalability Expertise: Optimized the Flask API
                by implementing workload queue splitting in Celery, unlocking
                critical low-latency requests from resource-intensive
                operations. Achieved a remarkable 88% improvement in response
                times, enhancing the overall efficiency of the platform.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "2rem",
                  textAlign: "left",
                }}
              >
                Comprehensive Testing and Documentation Leadership: Took charge
                of writing end-to-end (E2E), interactive, and unit tests for
                over a hundred code files, ensuring the robustness and
                reliability of the system. Additionally, played a pivotal role
                in creating and maintaining extensive documentation, promoting
                clarity and transparency within the development process.
              </h3>
            </div>
            <div
              className="vertical-content"
              style={{ alignItems: "flex-start" }}
            >
              <h1
                className="h1-sub"
                style={{
                  textAlign: "left",
                }}
              >
                SDE Intern at AWS
              </h1>
              <h2
                className="h2"
                style={{
                  marginBottom: "1rem",
                  textAlign: "left",
                }}
              >
                4 mos
              </h2>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                  textAlign: "left",
                }}
              >
                Early Warning System Implementation: Collaborated with the AWS
                FSx Windows team to design and implement an early-warning system
                workflow and sweeper for clients modifying their Active
                Directory settings. Played a key role in detecting and reporting
                illegal and malformed client Active Directory settings.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                  textAlign: "left",
                }}
              >
                Optimized Sweeper System for Scale: Developed and deployed a new
                internal Sweeper system, ensuring daily execution of extensive
                workflows. Maintained a delicate balance, handling tens of
                thousands of requests from all Amazon FSx customers per region,
                considering maintenance zones, and preventing server overloads
                with hotspots.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "2rem",
                  textAlign: "left",
                }}
              >
                Testing and Quality Assurance: Contributed to the system&apos;s
                robustness by writing and extending unit tests for both new and
                existing sweepers. Ensured thorough testing coverage to validate
                the functionality and reliability of the implemented features.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
