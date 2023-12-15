import { useState } from "react";
import {
  FaPause,
  FaPlay,
  FaVolumeUp,
  FaVolumeDown,
  FaVolumeMute,
} from "react-icons/fa";

import queen from "../../assets/mp3/queen.mp3";
import calen from "../../assets/svg/calen.svg";

import Lottie from "lottie-react";
import voice from "../../assets/json/voice.json";

import linux from "../../assets/svg/linux.svg";
import react from "../../assets/svg/react.svg";
import angular from "../../assets/svg/angular.svg";
import node from "../../assets/svg/node.svg";
import python from "../../assets/svg/python.svg";
import aws from "../../assets/svg/aws.svg";
import mysql from "../../assets/svg/mysql.svg";
import cpp from "../../assets/svg/cpp.svg";
import typescript from "../../assets/svg/typescript.svg";
import go from "../../assets/svg/go.svg";
import docker from "../../assets/svg/docker.svg";
import kubernetes from "../../assets/svg/kubernetes.svg";
import csharp from "../../assets/svg/csharp.svg";
import dotnet from "../../assets/svg/dotnet.svg";

export default function Queen() {
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
                <h1 className="h1">Oliver Queen</h1>
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
                <source src={queen} type="audio/mpeg" />
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
                  id="midtier"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                    width: "100%",
                  }}
                >
                  base level developer
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
                    id="mysql-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={mysql} className="emoji-2" alt="calendar" />
                    MySQL
                  </span>

                  <span
                    className="emoji-container"
                    id="cpp-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={cpp} className="emoji-2" alt="calendar" />
                    C++
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
                    id="kubernetes-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={kubernetes} className="emoji-2" alt="calendar" />
                    Kubernetes
                  </span>

                  <span
                    className="emoji-container"
                    id="csharp-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={csharp} className="emoji-2" alt="calendar" />
                    C#
                  </span>

                  <span
                    className="emoji-container"
                    id="dotnet-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={dotnet} className="emoji-2" alt="calendar" />
                    .NET
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
                    5+ years of experience
                  </span>
                  <span
                    className="emoji-container"
                    style={{ marginBottom: "1rem", padding: "1rem" }}
                  >
                    bootcamp
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
                  <h4 className="h4">minimum salary: $110,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">maxmimum salary: $150,000</h4>
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
                    independent contractor
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
              <h1 className="h1-sub">Senior Fullstack Engineer</h1>
              <h2 className="h2">2 yrs</h2>

              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Open Source Maintainer: Actively contributed to the open-source
                npm package muhammara.js and currently maintains … fork. Ensured
                ongoing updates and enhancements to improve package
                functionality and reliability.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Full-Stack Expertise and Feature Development: Applied skills
                across the full stack, including C++, Python, Golang, and
                TypeScript. Implemented rich features such as Angular drag and
                drop, virtual scrolling, and reusable React components.
                Developed innovative features like drawing lines on PDFs using
                the Open Layers API and integrated webforms through Jotforms
                API.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Infrastructure Management and Technology Upgrades: Managed
                environment setup for new clients using AWS EKS, performed
                builds with Jenkins, and orchestrated Docker containers with
                Kubernetes (K8s). Upgraded AWS Lambda functions to Node18
                runtime, addressing dependencies and modifying calls to
                deprecated APIs. Successfully upgraded the app&apos;s frontend
                to Angular 16 and the backend to Node 18, staying abreast of the
                latest technologies.
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
              <h1 className="h1-sub">Accountant</h1>
              <h2 className="h2">2 yrs 4 mos</h2>

              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Financial Management for Non-Profit Entities: Maintained the
                general ledger for four non-profit entities, ensuring accurate
                and up-to-date financial records. Generated monthly financial
                reports for the Board of Directors to provide insights into the
                organizations&apos; financial health.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Financial Analysis and Issue Resolution: Discovered and
                rectified two instances of double payments made to a vendor in a
                prior year, demonstrating attention to detail and financial
                acumen. Successfully negotiated a $5500 credit for the company,
                showcasing proactive issue resolution.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Process Automation and Efficiency: Improved operational
                efficiency by creating new invoice templates tailored for
                Hollywood Walk of Fame star ceremonies. Implemented a C# script
                to automate the extraction of monthly bank statements and tax
                documents from banking websites, streamlining the financial data
                retrieval process.
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
              <h1 className="h1-sub">Software Engineer Intern</h1>
              <h2 className="h2">9 mos</h2>

              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Automated Testing Contributions: Contributed scripts for
                automated testing, utilizing C# and Selenium WebDriver. Expanded
                test suites to improve the Continuous Integration/Continuous
                Deployment (CI/CD) process, ensuring efficient and reliable
                testing procedures.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                .NET Web Application Enhancement: Utilized Visual Studio to
                address bugs and enhance features on a .NET web application.
                Engaged in both debugging and feature development activities,
                showcasing a comprehensive understanding of the software
                development lifecycle.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Agile Collaboration: Actively participated in daily SCRUM
                meetings, contributing to the Agile development process.
                Reviewed and discussed bi-weekly sprint tasks, fostering
                effective communication and collaboration within the development
                team.
              </h3>
            </div>
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
            Oliver Queen
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
              <source src={queen} type="audio/mpeg" />
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
                  id="midtier"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                    width: "100%",
                  }}
                >
                  base level developer
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
                    id="mysql-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={mysql} className="emoji-2" alt="calendar" />
                    MySQL
                  </span>

                  <span
                    className="emoji-container"
                    id="cpp-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={cpp} className="emoji-2" alt="calendar" />
                    Cpp
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
                    id="kubernetes-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={kubernetes} className="emoji-2" alt="calendar" />
                    Kubernetes
                  </span>

                  <span
                    className="emoji-container"
                    id="csharp-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={csharp} className="emoji-2" alt="calendar" />
                    CSharp
                  </span>

                  <span
                    className="emoji-container"
                    id="dotnet-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={dotnet} className="emoji-2" alt="calendar" />
                    DotNet
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
                    5+ years of experience
                  </span>
                  <span
                    className="emoji-container"
                    style={{ marginBottom: "1rem", padding: "1rem" }}
                  >
                    bootcamp
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
                  <h4 className="h4">minimum salary: $110,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">maximum salary: $150,000</h4>
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
                    independent contractor
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
                      style={{ marginBottom: "1rem", width: "100%" }}
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
                <h1 className="h1-sub">Senior Fullstack Engineer</h1>
                <h2 className="h2">2 yrs</h2>

                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Open Source Maintainer: Actively contributed to the
                  open-source npm package muhammara.js and currently maintains …
                  fork. Ensured ongoing updates and enhancements to improve
                  package functionality and reliability.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Full-Stack Expertise and Feature Development: Applied skills
                  across the full stack, including C++, Python, Golang, and
                  TypeScript. Implemented rich features such as Angular drag and
                  drop, virtual scrolling, and reusable React components.
                  Developed innovative features like drawing lines on PDFs using
                  the Open Layers API and integrated webforms through Jotforms
                  API.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Infrastructure Management and Technology Upgrades: Managed
                  environment setup for new clients using AWS EKS, performed
                  builds with Jenkins, and orchestrated Docker containers with
                  Kubernetes (K8s). Upgraded AWS Lambda functions to Node18
                  runtime, addressing dependencies and modifying calls to
                  deprecated APIs. Successfully upgraded the app&apos;s frontend
                  to Angular 16 and the backend to Node 18, staying abreast of
                  the latest technologies.
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
                <h1 className="h1-sub">Accountant</h1>
                <h2 className="h2">2 yrs 4 mos</h2>

                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Financial Management for Non-Profit Entities: Maintained the
                  general ledger for four non-profit entities, ensuring accurate
                  and up-to-date financial records. Generated monthly financial
                  reports for the Board of Directors to provide insights into
                  the organizations&apos; financial health.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Financial Analysis and Issue Resolution: Discovered and
                  rectified two instances of double payments made to a vendor in
                  a prior year, demonstrating attention to detail and financial
                  acumen. Successfully negotiated a $5500 credit for the
                  company, showcasing proactive issue resolution.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Process Automation and Efficiency: Improved operational
                  efficiency by creating new invoice templates tailored for
                  Hollywood Walk of Fame star ceremonies. Implemented a C#
                  script to automate the extraction of monthly bank statements
                  and tax documents from banking websites, streamlining the
                  financial data retrieval process.
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
                <h1 className="h1-sub">Software Engineer Intern</h1>
                <h2 className="h2">9 mos</h2>

                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Automated Testing Contributions: Contributed scripts for
                  automated testing, utilizing C# and Selenium WebDriver.
                  Expanded test suites to improve the Continuous
                  Integration/Continuous Deployment (CI/CD) process, ensuring
                  efficient and reliable testing procedures.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  .NET Web Application Enhancement: Utilized Visual Studio to
                  address bugs and enhance features on a .NET web application.
                  Engaged in both debugging and feature development activities,
                  showcasing a comprehensive understanding of the software
                  development lifecycle.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Agile Collaboration: Actively participated in daily SCRUM
                  meetings, contributing to the Agile development process.
                  Reviewed and discussed bi-weekly sprint tasks, fostering
                  effective communication and collaboration within the
                  development team.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
