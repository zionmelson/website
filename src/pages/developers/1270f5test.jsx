import { useState } from "react";
import {
  FaPause,
  FaPlay,
  FaVolumeUp,
  FaVolumeDown,
  FaVolumeMute,
} from "react-icons/fa";

import spencer from "../../assets/mp3/spencer.mp3";
import calen from "../../assets/svg/calen.svg";

import Lottie from "lottie-react";
import voice from "../../assets/json/voice.json";

import react from "../../assets/svg/react.svg";
import angular from "../../assets/svg/angular.svg";
import vue from "../../assets/svg/vue.svg";
import node from "../../assets/svg/node.svg";
import javascript from "../../assets/svg/javascript.svg";
import typescript from "../../assets/svg/typescript.svg";
import flask from "../../assets/svg/flask.svg";
import django from "../../assets/svg/django.svg";
import go from "../../assets/svg/go.svg";
import rust from "../../assets/svg/rust.svg";
import python from "../../assets/svg/python.svg";

export default function Spencer() {
  const [videoPaused, setVideoPaused] = useState(false);
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
                  marginTop: "5rem",
                }}
              >
                <h1 className="h1">Jonathan Spencer</h1>
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
                style={{ marginBottom: "0.5rem" }}
              >
                <source src={spencer} type="audio/mpeg" />
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
              <span className="emoji-container" style={{ padding: "1rem" }}>
                play me 😄
              </span>
            </div>
            <div
              className="vertical-content"
              style={{
                padding: "1rem",
                marginTop: "2rem",
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
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                    width: "100%",
                  }}
                >
                  senior developer
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
                    id="angular-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={angular} className="emoji-2" alt="calendar" />
                    Angular
                  </span>

                  <span
                    className="emoji-container"
                    id="vue-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={vue} className="emoji-2" alt="calendar" />
                    Vue
                  </span>

                  <span
                    className="emoji-container"
                    id="node-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={node} className="emoji-2" alt="calendar" />
                    Node
                  </span>

                  <span
                    className="emoji-container"
                    id="javascript-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={javascript} className="emoji-2" alt="calendar" />
                    Javascript
                  </span>

                  <span
                    className="emoji-container"
                    id="typescript-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={typescript} className="emoji-2" alt="calendar" />
                    Typescript
                  </span>

                  <span
                    className="emoji-container"
                    id="flask-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={flask} className="emoji-2" alt="calendar" />
                    Flask
                  </span>

                  <span
                    className="emoji-container"
                    id="django-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={django} className="emoji-2" alt="calendar" />
                    Django
                  </span>

                  <span
                    className="emoji-container"
                    id="go-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={go} className="emoji-2" alt="calendar" />
                    Go
                  </span>

                  <span
                    className="emoji-container"
                    id="rust-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={rust} className="emoji-2" alt="calendar" />
                    Rust
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
                </div>
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
                    style={{ marginBottom: "1rem", padding: "1rem" }}
                  >
                    9+ years of experience
                  </span>
                  <span
                    className="emoji-container"
                    style={{ marginBottom: "1rem", padding: "1rem" }}
                  >
                    self-taught
                  </span>
                </div>
              </div>
              <div className="vertical-content" style={{ width: "100%" }}>
                <h2 className="h2" style={{ marginBottom: "1rem" }}>
                  desired workplace details
                </h2>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">minimum salary: $150,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">maxmimum salary: $200,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">located: los angeles, ca</h4>
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
                    style={{ marginBottom: "1rem", padding: "1rem" }}
                  >
                    full-time
                  </span>
                  <span
                    className="emoji-container"
                    style={{ marginBottom: "1rem", padding: "1rem" }}
                  >
                    remote
                  </span>
                </div>
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
                  marginTop: "1rem",
                }}
              >
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem" }}
                >
                  <img src={calen} className="emoji-2" alt="calen" />
                  Meet with me
                </span>
              </a>
            </div>
          </div>
          <div
            className="vertical-content"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "flex-start",
              padding: "1rem",
            }}
          >
            <div
              className="vertical-content"
              style={{
                alignItems: "flex-start",
                textAlign: "left",
                marginBottom: "2rem",
              }}
            >
              <h1 className="h1-sub">Full Stack Engineer</h1>
              <h2 className="h2">2 yrs</h2>

              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Front-End Development: Proficient in front-end development,
                utilizing skills in JavaScript and React.js to create engaging
                and responsive user interfaces.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Node.js and GraphQL Expertise: Experienced in backend
                development using Node.js and GraphQL, contributing to the
                development of robust and scalable server-side applications.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Test Automation: Well-versed in test automation methodologies,
                ensuring the reliability and stability of software through
                systematic testing processes.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Versatile Skill Set: Possesses a versatile skill set, including
                product design, entrepreneurship, and a strong background in
                software and product development, contributing to a holistic
                understanding of the development lifecycle.
              </h3>
            </div>
            <div
              className="vertical-content"
              style={{
                alignItems: "flex-start",
                textAlign: "left",
                marginBottom: "2rem",
              }}
            >
              <h1 className="h1-sub">Software Integration Engineer</h1>
              <h2 className="h2">5 mos</h2>

              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                API Integration Leadership: Led the successful integration of
                diverse 3rd party APIs (Slack, Quickbooks, Netsuite, Carbone)
                into the platform, expanding its capabilities and integrating
                new features seamlessly.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                End-to-End Development Expertise: Developed robust frontend and
                backend capabilities, including connectors for integrated APIs,
                using a versatile tech stack (React, Typescript, GraphQL,
                Python, Flask), ensuring comprehensive and efficient system
                enhancements.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                DevOps and Cloud Optimization: Streamlined CI/CD workflows
                through Github Actions, optimizing the development lifecycle.
                Collaborated with AWS products (S3, EKS, SMS) to extend cloud
                offerings, improve application performance, and ensure system
                reliability.
              </h3>
            </div>
            <div
              className="vertical-content"
              style={{
                alignItems: "flex-start",
                textAlign: "left",
                marginBottom: "2rem",
              }}
            >
              <h1 className="h1-sub">Software Engineer</h1>
              <h2 className="h2">1 yr 7 mos</h2>

              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                API Maintenance and Development: Managed the continuous
                maintenance and updates of backend API services, implementing
                new full-stack features for both mobile users and Loop&apos;s
                cloud-based web platform, ensuring ongoing system optimization.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Security Solutions Implementation: Spearheaded the development
                of GDPR-compliant unidirectional encryption solutions for end
                users using AWS&apos; encryption SDK, ensuring robust data
                security and privacy measures.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Innovative Development and Mentoring: Pioneered the creation of
                a localized docker container for multiple AWS services,
                enhancing local development and testing capabilities. Led the
                writing of unit and integration tests for the entire API suite,
                employing Chai + Sinon. Oversaw and mentored junior engineers,
                providing guidance in code review and architecture optimization.
              </h3>
            </div>
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
              marginTop: "1rem",
            }}
          >
            <span className="emoji-container" style={{ marginBottom: "1rem" }}>
              <img src={calen} className="emoji-2" alt="calen" />
              Meet with me
            </span>
          </a>
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
            Jonathan Spencer
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
              <source src={spencer} type="audio/mpeg" />
              Your browser does not support HTML video.
            </audio>
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
            <span className="emoji-container" style={{ padding: "1rem" }}>
              play me 😄
            </span>
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
                  id="senior"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                    width: "100%",
                  }}
                >
                  senior developer
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
                    id="angular-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={angular} className="emoji-2" alt="calendar" />
                    Angular
                  </span>

                  <span
                    className="emoji-container"
                    id="vue-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={vue} className="emoji-2" alt="calendar" />
                    Vue
                  </span>

                  <span
                    className="emoji-container"
                    id="node-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={node} className="emoji-2" alt="calendar" />
                    Node
                  </span>

                  <span
                    className="emoji-container"
                    id="javascript-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={javascript} className="emoji-2" alt="calendar" />
                    Javascript
                  </span>

                  <span
                    className="emoji-container"
                    id="typescript-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={typescript} className="emoji-2" alt="calendar" />
                    Typescript
                  </span>

                  <span
                    className="emoji-container"
                    id="flask-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={flask} className="emoji-2" alt="calendar" />
                    Flask
                  </span>

                  <span
                    className="emoji-container"
                    id="django-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={django} className="emoji-2" alt="calendar" />
                    Django
                  </span>

                  <span
                    className="emoji-container"
                    id="go-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={go} className="emoji-2" alt="calendar" />
                    Go
                  </span>

                  <span
                    className="emoji-container"
                    id="rust-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={rust} className="emoji-2" alt="calendar" />
                    Rust
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
                </div>
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
                    style={{ marginBottom: "1rem", padding: "1rem" }}
                  >
                    9+ years of experience
                  </span>
                  <span
                    className="emoji-container"
                    style={{ marginBottom: "1rem", padding: "1rem" }}
                  >
                    self-taught
                  </span>
                </div>
              </div>
              <div className="vertical-content" style={{ width: "100%" }}>
                <h2
                  className="h2"
                  style={{ marginBottom: "1rem", marginTop: "2rem" }}
                >
                  desired workplace details
                </h2>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">minimum salary: $150,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">maximum salary: $200,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">located: los angeles, ca</h4>
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
                    style={{ marginBottom: "1rem", padding: "1rem" }}
                  >
                    full-time
                  </span>
                  <span
                    className="emoji-container"
                    style={{ marginBottom: "1rem", padding: "1rem" }}
                  >
                    remote
                  </span>
                  <a
                    href="https://calendly.com/learnmutiny/company-final-steps"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: "100%",
                      alignContent: "center",
                      justifyContent: "center",
                      display: "flex",
                      marginTop: "0.5rem",
                    }}
                  >
                    <span
                      className="emoji-container"
                      style={{ marginBottom: "1rem" }}
                    >
                      <img src={calen} className="emoji-2" alt="calen" />
                      Meet with me
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="vertical-content"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <div
                className="vertical-content"
                style={{
                  alignItems: "flex-start",
                  textAlign: "left",
                  marginBottom: "2rem",
                }}
              >
                <h1 className="h1-sub">Full Stack Engineer</h1>
                <h2 className="h2">2 yrs</h2>

                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Front-End Development: Proficient in front-end development,
                  utilizing skills in JavaScript and React.js to create engaging
                  and responsive user interfaces.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Node.js and GraphQL Expertise: Experienced in backend
                  development using Node.js and GraphQL, contributing to the
                  development of robust and scalable server-side applications.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Test Automation: Well-versed in test automation methodologies,
                  ensuring the reliability and stability of software through
                  systematic testing processes.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Versatile Skill Set: Possesses a versatile skill set,
                  including product design, entrepreneurship, and a strong
                  background in software and product development, contributing
                  to a holistic understanding of the development lifecycle.
                </h3>
              </div>
              <div
                className="vertical-content"
                style={{
                  alignItems: "flex-start",
                  textAlign: "left",
                  marginBottom: "2rem",
                }}
              >
                <h1 className="h1-sub">Software Integration Engineer</h1>
                <h2 className="h2">5 mos</h2>

                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  API Integration Leadership: Led the successful integration of
                  diverse 3rd party APIs (Slack, Quickbooks, Netsuite, Carbone)
                  into the platform, expanding its capabilities and integrating
                  new features seamlessly.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  End-to-End Development Expertise: Developed robust frontend
                  and backend capabilities, including connectors for integrated
                  APIs, using a versatile tech stack (React, Typescript,
                  GraphQL, Python, Flask), ensuring comprehensive and efficient
                  system enhancements.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  DevOps and Cloud Optimization: Streamlined CI/CD workflows
                  through Github Actions, optimizing the development lifecycle.
                  Collaborated with AWS products (S3, EKS, SMS) to extend cloud
                  offerings, improve application performance, and ensure system
                  reliability.
                </h3>
              </div>
              <div
                className="vertical-content"
                style={{
                  alignItems: "flex-start",
                  textAlign: "left",
                  marginBottom: "2rem",
                }}
              >
                <h1 className="h1-sub">Software Engineer</h1>
                <h2 className="h2">1 yr 7 mos</h2>

                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  API Maintenance and Development: Managed the continuous
                  maintenance and updates of backend API services, implementing
                  new full-stack features for both mobile users and Loop&apos;s
                  cloud-based web platform, ensuring ongoing system
                  optimization.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Security Solutions Implementation: Spearheaded the development
                  of GDPR-compliant unidirectional encryption solutions for end
                  users using AWS&apos; encryption SDK, ensuring robust data
                  security and privacy measures.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Innovative Development and Mentoring: Pioneered the creation
                  of a localized docker container for multiple AWS services,
                  enhancing local development and testing capabilities. Led the
                  writing of unit and integration tests for the entire API
                  suite, employing Chai + Sinon. Oversaw and mentored junior
                  engineers, providing guidance in code review and architecture
                  optimization.
                </h3>
              </div>
            </div>
          </div>
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
            marginTop: "1rem",
          }}
        >
          <span className="emoji-container" style={{ marginBottom: "1rem" }}>
            <img src={calen} className="emoji-2" alt="calen" />
            Meet with me
          </span>
        </a>
      </div>
    </div>
  );
}
