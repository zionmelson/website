import { useState } from "react";
import {
  FaPause,
  FaPlay,
  FaVolumeUp,
  FaVolumeDown,
  FaVolumeMute,
} from "react-icons/fa";

import savage from "../../assets/mp3/savage.mp3";
import calen from "../../assets/svg/calen.svg";

import Lottie from "lottie-react";
import voice from "../../assets/json/voice.json";

import flutter from "../../assets/svg/flutter.svg";
import react from "../../assets/svg/react.svg";
import django from "../../assets/svg/django.svg";
import python from "../../assets/svg/python.svg";
import rust from "../../assets/svg/rust.svg";
import kotlin from "../../assets/svg/kotlin.svg";
import go from "../../assets/svg/go.svg";
import kubernetes from "../../assets/svg/kubernetes.svg";
import typescript from "../../assets/svg/typescript.svg";
import gcp from "../../assets/svg/gcp.svg";
import java from "../../assets/svg/java.svg";
import ruby from "../../assets/svg/ruby.svg";
import linux from "../../assets/svg/linux.svg";

export default function Savage() {
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
                <h1 className="h1">Clark Savage</h1>
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
                <source src={savage} type="audio/mpeg" />
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
                  id="csuite"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                    width: "100%",
                  }}
                >
                  c-suite developer
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
                    id="flutter-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={flutter} className="emoji-2" alt="calendar" />
                    Flutter
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
                    id="kotlin-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={kotlin} className="emoji-2" alt="calendar" />
                    Kotlin
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
                    id="gcp-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={gcp} className="emoji-2" alt="calendar" />
                    GCP
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
                    id="ruby-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={ruby} className="emoji-2" alt="calendar" />
                    Ruby
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
                    10+ years of experience
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
                  <h4 className="h4">located: seattle, wa</h4>
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
              <h1 className="h1-sub">Founding Engineer</h1>
              <h2 className="h2">1 yr 8 mos</h2>

              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Strategic Consulting: Established a distinguished software
                consulting firm, specializing in custom development, IT
                outsourcing, staff augmentation, and support.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Technology Focus: Led a skilled team in Rust and Golang,
                developing Android and iOS apps for fintech, healthcare, and
                robotic manufacturing.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Technical Proficiency: Expertise in Linux, Software
                Architecture, Kotlin, Go, and Kubernetes for cutting-edge and
                scalable solutions.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Client-Centric Values: Committed to craftsmanship, efficiency,
                and good architecture, ensuring tailored solutions and client
                satisfaction.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Collaborative Excellence: Excelled in diverse industry
                collaboration, distinguishing the firm in a competitive market.
                Embarked on transformative journeys, making a remarkable
                difference for businesses.
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
              <h1 className="h1-sub">Senior Full-stack Developer</h1>
              <h2 className="h2">6 mos</h2>

              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Git Practices Expertise: In-depth experience teaching and
                implementing proper Git practices for both development and
                production environments within team settings.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Flutter Mobile Development: Successfully implemented new
                features in Flutter for mobile applications, contributing to the
                enhancement of user experiences.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Golang Microservices on GCP: Led the implementation of new
                features in Golang for microservices, deployed on the Google
                Cloud Platform (GCP), showcasing proficiency in modern
                technologies.
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
              <h1 className="h1-sub">Senior Software Engineer</h1>
              <h2 className="h2">1 yr</h2>

              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Chaos Engineering Platform: Solely developed and implemented new
                features for a chaos engineering software platform on a virtual
                testing cellular infrastructure at AT&T Labs.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Packet Testing Automation: Introduced a new feature to automate
                testing of cellular infrastructure, focusing on packet delay and
                loss, utilizing a Python backend to execute 70 cases across
                multiple virtual network functions.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Modernization and Deployment: Successfully converted legacy code
                to run on Docker containers, adopting Kubernetes as the
                deployment model, and deploying applications on newly
                provisioned servers.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                CI/CD Implementation and Refactoring: Implemented a robust CI/CD
                pipeline, adhering to documentation standards, agile practices,
                and conducted massive refactoring of legacy code.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Milestone Planning and Architecture Design: Led milestone
                planning and played a key role in designing the new architecture
                for the chaos engineering platform.
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
            Clark Savage
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
              <source src={savage} type="audio/mpeg" />
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
                  id="csuite"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                    width: "100%",
                  }}
                >
                  c-suite developer
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
                    id="flutter-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={flutter} className="emoji-2" alt="calendar" />
                    Flutter
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
                    id="kotlin-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={kotlin} className="emoji-2" alt="calendar" />
                    Kotlin
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
                    id="gcp-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={gcp} className="emoji-2" alt="calendar" />
                    GCP
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
                    id="ruby-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={ruby} className="emoji-2" alt="calendar" />
                    Ruby
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
                    10+ years of experience
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
                  <h4 className="h4">located: seattle, wa</h4>
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
                <h1 className="h1-sub">Founding Engineer</h1>
                <h2 className="h2">1 yr 8 mos</h2>

                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Strategic Consulting: Established a distinguished software
                  consulting firm, specializing in custom development, IT
                  outsourcing, staff augmentation, and support.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Technology Focus: Led a skilled team in Rust and Golang,
                  developing Android and iOS apps for fintech, healthcare, and
                  robotic manufacturing.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Technical Proficiency: Expertise in Linux, Software
                  Architecture, Kotlin, Go, and Kubernetes for cutting-edge and
                  scalable solutions.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Client-Centric Values: Committed to craftsmanship, efficiency,
                  and good architecture, ensuring tailored solutions and client
                  satisfaction.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Collaborative Excellence: Excelled in diverse industry
                  collaboration, distinguishing the firm in a competitive
                  market. Embarked on transformative journeys, making a
                  remarkable difference for businesses.
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
                <h1 className="h1-sub">Senior Full-stack Developer</h1>
                <h2 className="h2">6 mos</h2>

                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Git Practices Expertise: In-depth experience teaching and
                  implementing proper Git practices for both development and
                  production environments within team settings.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Flutter Mobile Development: Successfully implemented new
                  features in Flutter for mobile applications, contributing to
                  the enhancement of user experiences.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Golang Microservices on GCP: Led the implementation of new
                  features in Golang for microservices, deployed on the Google
                  Cloud Platform (GCP), showcasing proficiency in modern
                  technologies.
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
                <h1 className="h1-sub">Senior Software Engineer</h1>
                <h2 className="h2">1 yr</h2>

                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Chaos Engineering Platform: Solely developed and implemented
                  new features for a chaos engineering software platform on a
                  virtual testing cellular infrastructure at AT&T Labs.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Packet Testing Automation: Introduced a new feature to
                  automate testing of cellular infrastructure, focusing on
                  packet delay and loss, utilizing a Python backend to execute
                  70 cases across multiple virtual network functions.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Modernization and Deployment: Successfully converted legacy
                  code to run on Docker containers, adopting Kubernetes as the
                  deployment model, and deploying applications on newly
                  provisioned servers.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  CI/CD Implementation and Refactoring: Implemented a robust
                  CI/CD pipeline, adhering to documentation standards, agile
                  practices, and conducted massive refactoring of legacy code.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Milestone Planning and Architecture Design: Led milestone
                  planning and played a key role in designing the new
                  architecture for the chaos engineering platform.
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
