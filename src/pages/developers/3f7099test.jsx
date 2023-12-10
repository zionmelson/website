
  import { useState } from "react";
  import {
    FaPause,
    FaPlay,
    FaVolumeUp,
    FaVolumeDown,
    FaVolumeMute,
  } from "react-icons/fa";

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
                  <h1 className="h1">Matt Murdock</h1>
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
                  <source src={murdock} type="audio/mpeg" />
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
                    id=
                    "midtier"         
                    style={{ marginBottom: "1rem", padding: "1rem", width: "100%" }}
                  >
                    base level
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
                    style={{ marginBottom: "1rem", width: "100%" }}
                  >
                    <img src={calen} className="emoji-2" alt="calen" />
                    Meet with developer
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
                marginBottom: "2rem" 
              }}
            >
              <h1
                className="h1-sub"
                
              >
              Software Engineer
            </h1>
            <h2
              className="h2"
            
            >
              11 mos
            </h2>
            
              <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
               
              }}
            >
              Prompt Engineering and ServiceNow Integration: Spearheaded prompt engineering initiatives and effectively integrated ServiceNow solutions, streamlining workflows and enhancing efficiency in IT service management.
            </h3> 
              <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
               
              }}
            >
              Technology Stack Mastery: Leveraged a diverse technology stack encompassing Figma, AWS, Hangfire, Sonarqube, Active Directory, Microsoft SQL Server, Bitbucket, Git, GitHub, .NET Framework, HTML, CSS, and C# to develop robust and scalable software solutions.
            </h3> 
              <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
               
              }}
            >
              Version Control and Collaboration: Utilized version control systems like Bitbucket and Git/GitHub to manage codebase, ensuring collaborative development and seamless integration of features within the .NET Framework environment.
            </h3> 
          </div> 
            <div
              className="vertical-content"
              style={{ 
                alignItems: "flex-start",
                textAlign: "left",
                marginBottom: "2rem" 
              }}
            >
              <h1
                className="h1-sub"
                
              >
              Process Integration Engineer
            </h1>
            <h2
              className="h2"
            
            >
              8 mos
            </h2>
            
              <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
               
              }}
            >
              Product Ownership: Led as the product owner for 14nm industry-leading chips, overseeing the entire product life cycle from new product introduction to mass production, ensuring seamless execution and timely delivery.
            </h3> 
              <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
               
              }}
            >
              Data-Driven Decision Making: Implemented active product life cycle monitoring through cloud data collection and Statistical Process Control (SPC) analysis, driving yield enhancement and cost reduction projects to optimize performance and efficiency.
            </h3> 
              <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
               
              }}
            >
              End-User Programming and Analysis: Conducted end-user programming involving cloud data extraction, filtering, analysis, and script writing to extract meaningful insights, contributing to critical analyses related to client claims, yield loss signatures, and quarterly performance metrics.
            </h3> 
              <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
               
              }}
            >
              Performance Reporting: Generated comprehensive reports on key performance indicators (KPI), yield statistics, and other inline results, providing stakeholders with actionable insights for strategic decision-making.
            </h3> 
              <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
               
              }}
            >
              Cross-Functional Collaboration: Collaborated with process module engineers, device teams, quality, and reliability teams to meet committed delivery dates, ensuring the desired output and quality standards were maintained throughout the production process.
            </h3> 
          </div> 
            <div
              className="vertical-content"
              style={{ 
                alignItems: "flex-start",
                textAlign: "left",
                marginBottom: "2rem" 
              }}
            >
              <h1
                className="h1-sub"
                
              >
              Process Engineer
            </h1>
            <h2
              className="h2"
            
            >
              3 yrs 9 mos
            </h2>
            
              <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
               
              }}
            >
              Molecule Management System: Designed and implemented a program for evaluating molecule distribution through data analysis, automating the population of Distillate production parameters and enhancing operational efficiency.
            </h3> 
              <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
               
              }}
            >
              Integrated a revenue tracking system within existing assets using PI-AF and PI-Vision, optimizing financial visibility and contributing to overall process improvement.
            </h3> 
              <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
               
              }}
            >
              High Fuel Gas Burner Pressure Monitoring System: Developed and implemented a system to optimize high fuel gas pressure on seven fired heaters, ensuring compliance with RSP regulations.
            </h3> 
              <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
               
              }}
            >
              Authorized fired heaters to operate safely at higher efficiency, subsequently increasing throughput rates and overall operational performance.
            </h3> 
              <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
               
              }}
            >
              Isomerization Unit Support:Facilitated various aspects for the Isomerization Unit, including KPI monitoring, catalyst cycle life management, day-to-day process optimization/troubleshooting, and adherence to unit safety protocols.
            </h3> 
              <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
               
              }}
            >
              Played a key role in maintaining operational excellence and safety standards within the Isomerization Unit, contributing to overall plant efficiency and reliability.
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
          Matt Murdock
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
                  style={{ marginBottom: "1rem", padding: "1rem", width: "100%" }}
                >
                  base level
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
                      style={{ marginBottom: "1rem", width: "100%" }}
                    >
                      <img src={calen} className="emoji-2" alt="calen" />
                      Meet with developer
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
              style={{ alignItems: "flex-start",
              textAlign: "left",
              marginBottom: "2rem" }}
            >
              <h1
                className="h1-sub"
              
              >
              Software Engineer
            </h1>
            <h2
              className="h2"
             
            >
              11 mos
            </h2>
            
              <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
               
              }}
            >
              Prompt Engineering and ServiceNow Integration: Spearheaded prompt engineering initiatives and effectively integrated ServiceNow solutions, streamlining workflows and enhancing efficiency in IT service management.
            </h3> 
              <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
               
              }}
            >
              Technology Stack Mastery: Leveraged a diverse technology stack encompassing Figma, AWS, Hangfire, Sonarqube, Active Directory, Microsoft SQL Server, Bitbucket, Git, GitHub, .NET Framework, HTML, CSS, and C# to develop robust and scalable software solutions.
            </h3> 
              <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
               
              }}
            >
              Version Control and Collaboration: Utilized version control systems like Bitbucket and Git/GitHub to manage codebase, ensuring collaborative development and seamless integration of features within the .NET Framework environment.
            </h3>
          </div> 
            <div
              className="vertical-content"
              style={{ alignItems: "flex-start",
              textAlign: "left",
              marginBottom: "2rem" }}
            >
              <h1
                className="h1-sub"
              
              >
              Process Integration Engineer
            </h1>
            <h2
              className="h2"
             
            >
              8 mos
            </h2>
            
              <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
               
              }}
            >
              Product Ownership: Led as the product owner for 14nm industry-leading chips, overseeing the entire product life cycle from new product introduction to mass production, ensuring seamless execution and timely delivery.
            </h3> 
              <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
               
              }}
            >
              Data-Driven Decision Making: Implemented active product life cycle monitoring through cloud data collection and Statistical Process Control (SPC) analysis, driving yield enhancement and cost reduction projects to optimize performance and efficiency.
            </h3> 
              <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
               
              }}
            >
              End-User Programming and Analysis: Conducted end-user programming involving cloud data extraction, filtering, analysis, and script writing to extract meaningful insights, contributing to critical analyses related to client claims, yield loss signatures, and quarterly performance metrics.
            </h3> 
              <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
               
              }}
            >
              Performance Reporting: Generated comprehensive reports on key performance indicators (KPI), yield statistics, and other inline results, providing stakeholders with actionable insights for strategic decision-making.
            </h3> 
              <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
               
              }}
            >
              Cross-Functional Collaboration: Collaborated with process module engineers, device teams, quality, and reliability teams to meet committed delivery dates, ensuring the desired output and quality standards were maintained throughout the production process.
            </h3>
          </div> 
            <div
              className="vertical-content"
              style={{ alignItems: "flex-start",
              textAlign: "left",
              marginBottom: "2rem" }}
            >
              <h1
                className="h1-sub"
              
              >
              Process Engineer
            </h1>
            <h2
              className="h2"
             
            >
              3 yrs 9 mos
            </h2>
            
              <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
               
              }}
            >
              Molecule Management System: Designed and implemented a program for evaluating molecule distribution through data analysis, automating the population of Distillate production parameters and enhancing operational efficiency.
            </h3> 
              <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
               
              }}
            >
              Integrated a revenue tracking system within existing assets using PI-AF and PI-Vision, optimizing financial visibility and contributing to overall process improvement.
            </h3> 
              <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
               
              }}
            >
              High Fuel Gas Burner Pressure Monitoring System: Developed and implemented a system to optimize high fuel gas pressure on seven fired heaters, ensuring compliance with RSP regulations.
            </h3> 
              <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
               
              }}
            >
              Authorized fired heaters to operate safely at higher efficiency, subsequently increasing throughput rates and overall operational performance.
            </h3> 
              <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
               
              }}
            >
              Isomerization Unit Support:Facilitated various aspects for the Isomerization Unit, including KPI monitoring, catalyst cycle life management, day-to-day process optimization/troubleshooting, and adherence to unit safety protocols.
            </h3> 
              <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
               
              }}
            >
              Played a key role in maintaining operational excellence and safety standards within the Isomerization Unit, contributing to overall plant efficiency and reliability.
            </h3>
          </div>
              </div>
        </div>
      </div>
      </div>
      </div>
    )}
 