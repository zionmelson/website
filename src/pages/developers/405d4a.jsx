import { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

import mason from "../../assets/mp3/mason.mp3";
import calen from "../../assets/svg/calen.svg";

import Lottie from "lottie-react";
import voice from "../../assets/json/voice.json";

import rust from "../../assets/svg/rust.svg";
import typescript from "../../assets/svg/typescript.svg";
import javascript from "../../assets/svg/javascript.svg";
import cpp from "../../assets/svg/cpp.svg";
import solidity from "../../assets/svg/solidity.svg";

export default function Mason() {
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
                  Rex Mason{" "}
                </h1>
              </div>
              <Lottie animationData={voice} />
              <audio
                ref={(el) => setVideoElement(el)}
                style={{ marginBottom: "0.5rem" }}
              >
                <source src={mason} type="audio/mpeg" />
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
                    id="solidity-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={solidity} className="emoji-2" alt="calendar" />
                    Solidity
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
                  <h4 className="h4">minimum salary: $120,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">maxmimum salary: $140,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">located: district of columbia, md</h4>
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
                <h1 className="h1-sub">Software Developer</h1>
                <h2 className="h2">3 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 1 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">
                    Aleph Zero Substrate Chains Integration:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Successfully integrated Aleph Zero Substrate Chains domain
                    name resolution for all instances of ss58 Addresses on the
                    Talisman web application. This integration enhanced the
                    functionality and usability of the application, providing
                    users with streamlined and efficient address resolution.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">UI Enhancements and API Optimization:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Played a key role in updating the application&apos;s user
                    interface (UI), implementing significant optimizations for
                    API retrieval. These improvements contributed to an enhanced
                    user experience, ensuring a more responsive and efficient
                    interaction with the Talisman web application.
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
                <h1 className="h1-sub">Software Developer</h1>
                <h2 className="h2">6 months</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 2 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">Express Server with GraphQL API:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Successfully implemented an Express server featuring a
                    GraphQL API, showcasing proficiency in backend development
                    with a focus on GraphQL for efficient data querying.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    Docker Containerized PostgreSQL Database:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Orchestrated the creation of a containerized PostgreSQL
                    database within a Docker environment. This approach ensures
                    a scalable and portable database setup, demonstrating
                    expertise in containerization practices.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">GraphQL Resolvers for Analytic Data:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Designed and implemented GraphQL resolvers specifically
                    tailored for PostgreSQL SQL queries, with a focus on
                    handling analytic data. This contribution highlights a
                    strong understanding of GraphQL data resolution and
                    integration with a relational database for analytical
                    purposes.
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
                <h1 className="h1-sub">Solidity Front-End Developer</h1>
                <h2 className="h2">6 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 3 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">
                    Vaults and Uniswap-Style Pool Implementation:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Successfully implemented vaults and a Uniswap-style pool
                    mechanism as collateral, showcasing proficiency in
                    decentralized finance (DeFi) concepts and protocols.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Creation of NFTs for Access:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Innovatively designed and implemented NFTs (Non-Fungible
                    Tokens) to control access to claim payouts, demonstrating
                    expertise in blockchain technology and tokenization.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    Feature Integration and Bug Resolution in Typescript React
                    Frontend:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Actively contributed to the development by integrating new
                    features and resolving bug fixes within the Typescript React
                    frontend, showcasing proficiency in frontend technologies
                    and problem-solving.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Figma Wireframing for Mobile UX:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Played a crucial role in the design process by creating
                    Figma wireframes for mobile user experience (UX),
                    emphasizing a user-centric approach and contributing to the
                    overall design and usability of the application.
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
            Rex Mason
          </h1>
          <div className="horizontal-content">
            <Lottie animationData={voice} />
            <audio
              ref={(el) => setVideoElement(el)}
              style={{ marginBottom: "0.5rem" }}
            >
              <source src={mason} type="audio/mpeg" />
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
                    id="solidity-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={solidity} className="emoji-2" alt="calendar" />
                    Solidity
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
                  <h4 className="h4">minimum salary: $120,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">maximum salary: $140,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">located: district of columbia, md</h4>
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
                <h1 className="h1-sub">Software Developer</h1>
                <h2 className="h2">3 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 1 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">
                    Aleph Zero Substrate Chains Integration:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Successfully integrated Aleph Zero Substrate Chains domain
                    name resolution for all instances of ss58 Addresses on the
                    Talisman web application. This integration enhanced the
                    functionality and usability of the application, providing
                    users with streamlined and efficient address resolution.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">UI Enhancements and API Optimization:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Played a key role in updating the application&apos;s user
                    interface (UI), implementing significant optimizations for
                    API retrieval. These improvements contributed to an enhanced
                    user experience, ensuring a more responsive and efficient
                    interaction with the Talisman web application.
                  </h3>
                </div>
              </div>
              <div className="job-content" onClick={() => setActiveJob(2)}>
                <h1 className="h1-sub">Software Developer</h1>
                <h2 className="h2">6 months</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 2 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">Express Server with GraphQL API:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Successfully implemented an Express server featuring a
                    GraphQL API, showcasing proficiency in backend development
                    with a focus on GraphQL for efficient data querying.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    Docker Containerized PostgreSQL Database:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Orchestrated the creation of a containerized PostgreSQL
                    database within a Docker environment. This approach ensures
                    a scalable and portable database setup, demonstrating
                    expertise in containerization practices.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">GraphQL Resolvers for Analytic Data:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Designed and implemented GraphQL resolvers specifically
                    tailored for PostgreSQL SQL queries, with a focus on
                    handling analytic data. This contribution highlights a
                    strong understanding of GraphQL data resolution and
                    integration with a relational database for analytical
                    purposes.
                  </h3>
                </div>
              </div>
              <div className="job-content" onClick={() => setActiveJob(3)}>
                <h1 className="h1-sub">Solidity Front-End Developer</h1>
                <h2 className="h2">6 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 3 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">
                    Vaults and Uniswap-Style Pool Implementation:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Successfully implemented vaults and a Uniswap-style pool
                    mechanism as collateral, showcasing proficiency in
                    decentralized finance (DeFi) concepts and protocols.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Creation of NFTs for Access:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Innovatively designed and implemented NFTs (Non-Fungible
                    Tokens) to control access to claim payouts, demonstrating
                    expertise in blockchain technology and tokenization.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    Feature Integration and Bug Resolution in Typescript React
                    Frontend:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Actively contributed to the development by integrating new
                    features and resolving bug fixes within the Typescript React
                    frontend, showcasing proficiency in frontend technologies
                    and problem-solving.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Figma Wireframing for Mobile UX:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Played a crucial role in the design process by creating
                    Figma wireframes for mobile user experience (UX),
                    emphasizing a user-centric approach and contributing to the
                    overall design and usability of the application.
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
