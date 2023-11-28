// import { useState } from "react";
import {
  // FaPause,
  // FaPlay,
  FaVolumeUp,
  FaVolumeDown,
  FaVolumeMute,
} from "react-icons/fa";

import calen from "../../assets/calen.svg";
import react from "../../assets/react.svg";
import angul from "../../assets/angul.svg";
import node from "../../assets/node.svg";
import js from "../../assets/js.svg";
import mysql from "../../assets/mysql.svg";

export default function Joesph() {
  // const [videoPaused, setVideoPaused] = useState(true);
  // const [videoElement, setVideoElement] = useState(null);

  // const toggleVideo = () => {
  //   console.log(videoElement);
  //   console.log(videoElement.paused);

  //   if (videoElement) {
  //     if (videoElement.paused) {
  //       videoElement.play();
  //       console.log("play");
  //       setVideoPaused(true);
  //     } else {
  //       videoElement.pause();
  //       console.log("pause");
  //       setVideoPaused(false);
  //     }
  //   }
  // };

  return (
    <div className="main">
      {/* desktop */}
      <div className="box">
        <div className="vertical-content">
          <div
            className="horizontal-content"
            style={{ alignItems: "flex-start", marginBottom: "1rem" }}
          >
            <div
              className="vertical-content"
              style={{
                width: "100%",

                alignItems: "flex-start",
              }}
            >
              <h1
                className="h1"
                style={{
                  marginTop: "3rem",
                }}
              >
                Zoowee Blubberworth
              </h1>
              <h3
                className="h3"
                style={{
                  marginBottom: "1rem",
                }}
              >
                full-stack developer
              </h3>

              {/* <video
                id="video"
                width="650"
                autoPlay
                muted
                loop
                ref={(el) => setVideoElement(el)}
                style={{ marginBottom: "1rem" }}
              >
                <source src="/src/assets/testVid.mp4" type="video/mp4" />
                Your browser does not support HTML video.
              </video> */}
              <div
                className="horizontal-content"
                style={{ marginBottom: "2rem" }}
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    // toggleVideo();
                  }}
                  style={{ fontSize: "1.5rem" }}
                >
                  {/* {videoPaused ? <FaPlay /> : <FaPause />} */}
                </button>
                <button style={{ fontSize: "1.5rem" }}>
                  <FaVolumeMute />
                </button>
                <button style={{ fontSize: "1.5rem" }}>
                  <FaVolumeDown />
                </button>
                <button style={{ fontSize: "1.5rem" }}>
                  <FaVolumeUp />
                </button>
              </div>
            </div>
            <div
              className="vertical-content"
              style={{
                padding: "1rem",
                width: "50rem",
                marginTop: "5rem",
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
                    id="angular-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={angul} className="emoji-2" alt="calendar" />
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
                    Node.js
                  </span>
                  <span
                    className="emoji-container"
                    id="js-container"
                    style={{
                      display: "flex",

                      marginBottom: "1rem",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <img src={js} className="emoji-2" alt="calendar" />
                    Javascript
                  </span>
                  <span
                    className="emoji-container"
                    id="mysql-container"
                    style={{
                      display: "flex",

                      marginBottom: "1rem",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <img src={mysql} className="emoji-2" alt="calendar" />
                    MySQL
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
                    $110,000
                  </h3>
                </span>

                <span
                  className="emoji-container"
                  style={{ width: "90%", marginBottom: "1rem" }}
                >
                  <h4 className="h4">maximum</h4>
                  <h3 className="h3" style={{ paddingLeft: "4rem" }}>
                    $150,000
                  </h3>
                </span>
                <span
                  className="emoji-container"
                  style={{ width: "90%", marginBottom: "1rem" }}
                >
                  independent contractor
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
              2 yrs
            </h2>
            <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
                textAlign: "left",
              }}
            >
              Open Source Maintainer: Actively contributed to the open-source
              npm package muhammara.js and currently maintains ******** fork.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
                textAlign: "left",
              }}
            >
              Ensured ongoing updates and enhancements to improve package
              functionality and reliability. Full-Stack Expertise and Feature
              Development: Applied skills across the full stack, including C++,
              Python, Golang, and TypeScript.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "2rem",
                textAlign: "left",
              }}
            >
              Implemented rich features such as Angular drag and drop, virtual
              scrolling, and reusable React components. Developed innovative
              features like drawing lines on PDFs using the Open Layers API and
              integrated webforms through Jotforms API. Infrastructure
              Management and Technology Upgrades: Managed environment setup for
              new clients using AWS EKS, performed builds with Jenkins, and
              orchestrated Docker containers with Kubernetes (K8s). Upgraded AWS
              Lambda functions to Node18 runtime, addressing dependencies and
              modifying calls to deprecated APIs. Successfully upgraded the
              app&apos;s frontend to Angular 16 and the backend to Node 18,
              staying abreast of the latest technologies.
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
              Accountant
            </h1>
            <h2
              className="h2"
              style={{
                marginBottom: "1rem",
                textAlign: "left",
              }}
            >
              2 yrs & 4 mos
            </h2>
            <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
                textAlign: "left",
              }}
            >
              Financial Management for Non-Profit Entities: Maintained the
              general ledger for four non-profit entities, ensuring accurate and
              up-to-date financial records. Generated monthly financial reports
              for the Board of Directors to provide insights into the
              organizations&apos; financial health.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
                textAlign: "left",
              }}
            >
              Financial Analysis and Issue Resolution: Discovered and rectified
              two instances of double payments made to a vendor in a prior year,
              demonstrating attention to detail and financial acumen.
              Successfully negotiated a $5500 credit for the company, showcasing
              proactive issue resolution.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "2rem",
                textAlign: "left",
              }}
            >
              Process Automation and Efficiency: Improved operational efficiency
              by creating new invoice templates tailored for Hollywood Walk of
              Fame star ceremonies. Implemented a C# script to automate the
              extraction of monthly bank statements and tax documents from
              banking websites, streamlining the financial data retrieval
              process.
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
              Software Engineer Intern
            </h1>
            <h2
              className="h2"
              style={{
                marginBottom: "1rem",
                textAlign: "left",
              }}
            >
              9 mos
            </h2>
            <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
                textAlign: "left",
              }}
            >
              Automated Testing Contributions: Contributed scripts for automated
              testing, utilizing C# and Selenium WebDriver. Expanded test suites
              to improve the Continuous Integration/Continuous Deployment
              (CI/CD) process, ensuring efficient and reliable testing
              procedures.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
                textAlign: "left",
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
                marginBottom: "2rem",
                textAlign: "left",
              }}
            >
              Agile Collaboration: Actively participated in daily SCRUM
              meetings, contributing to the Agile development process. Reviewed
              and discussed bi-weekly sprint tasks, fostering effective
              communication and collaboration within the development team.
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
            Zoowee Blubberworth
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
            {/* <video
              id="video"
              autoPlay
              muted
              loop
              ref={(el) => setVideoElement(el)}
              style={{ marginBottom: "0.5rem" }}
            >
              <source src="/src/assets/testVid.mp4" type="video/mp4" />
              Your browser does not support HTML video.
            </video> */}
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
                  // toggleVideo();
                }}
                style={{ fontSize: "2rem" }}
              >
                {/* {videoPaused ? <FaPlay /> : <FaPause />} */}
              </button>
              <button style={{ fontSize: "2rem" }}>
                <FaVolumeMute />
              </button>
              <button style={{ fontSize: "2rem" }}>
                <FaVolumeDown />
              </button>
              <button style={{ fontSize: "2rem" }}>
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
                    id="angular-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={angul} className="emoji-2" alt="calendar" />
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
                    Node.js
                  </span>
                  <span
                    className="emoji-container"
                    id="js-container"
                    style={{
                      display: "flex",

                      marginBottom: "1rem",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <img src={js} className="emoji-2" alt="calendar" />
                    Javascript
                  </span>
                  <span
                    className="emoji-container"
                    id="mysql-container"
                    style={{
                      display: "flex",

                      marginBottom: "1rem",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <img src={mysql} className="emoji-2" alt="calendar" />
                    MySQL
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
                    $110,000
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
                    $150,000
                  </h3>
                </span>
                <span
                  className="emoji-container"
                  style={{ width: "90%", marginBottom: "1rem" }}
                >
                  independent contractor
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
                2 yrs
              </h2>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                  textAlign: "left",
                }}
              >
                Open Source Maintainer: Actively contributed to the open-source
                npm package muhammara.js and currently maintains ******** fork.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                  textAlign: "left",
                }}
              >
                Ensured ongoing updates and enhancements to improve package
                functionality and reliability. Full-Stack Expertise and Feature
                Development: Applied skills across the full stack, including
                C++, Python, Golang, and TypeScript.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "2rem",
                  textAlign: "left",
                }}
              >
                Implemented rich features such as Angular drag and drop, virtual
                scrolling, and reusable React components. Developed innovative
                features like drawing lines on PDFs using the Open Layers API
                and integrated webforms through Jotforms API. Infrastructure
                Management and Technology Upgrades: Managed environment setup
                for new clients using AWS EKS, performed builds with Jenkins,
                and orchestrated Docker containers with Kubernetes (K8s).
                Upgraded AWS Lambda functions to Node18 runtime, addressing
                dependencies and modifying calls to deprecated APIs.
                Successfully upgraded the app&apos;s frontend to Angular 16 and
                the backend to Node 18, staying abreast of the latest
                technologies.
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
                Accountant
              </h1>
              <h2
                className="h2"
                style={{
                  marginBottom: "1rem",
                  textAlign: "left",
                }}
              >
                2 yrs & 4 mos
              </h2>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                  textAlign: "left",
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
                  textAlign: "left",
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
                  marginBottom: "2rem",
                  textAlign: "left",
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
              style={{ alignItems: "flex-start" }}
            >
              <h1
                className="h1-sub"
                style={{
                  textAlign: "left",
                }}
              >
                Software Engineer Intern
              </h1>
              <h2
                className="h2"
                style={{
                  marginBottom: "1rem",
                  textAlign: "left",
                }}
              >
                9 mos
              </h2>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                  textAlign: "left",
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
                  textAlign: "left",
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
                  marginBottom: "2rem",
                  textAlign: "left",
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
    </div>
  );
}
