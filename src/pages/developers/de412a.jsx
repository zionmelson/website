import { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

import free from "../../assets/mp3/free.mp3";
import calen from "../../assets/svg/calen.svg";

import Lottie from "lottie-react";
import voice from "../../assets/json/voice.json";

import rust from "../../assets/svg/rust.svg";
import cpp from "../../assets/svg/cpp.svg";
import swift from "../../assets/svg/swift.svg";
import java from "../../assets/svg/java.svg";
import kubernetes from "../../assets/svg/kubernetes.svg";
import docker from "../../assets/svg/docker.svg";

export default function Free() {
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
                  Scott Free{" "}
                </h1>
              </div>
              <Lottie animationData={voice} />
              <audio
                ref={(el) => setVideoElement(el)}
                style={{ marginBottom: "0.5rem" }}
              >
                <source src={free} type="audio/mpeg" />
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
                  border: "3px solid #fff",
                  borderRadius: "1rem",
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
                    id="swift-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={swift} className="emoji-2" alt="calendar" />
                    Swift
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
                    id="docker-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={docker} className="emoji-2" alt="calendar" />
                    Docker
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
                    8+ years of experience
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
                  border: "3px solid #fff",
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
                  <h4 className="h4">minimum salary: $100,000</h4>
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
                  <h4 className="h4">located: utah</h4>
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
                <h1 className="h1-sub">Fullstack Consultant</h1>
                <h2 className="h2">7 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 1 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">Project Leadership:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Led the development efforts for an innovative tabletop RPG
                    game, utilizing React for the frontend and Ruby on Rails for
                    the backend, with future plans to incorporate Rust for
                    enhanced performance.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Scalable Database Design:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Designed and implemented a scalable database schema for
                    character and item traits, optimizing data management and
                    supporting over 100 in-game actions.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Game Design and Testing:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Played a crucial role in prototyping and playtesting,
                    refining game mechanics to ensure an engaging user
                    experience. Contributed significantly to the project&apos;s
                    success through strategic decision-making and the
                    application of technical expertise.
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
                <h1 className="h1-sub">Rust Developer</h1>
                <h2 className="h2">1 yr</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 2 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">WireGuard Solution Development:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Spearheaded the inception and development of a highly secure
                    WireGuard-based enterprise remote access solution using
                    Rust, contributing as one of the pioneering team members.
                    This innovative solution aimed to provide robust and
                    reliable remote access capabilities, addressing contemporary
                    enterprise needs for secure communication.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    Migration to Rust for Enhanced Performance:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Undertook a leadership role in migrating essential core
                    functionalities from Python to Rust. This strategic move
                    resulted in a substantial enhancement in overall system
                    performance and reliability, laying the foundation for a
                    more efficient and scalable solution.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    Automated Testing, CI/CD Implementation, and Technical
                    Collaboration:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Pioneered the implementation of comprehensive automated
                    testing protocols, covering scenarios such as network
                    crashes, system restarts, and adversarial conditions. This
                    initiative ensured the robustness of the solution in
                    real-world deployment. Additionally, designed and
                    implemented CI/CD processes from scratch, expediting
                    software delivery. Led the creation of deployment pipelines
                    for diverse operating systems. Leveraged Conflict-free
                    Replicated Data Types (CRDTs) to manage multiple private
                    connections simultaneously, contributing to an enriched user
                    experience. Collaborated closely with the team to overcome
                    intricate technical challenges, fostering the project&apos;s
                    overall success and rapid growth.
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
                <h1 className="h1-sub">Full-Stack Developer</h1>
                <h2 className="h2">1 yr & 6 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 3 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">
                    Vue.js and Node.js Application Development:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Took charge of the development and maintenance of
                    applications using Vue.js for the frontend and Node.js for
                    the backend, coupled with MongoDB Atlas as the database.
                    Demonstrated proficiency in leveraging these technologies to
                    create robust and scalable software solutions.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    Startup Experience and Legacy Code Refactoring:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Applied valuable insights gained from startup experience to
                    conduct a thorough analysis of trade-offs. Executed
                    proficient refactoring of legacy code, enhancing its
                    efficiency and maintainability. Played a pivotal role in
                    modernizing the codebase for long-term sustainability.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    Leadership in Testing and Cross-functional Collaboration:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Assumed a leadership role in implementing comprehensive unit
                    tests for both front-end and back-end components. Achieved a
                    remarkable increase in test coverage from 0% to 40%,
                    ensuring the reliability and quality of the software.
                    Collaborated seamlessly with cross-functional teams to
                    deliver high-quality software solutions, aligning with
                    project objectives and timelines.
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
            Scott Free
          </h1>
          <div className="horizontal-content">
            <Lottie animationData={voice} />
            <audio
              ref={(el) => setVideoElement(el)}
              style={{ marginBottom: "0.5rem" }}
            >
              <source src={free} type="audio/mpeg" />
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
                  border: "3px solid #fff",
                  borderRadius: "1rem",
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
                    id="swift-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={swift} className="emoji-2" alt="calendar" />
                    Swift
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
                    id="docker-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={docker} className="emoji-2" alt="calendar" />
                    Docker
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
                    8+ years of experience
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
                  border: "3px solid #fff",
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
                  <h4 className="h4">minimum salary: $100,000</h4>
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
                  <h4 className="h4">located: utah</h4>
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
                <h1 className="h1-sub">Fullstack Consultant</h1>
                <h2 className="h2">7 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 1 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">Project Leadership:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Led the development efforts for an innovative tabletop RPG
                    game, utilizing React for the frontend and Ruby on Rails for
                    the backend, with future plans to incorporate Rust for
                    enhanced performance.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Scalable Database Design:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Designed and implemented a scalable database schema for
                    character and item traits, optimizing data management and
                    supporting over 100 in-game actions.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Game Design and Testing:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Played a crucial role in prototyping and playtesting,
                    refining game mechanics to ensure an engaging user
                    experience. Contributed significantly to the project&apos;s
                    success through strategic decision-making and the
                    application of technical expertise.
                  </h3>
                </div>
              </div>
              <div className="job-content" onClick={() => setActiveJob(2)}>
                <h1 className="h1-sub">Rust Developer</h1>
                <h2 className="h2">1 yr</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 2 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">WireGuard Solution Development:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Spearheaded the inception and development of a highly secure
                    WireGuard-based enterprise remote access solution using
                    Rust, contributing as one of the pioneering team members.
                    This innovative solution aimed to provide robust and
                    reliable remote access capabilities, addressing contemporary
                    enterprise needs for secure communication.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    Migration to Rust for Enhanced Performance:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Undertook a leadership role in migrating essential core
                    functionalities from Python to Rust. This strategic move
                    resulted in a substantial enhancement in overall system
                    performance and reliability, laying the foundation for a
                    more efficient and scalable solution.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    Automated Testing, CI/CD Implementation, and Technical
                    Collaboration:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Pioneered the implementation of comprehensive automated
                    testing protocols, covering scenarios such as network
                    crashes, system restarts, and adversarial conditions. This
                    initiative ensured the robustness of the solution in
                    real-world deployment. Additionally, designed and
                    implemented CI/CD processes from scratch, expediting
                    software delivery. Led the creation of deployment pipelines
                    for diverse operating systems. Leveraged Conflict-free
                    Replicated Data Types (CRDTs) to manage multiple private
                    connections simultaneously, contributing to an enriched user
                    experience. Collaborated closely with the team to overcome
                    intricate technical challenges, fostering the project&apos;s
                    overall success and rapid growth.
                  </h3>
                </div>
              </div>
              <div className="job-content" onClick={() => setActiveJob(3)}>
                <h1 className="h1-sub">Full-Stack Developer</h1>
                <h2 className="h2">1 yr & 6 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 3 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">
                    Vue.js and Node.js Application Development:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Took charge of the development and maintenance of
                    applications using Vue.js for the frontend and Node.js for
                    the backend, coupled with MongoDB Atlas as the database.
                    Demonstrated proficiency in leveraging these technologies to
                    create robust and scalable software solutions.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    Startup Experience and Legacy Code Refactoring:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Applied valuable insights gained from startup experience to
                    conduct a thorough analysis of trade-offs. Executed
                    proficient refactoring of legacy code, enhancing its
                    efficiency and maintainability. Played a pivotal role in
                    modernizing the codebase for long-term sustainability.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    Leadership in Testing and Cross-functional Collaboration:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Assumed a leadership role in implementing comprehensive unit
                    tests for both front-end and back-end components. Achieved a
                    remarkable increase in test coverage from 0% to 40%,
                    ensuring the reliability and quality of the software.
                    Collaborated seamlessly with cross-functional teams to
                    deliver high-quality software solutions, aligning with
                    project objectives and timelines.
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
