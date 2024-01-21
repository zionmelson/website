import { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

import murdock from "../../assets/mp3/murdock.mp3";
import calen from "../../assets/svg/calen.svg";

import Lottie from "lottie-react";
import voice from "../../assets/json/voice.json";

import python from "../../assets/svg/python.svg";
import csharp from "../../assets/svg/csharp.svg";
import dotnet from "../../assets/svg/dotnet.svg";
import react from "../../assets/svg/react.svg";
import docker from "../../assets/svg/docker.svg";
import kubernetes from "../../assets/svg/kubernetes.svg";
import figma from "../../assets/svg/figma.svg";
import mysql from "../../assets/svg/mysql.svg";
import aws from "../../assets/svg/aws.svg";
import azure from "../../assets/svg/azure.svg";

export default function Murdock() {
  const [videoPaused, setVideoPaused] = useState(false);
  const [videoElement, setVideoElement] = useState(null);
  const [activeJob, setActiveJob] = useState(1);

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
                <h1 className="h1" style={{ marginBottom: "1rem" }}>
                  Matt Murdock{" "}
                </h1>
              </div>
              <Lottie animationData={voice} />
              <audio
                ref={(el) => setVideoElement(el)}
                style={{ marginBottom: "0.5rem" }}
              >
                <source src={murdock} type="audio/mpeg" />
                Your browser does not support HTML video.
              </audio>
              <div
                className="horizontal-content"
                style={{ marginTop: "1rem", marginBottom: "2rem", gap: "1rem" }}
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
              </div>
              <span
                className="emoji-container"
                onClick={(e) => {
                  e.preventDefault();
                  toggleVideo();
                }}
                style={{ padding: "1rem" }}
              >
                play me 😄
              </span>
            </div>
            <div
              className="vertical-content"
              style={{
                width: "70%",
                padding: "1rem",
                marginTop: "2rem",
              }}
            >
              <div
                className="vertical-content"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  margin: "0.5rem",
                  border: "3px solid #000",
                  borderRadius: "1rem",
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
                    id="figma-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={figma} className="emoji-2" alt="calendar" />
                    Figma
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
                    id="azure-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={azure} className="emoji-2" alt="calendar" />
                    Azure
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
                    2+ years of experience
                  </span>
                  <span
                    className="emoji-container"
                    style={{ marginBottom: "1rem", padding: "1rem" }}
                  >
                    self taught
                  </span>
                </div>
              </div>
              <div
                className="vertical-content"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  margin: "0.5rem",
                  border: "3px solid #000",
                  borderRadius: "1rem",
                }}
              >
                <h2 className="h2" style={{ marginBottom: "1rem" }}>
                  desired workplace details
                </h2>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">minimum salary: $65,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">maxmimum salary: $80,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">located: houston, tx</h4>
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
                width: "100%",
                alignItems: "flex-start",
                textAlign: "left",
                marginBottom: "2rem",
              }}
            >
              <div className="job-content" onClick={() => setActiveJob(1)}>
                <h1 className="h1-sub">Software Engineer</h1>
                <h2 className="h2">11 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 1 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">
                    Prompt Engineering and ServiceNow Integration:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Spearheaded prompt engineering initiatives and effectively
                    integrated ServiceNow solutions, streamlining workflows and
                    enhancing efficiency in IT service management.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Technology Stack Mastery:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Leveraged a diverse technology stack encompassing Figma,
                    AWS, Hangfire, Sonarqube, Active Directory, Microsoft SQL
                    Server, Bitbucket, Git, GitHub, .NET Framework, HTML, CSS,
                    and C# to develop robust and scalable software solutions.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Version Control and Collaboration:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Utilized version control systems like Bitbucket and
                    Git/GitHub to manage codebase, ensuring collaborative
                    development and seamless integration of features within the
                    .NET Framework environment.
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="vertical-content"
              style={{
                width: "100%",
                alignItems: "flex-start",
                textAlign: "left",
                marginBottom: "2rem",
              }}
            >
              <div className="job-content" onClick={() => setActiveJob(2)}>
                <h1 className="h1-sub">Process Integration Engineer</h1>
                <h2 className="h2">8 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 2 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">Product Ownership:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Led as the product owner for 14nm industry-leading chips,
                    overseeing the entire product life cycle from new product
                    introduction to mass production, ensuring seamless execution
                    and timely delivery.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Data-Driven Decision Making:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Implemented active product life cycle monitoring through
                    cloud data collection and Statistical Process Control (SPC)
                    analysis, driving yield enhancement and cost reduction
                    projects to optimize performance and efficiency.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">End-User Programming and Analysis:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Conducted end-user programming involving cloud data
                    extraction, filtering, analysis, and script writing to
                    extract meaningful insights, contributing to critical
                    analyses related to client claims, yield loss signatures,
                    and quarterly performance metrics.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Performance Reporting:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Generated comprehensive reports on key performance
                    indicators (KPI), yield statistics, and other inline
                    results, providing stakeholders with actionable insights for
                    strategic decision-making.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Cross-Functional Collaboration:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Collaborated with process module engineers, device teams,
                    quality, and reliability teams to meet committed delivery
                    dates, ensuring the desired output and quality standards
                    were maintained throughout the production process.
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="vertical-content"
              style={{
                width: "100%",
                alignItems: "flex-start",
                textAlign: "left",
                marginBottom: "2rem",
              }}
            >
              <div className="job-content" onClick={() => setActiveJob(3)}>
                <h1 className="h1-sub">Process Engineer</h1>
                <h2 className="h2">3 yrs & 9 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 3 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">Molecule Management System:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Designed and implemented a program for evaluating molecule
                    distribution through data analysis, automating the
                    population of Distillate production parameters and enhancing
                    operational efficiency.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    High Fuel Gas Burner Pressure Monitoring System:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Developed and implemented a system to optimize high fuel gas
                    pressure on seven fired heaters, ensuring compliance with
                    RSP regulations.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Isomerization Unit Support:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Facilitated various aspects for the Isomerization Unit,
                    including KPI monitoring, catalyst cycle life management,
                    day-to-day process optimization/troubleshooting, and
                    adherence to unit safety protocols.
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
            Matt Murdock
          </h1>
          <div className="horizontal-content">
            <Lottie animationData={voice} />
            <audio
              ref={(el) => setVideoElement(el)}
              style={{ marginBottom: "0.5rem" }}
            >
              <source src={murdock} type="audio/mpeg" />
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
            </div>
            <span
              className="emoji-container"
              onClick={(e) => {
                e.preventDefault();
                toggleVideo();
              }}
              style={{ padding: "1rem" }}
            >
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
                  padding: "0.5rem",
                  margin: "0.5rem",
                  border: "3px solid #000",
                  borderRadius: "1rem",
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
                    id="figma-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={figma} className="emoji-2" alt="calendar" />
                    Figma
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
                    id="azure-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={azure} className="emoji-2" alt="calendar" />
                    Azure
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
                    2+ years of experience
                  </span>
                  <span
                    className="emoji-container"
                    style={{ marginBottom: "1rem", padding: "1rem" }}
                  >
                    self taught
                  </span>
                </div>
              </div>
              <div
                className="vertical-content"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  margin: "0.5rem",
                  border: "3px solid #000",
                  borderRadius: "1rem",
                }}
              >
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
                  <h4 className="h4">minimum salary: $65,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">maximum salary: $80,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">located: houston, tx</h4>
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
              <div className="job-content" onClick={() => setActiveJob(1)}>
                <h1 className="h1-sub">Software Engineer</h1>
                <h2 className="h2">11 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 1 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">
                    Prompt Engineering and ServiceNow Integration:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Spearheaded prompt engineering initiatives and effectively
                    integrated ServiceNow solutions, streamlining workflows and
                    enhancing efficiency in IT service management.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Technology Stack Mastery:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Leveraged a diverse technology stack encompassing Figma,
                    AWS, Hangfire, Sonarqube, Active Directory, Microsoft SQL
                    Server, Bitbucket, Git, GitHub, .NET Framework, HTML, CSS,
                    and C# to develop robust and scalable software solutions.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Version Control and Collaboration:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Utilized version control systems like Bitbucket and
                    Git/GitHub to manage codebase, ensuring collaborative
                    development and seamless integration of features within the
                    .NET Framework environment.
                  </h3>
                </div>
              </div>
              <div className="job-content" onClick={() => setActiveJob(2)}>
                <h1 className="h1-sub">Process Integration Engineer</h1>
                <h2 className="h2">8 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 2 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">Product Ownership:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Led as the product owner for 14nm industry-leading chips,
                    overseeing the entire product life cycle from new product
                    introduction to mass production, ensuring seamless execution
                    and timely delivery.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Data-Driven Decision Making:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Implemented active product life cycle monitoring through
                    cloud data collection and Statistical Process Control (SPC)
                    analysis, driving yield enhancement and cost reduction
                    projects to optimize performance and efficiency.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">End-User Programming and Analysis:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Conducted end-user programming involving cloud data
                    extraction, filtering, analysis, and script writing to
                    extract meaningful insights, contributing to critical
                    analyses related to client claims, yield loss signatures,
                    and quarterly performance metrics.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Performance Reporting:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Generated comprehensive reports on key performance
                    indicators (KPI), yield statistics, and other inline
                    results, providing stakeholders with actionable insights for
                    strategic decision-making.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Cross-Functional Collaboration:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Collaborated with process module engineers, device teams,
                    quality, and reliability teams to meet committed delivery
                    dates, ensuring the desired output and quality standards
                    were maintained throughout the production process.
                  </h3>
                </div>
              </div>
              <div className="job-content" onClick={() => setActiveJob(3)}>
                <h1 className="h1-sub">Process Engineer</h1>
                <h2 className="h2">3 yrs & 9 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 3 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">Molecule Management System:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Designed and implemented a program for evaluating molecule
                    distribution through data analysis, automating the
                    population of Distillate production parameters and enhancing
                    operational efficiency.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    High Fuel Gas Burner Pressure Monitoring System:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Developed and implemented a system to optimize high fuel gas
                    pressure on seven fired heaters, ensuring compliance with
                    RSP regulations.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Isomerization Unit Support:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Facilitated various aspects for the Isomerization Unit,
                    including KPI monitoring, catalyst cycle life management,
                    day-to-day process optimization/troubleshooting, and
                    adherence to unit safety protocols.
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
    </div>
  );
}
