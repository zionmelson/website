import { useState } from "react";
import {
  FaPause,
  FaPlay,
  FaVolumeUp,
  FaVolumeDown,
  FaVolumeMute,
} from "react-icons/fa";

import parker from "../../assets/mp3/parker.mp3";
import calen from "../../assets/svg/calen.svg";

import Lottie from "lottie-react";
import voice from "../../assets/json/voice.json";

import vue from "../../assets/svg/vue.svg";
import react from "../../assets/svg/react.svg";
import node from "../../assets/svg/node.svg";
import go from "../../assets/svg/go.svg";
import javascript from "../../assets/svg/javascript.svg";
import aws from "../../assets/svg/aws.svg";
import java from "../../assets/svg/java.svg";
import postgres from "../../assets/svg/postgres.svg";
import docker from "../../assets/svg/docker.svg";
import linux from "../../assets/svg/linux.svg";
import python from "../../assets/svg/python.svg";
import flask from "../../assets/svg/flask.svg";

export default function Parker() {
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
                <h1 className="h1">Peter Parker</h1>
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
                <source src={parker} type="audio/mpeg" />
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
                    id="aws-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={aws} className="emoji-2" alt="calendar" />
                    AWS
                  </span>

                  <span
                    className="emoji-container"
                    id="java-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={java} className="emoji-2" alt="calendar" />
                    Java
                  </span>

                  <span
                    className="emoji-container"
                    id="postgres-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={postgres} className="emoji-2" alt="calendar" />
                    Postgres
                  </span>

                  <span
                    className="emoji-container"
                    id="docker-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={docker} className="emoji-2" alt="calendar" />
                    Docker
                  </span>

                  <span
                    className="emoji-container"
                    id="linux-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={linux} className="emoji-2" alt="calendar" />
                    Linux
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
                    id="flask-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={flask} className="emoji-2" alt="calendar" />
                    Flask
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
                    7+ years of experience
                  </span>
                  <span
                    className="emoji-container"
                    style={{ marginBottom: "1rem", padding: "1rem" }}
                  >
                    college degree
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
                  <h4 className="h4">minimum salary: $115,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">maxmimum salary: $135,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">located: atlanta, ga</h4>
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
              <h1 className="h1-sub">Senior Software Engineer</h1>
              <h2 className="h2">2 yrs 8 mos</h2>

              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Application Development Leadership: Spearheaded the development
                of a cutting-edge application within an AGILE framework,
                collaborating with a skilled team to enhance an existing
                microservices framework. Applied expertise in HTML5, CSS, React,
                Java, and Postgres to deliver effective solutions that address
                critical customer business challenges.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Object-Oriented Software Components: Designed and developed
                intricate software components, leveraging a profound
                understanding of Object-Oriented Programming (OOP) and
                associated technologies. Ensured the seamless integration of
                these components into the existing system, contributing to
                enhanced functionality and performance.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                CI/CD Pipeline Governance: Led the team in the establishment and
                management of the GitLab CI/CD Pipeline process, streamlining
                development workflows and ensuring efficient and reliable
                delivery. Demonstrated proficiency in CI/CD tools such as
                Jenkins, Gitlab, and Docker, with a focus on containerization
                using Linux Containers to create Docker images.
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
              <h1 className="h1-sub">Freelance Web Developer</h1>
              <h2 className="h2">7 yrs</h2>

              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                WordPress Website Development: Worked as a freelance WordPress
                developer specializing in building websites tailored for small
                and medium-sized businesses. Led comprehensive front-end
                development and back-end programming for website overhauls,
                ensuring optimal performance and user engagement.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Traffic Optimization and Feature Enhancement: Successfully
                increased web traffic by 125% through strategic improvements,
                including enhanced navigation, dynamic media sections, and
                integration of social media plugins. Implemented changes that
                significantly improved the overall user experience and site
                attractiveness.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                API Platform Development and UI Design Collaboration: Developed
                a robust API platform to support segmentation, personalized
                recommendations, and omni-channel messaging, contributing to a
                more personalized and targeted user experience. Collaborated on
                the migration of UI designs, ensuring a consistent look and feel
                throughout the application.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Analytics Integration and Cloud Hosting: Implemented analytics
                events essential for monitoring and optimizing the performance
                of developed functionalities. Utilized Elementor Pro for
                advanced page building and leveraged cloud hosting solutions to
                ensure scalability, reliability, and optimal website speed.
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
              <h1 className="h1-sub">Junior Engineer</h1>
              <h2 className="h2">10 mos</h2>

              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                VueJs Frontend Developer: Demonstrated proficiency in VueJs
                framework for extensive frontend development, implementing
                features with a focus on user-centric design and interactivity.
                Applied advanced layout techniques using Flexbox and CSS Grid,
                ensuring responsive and visually appealing user interfaces.
                Utilized Material UI and Bootstrap to enhance the design and
                functionality of web applications.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Virtual Machines Management and API Development: Created and
                managed Virtual Machines to support scalable and efficient
                application infrastructure. Developed Flask REST APIs using
                Python and React, enabling seamless communication between the
                frontend and backend systems. Implemented Swagger UI for
                comprehensive API documentation, ensuring clarity and
                accessibility for developers.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Data Management and Communication: Employed Excel and Google
                Sheets extensively for data management and analysis, showcasing
                strong analytical skills. Engaged in direct communication with
                product owners, providing clear explanations of complex
                processes in layman&apos;s terms, fostering effective
                collaboration.
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
            Peter Parker
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
              <source src={parker} type="audio/mpeg" />
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
                    id="aws-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={aws} className="emoji-2" alt="calendar" />
                    AWS
                  </span>

                  <span
                    className="emoji-container"
                    id="java-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={java} className="emoji-2" alt="calendar" />
                    Java
                  </span>

                  <span
                    className="emoji-container"
                    id="postgres-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={postgres} className="emoji-2" alt="calendar" />
                    Postgres
                  </span>

                  <span
                    className="emoji-container"
                    id="docker-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={docker} className="emoji-2" alt="calendar" />
                    Docker
                  </span>

                  <span
                    className="emoji-container"
                    id="linux-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={linux} className="emoji-2" alt="calendar" />
                    Linux
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
                    id="flask-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={flask} className="emoji-2" alt="calendar" />
                    Flask
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
                    7+ years of experience
                  </span>
                  <span
                    className="emoji-container"
                    style={{ marginBottom: "1rem", padding: "1rem" }}
                  >
                    college degree
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
                  <h4 className="h4">minimum salary: $115,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">maximum salary: $135,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">located: atlanta, ga</h4>
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
                <h1 className="h1-sub">Senior Software Engineer</h1>
                <h2 className="h2">2 yrs 8 mos</h2>

                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Application Development Leadership: Spearheaded the
                  development of a cutting-edge application within an AGILE
                  framework, collaborating with a skilled team to enhance an
                  existing microservices framework. Applied expertise in HTML5,
                  CSS, React, Java, and Postgres to deliver effective solutions
                  that address critical customer business challenges.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Object-Oriented Software Components: Designed and developed
                  intricate software components, leveraging a profound
                  understanding of Object-Oriented Programming (OOP) and
                  associated technologies. Ensured the seamless integration of
                  these components into the existing system, contributing to
                  enhanced functionality and performance.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  CI/CD Pipeline Governance: Led the team in the establishment
                  and management of the GitLab CI/CD Pipeline process,
                  streamlining development workflows and ensuring efficient and
                  reliable delivery. Demonstrated proficiency in CI/CD tools
                  such as Jenkins, Gitlab, and Docker, with a focus on
                  containerization using Linux Containers to create Docker
                  images.
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
                <h1 className="h1-sub">Freelance Web Developer</h1>
                <h2 className="h2">7 yrs</h2>

                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  WordPress Website Development: Worked as a freelance WordPress
                  developer specializing in building websites tailored for small
                  and medium-sized businesses. Led comprehensive front-end
                  development and back-end programming for website overhauls,
                  ensuring optimal performance and user engagement.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Traffic Optimization and Feature Enhancement: Successfully
                  increased web traffic by 125% through strategic improvements,
                  including enhanced navigation, dynamic media sections, and
                  integration of social media plugins. Implemented changes that
                  significantly improved the overall user experience and site
                  attractiveness.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  API Platform Development and UI Design Collaboration:
                  Developed a robust API platform to support segmentation,
                  personalized recommendations, and omni-channel messaging,
                  contributing to a more personalized and targeted user
                  experience. Collaborated on the migration of UI designs,
                  ensuring a consistent look and feel throughout the
                  application.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Analytics Integration and Cloud Hosting: Implemented analytics
                  events essential for monitoring and optimizing the performance
                  of developed functionalities. Utilized Elementor Pro for
                  advanced page building and leveraged cloud hosting solutions
                  to ensure scalability, reliability, and optimal website speed.
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
                <h1 className="h1-sub">Junior Engineer</h1>
                <h2 className="h2">10 mos</h2>

                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  VueJs Frontend Developer: Demonstrated proficiency in VueJs
                  framework for extensive frontend development, implementing
                  features with a focus on user-centric design and
                  interactivity. Applied advanced layout techniques using
                  Flexbox and CSS Grid, ensuring responsive and visually
                  appealing user interfaces. Utilized Material UI and Bootstrap
                  to enhance the design and functionality of web applications.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Virtual Machines Management and API Development: Created and
                  managed Virtual Machines to support scalable and efficient
                  application infrastructure. Developed Flask REST APIs using
                  Python and React, enabling seamless communication between the
                  frontend and backend systems. Implemented Swagger UI for
                  comprehensive API documentation, ensuring clarity and
                  accessibility for developers.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Data Management and Communication: Employed Excel and Google
                  Sheets extensively for data management and analysis,
                  showcasing strong analytical skills. Engaged in direct
                  communication with product owners, providing clear
                  explanations of complex processes in layman&apos;s terms,
                  fostering effective collaboration.
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
