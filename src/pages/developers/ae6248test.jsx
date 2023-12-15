import { useState } from "react";
import {
  FaPause,
  FaPlay,
  FaVolumeUp,
  FaVolumeDown,
  FaVolumeMute,
} from "react-icons/fa";

import banner from "../../assets/mp3/banner.mp3";
import calen from "../../assets/svg/calen.svg";

import Lottie from "lottie-react";
import voice from "../../assets/json/voice.json";

import python from "../../assets/svg/python.svg";
import go from "../../assets/svg/go.svg";
import rust from "../../assets/svg/rust.svg";
import docker from "../../assets/svg/docker.svg";
import html from "../../assets/svg/html.svg";
import css from "../../assets/svg/css.svg";

export default function Banner() {
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
                <h1 className="h1">Robert Banner</h1>
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
                <source src={banner} type="audio/mpeg" />
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
                    id="html-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={html} className="emoji-2" alt="calendar" />
                    HTML
                  </span>

                  <span
                    className="emoji-container"
                    id="css-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={css} className="emoji-2" alt="calendar" />
                    CSS
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
                  <h4 className="h4">minimum salary: $150,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">maxmimum salary: $180,000</h4>
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
              <h1 className="h1-sub">Python Developer</h1>
              <h2 className="h2">3 yrs 6 mos</h2>

              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Continuous Integration Expertise: Designed and implemented a
                robust continuous integration pipeline, ensuring efficient and
                seamless integration of code changes. Streamlined development
                workflows and contributed to a more agile development process.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Coding Standards Leadership: Developed comprehensive team coding
                standards and implemented automated enforcement mechanisms.
                Fostered a consistent and high-quality codebase, enhancing
                collaboration and code maintainability across the team.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Strategic Refactoring for Performance Gains: Led a significant
                refactoring effort resulting in a remarkable 30-minute reduction
                in runtimes. Simultaneously, achieved a 100 percentage point
                increase in effective test coverage, improving code reliability
                and overall system stability. Demonstrated a commitment to
                optimizing codebase efficiency and promoting best practices
                within the development team.
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
              <h2 className="h2">3 yrs 7 mos</h2>

              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Pipeline Migration and Optimization: Successfully migrated the
                call analysis pipeline to UUID, resolving critical call
                collision issues experienced by major customers. Led the
                migration from Redis to a custom company messaging system,
                enhancing system efficiency and adaptability.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Performance Metrics Implementation: Pioneered the development of
                the first metrics suite, offering insights into call analysis
                timing and facilitating data-driven decision-making. Rewrote a
                helper service in Python 3 with comprehensive test coverage,
                emphasizing code reliability and quality.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Code Infrastructure Enhancement: Streamlined code organization
                by moving company database helper functions to a standalone
                repository, ensuring Python 3 compatibility. Contributed to
                enhanced code reusability and maintainability across projects
                while adhering to the latest Python standards.
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
              <h1 className="h1-sub">Software Development Intern</h1>
              <h2 className="h2">4 mos</h2>

              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Secure Protocol Design: During a software engineering
                internship, innovatively designed a secure protocol for
                next-generation, mobile-focused access control. Demonstrated
                expertise in crafting robust solutions to address security
                challenges, ensuring the integrity and confidentiality of access
                control systems.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Reference Protocol Implementation: Created a reference protocol
                implementation as part of the internship, providing a tangible
                foundation for further development and implementation. Showcased
                practical coding skills and the ability to translate design
                concepts into functional and efficient software solutions.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                Technical Innovation and Collaboration: Actively contributed to
                technical innovation by engaging in the development of
                cutting-edge access control solutions. Collaborated with the
                team to implement and refine the designed secure protocol,
                demonstrating a commitment to hands-on learning and contributing
                to the project&apos;s success.
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
            Robert Banner
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
              <source src={banner} type="audio/mpeg" />
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
                    id="html-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={html} className="emoji-2" alt="calendar" />
                    HTML
                  </span>

                  <span
                    className="emoji-container"
                    id="css-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={css} className="emoji-2" alt="calendar" />
                    CSS
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
                  <h4 className="h4">minimum salary: $150,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">maximum salary: $180,000</h4>
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
                <h1 className="h1-sub">Python Developer</h1>
                <h2 className="h2">3 yrs 6 mos</h2>

                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Continuous Integration Expertise: Designed and implemented a
                  robust continuous integration pipeline, ensuring efficient and
                  seamless integration of code changes. Streamlined development
                  workflows and contributed to a more agile development process.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Coding Standards Leadership: Developed comprehensive team
                  coding standards and implemented automated enforcement
                  mechanisms. Fostered a consistent and high-quality codebase,
                  enhancing collaboration and code maintainability across the
                  team.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Strategic Refactoring for Performance Gains: Led a significant
                  refactoring effort resulting in a remarkable 30-minute
                  reduction in runtimes. Simultaneously, achieved a 100
                  percentage point increase in effective test coverage,
                  improving code reliability and overall system stability.
                  Demonstrated a commitment to optimizing codebase efficiency
                  and promoting best practices within the development team.
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
                <h2 className="h2">3 yrs 7 mos</h2>

                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Pipeline Migration and Optimization: Successfully migrated the
                  call analysis pipeline to UUID, resolving critical call
                  collision issues experienced by major customers. Led the
                  migration from Redis to a custom company messaging system,
                  enhancing system efficiency and adaptability.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Performance Metrics Implementation: Pioneered the development
                  of the first metrics suite, offering insights into call
                  analysis timing and facilitating data-driven decision-making.
                  Rewrote a helper service in Python 3 with comprehensive test
                  coverage, emphasizing code reliability and quality.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Code Infrastructure Enhancement: Streamlined code organization
                  by moving company database helper functions to a standalone
                  repository, ensuring Python 3 compatibility. Contributed to
                  enhanced code reusability and maintainability across projects
                  while adhering to the latest Python standards.
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
                <h1 className="h1-sub">Software Development Intern</h1>
                <h2 className="h2">4 mos</h2>

                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Secure Protocol Design: During a software engineering
                  internship, innovatively designed a secure protocol for
                  next-generation, mobile-focused access control. Demonstrated
                  expertise in crafting robust solutions to address security
                  challenges, ensuring the integrity and confidentiality of
                  access control systems.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Reference Protocol Implementation: Created a reference
                  protocol implementation as part of the internship, providing a
                  tangible foundation for further development and
                  implementation. Showcased practical coding skills and the
                  ability to translate design concepts into functional and
                  efficient software solutions.
                </h3>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Technical Innovation and Collaboration: Actively contributed
                  to technical innovation by engaging in the development of
                  cutting-edge access control solutions. Collaborated with the
                  team to implement and refine the designed secure protocol,
                  demonstrating a commitment to hands-on learning and
                  contributing to the project&apos;s success.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
