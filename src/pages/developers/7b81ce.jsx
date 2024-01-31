import { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

import javert from "../../assets/mp3/javert.mp3";
import calen from "../../assets/svg/calen.svg";

import Lottie from "lottie-react";
import voice from "../../assets/json/voice.json";

import python from "../../assets/svg/python.svg";
import cpp from "../../assets/svg/cpp.svg";
import javascript from "../../assets/svg/javascript.svg";
import react from "../../assets/svg/react.svg";
import postgres from "../../assets/svg/postgres.svg";
import docker from "../../assets/svg/docker.svg";
import linux from "../../assets/svg/linux.svg";
import typescript from "../../assets/svg/typescript.svg";
import node from "../../assets/svg/node.svg";
import kubernetes from "../../assets/svg/kubernetes.svg";
import c from "../../assets/svg/c.svg";
import go from "../../assets/svg/go.svg";
import redux from "../../assets/svg/redux.svg";
import ruby from "../../assets/svg/ruby.svg";

export default function Javert() {
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
                  Phillip Javert{" "}
                </h1>
              </div>
              <Lottie animationData={voice} />
              <audio
                ref={(el) => setVideoElement(el)}
                style={{ marginBottom: "0.5rem" }}
              >
                <source src={javert} type="audio/mpeg" />
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
                    id="c-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={c} className="emoji-2" alt="calendar" />C
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
                    id="redux-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={redux} className="emoji-2" alt="calendar" />
                    Redux
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
                  <h4 className="h4">minimum salary: $90,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">maxmimum salary: $100,000</h4>
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
                width: "100%",
                alignItems: "flex-start",
                textAlign: "left",
                marginBottom: "2rem",
              }}
            >
              <div className="job-content" onClick={() => setActiveJob(1)}>
                <h1 className="h1-sub">Senior Software Engineer</h1>
                <h2 className="h2">2 yrs & 7 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 1 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">Public Cloud Expertise:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Specialized in Public Cloud technologies, demonstrating
                    proficiency in leveraging cloud services for scalable and
                    efficient software solutions. Applied extensive knowledge in
                    cloud architecture and deployment strategies to enhance
                    system performance.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Linux System Administration:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Possessed advanced skills in Linux system administration,
                    ensuring the seamless operation and optimization of software
                    systems. Applied best practices in Linux environments to
                    maintain robust and secure systems.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    Agile Software Development and Programming Languages:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Applied Agile methodologies in software development,
                    contributing to a collaborative and iterative development
                    process. Exhibited expertise in React.js for front-end
                    development and utilized Python and C++ for building robust
                    and scalable software solutions.
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
                <h1 className="h1-sub">Software Engineer</h1>
                <h2 className="h2">1 yr & 9 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 2 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">Team Collaboration and Development:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Served as an individual contributor in a 15 member
                    development team, actively addressing bugs and implementing
                    new features across 30+ backend microservices. Worked
                    closely with product management and support teams to enhance
                    software functionality and resolve issues.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    Customer-Centric Support and SLA Management:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Acted as the primary support resource for 5 high-priority
                    accounts, collaborating across support, account management,
                    and engineering teams to drive customer issue resolution.
                    Routinely managed SLAs for over 100 different issues,
                    ensuring timely and effective solutions for enterprise
                    contact center software customers.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Recognition and Technical Expertise:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Recognized as Employee of the Month for outstanding
                    contributions, reflecting a commitment to excellence.
                    Demonstrated technical proficiency in a range of skills
                    including Computer Science, Linux System Administration,
                    Agile Software Development, Docker, Jenkins, Test-Driven
                    Development, DevOps, Node.js, Linux, C, Agile Methodologies,
                    Testing, Go, Python, and React.
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
                <h2 className="h2">5 months</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 3 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">Intensive Training and Specialization:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Successfully completed a 15-week intensive Full Stack
                    Developer training course, gaining in-depth knowledge and
                    practical skills. Specialized in software architecture,
                    focusing on React, Redux, and Ruby on Rails technologies.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Comprehensive Full Stack Expertise:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Developed a strong foundation in both front-end and back-end
                    development, incorporating React for dynamic user interfaces
                    and Ruby on Rails for robust server-side applications.
                    Applied Redux for state management, enhancing the overall
                    architecture of web applications.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Problem-Solving and Innovation:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Acquired problem-solving skills and the ability to architect
                    innovative solutions, demonstrating a commitment to
                    continuous learning and development within the dynamic field
                    of Full Stack Development.
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
            Phillip Javert
          </h1>
          <div className="horizontal-content">
            <Lottie animationData={voice} />
            <audio
              ref={(el) => setVideoElement(el)}
              style={{ marginBottom: "0.5rem" }}
            >
              <source src={javert} type="audio/mpeg" />
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
                    id="c-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={c} className="emoji-2" alt="calendar" />C
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
                    id="redux-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={redux} className="emoji-2" alt="calendar" />
                    Redux
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
                  <h4 className="h4">minimum salary: $90,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">maximum salary: $100,000</h4>
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
              <div className="job-content" onClick={() => setActiveJob(1)}>
                <h1 className="h1-sub">Senior Software Engineer</h1>
                <h2 className="h2">2 yrs & 7 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 1 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">Public Cloud Expertise:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Specialized in Public Cloud technologies, demonstrating
                    proficiency in leveraging cloud services for scalable and
                    efficient software solutions. Applied extensive knowledge in
                    cloud architecture and deployment strategies to enhance
                    system performance.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Linux System Administration:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Possessed advanced skills in Linux system administration,
                    ensuring the seamless operation and optimization of software
                    systems. Applied best practices in Linux environments to
                    maintain robust and secure systems.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    Agile Software Development and Programming Languages:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Applied Agile methodologies in software development,
                    contributing to a collaborative and iterative development
                    process. Exhibited expertise in React.js for front-end
                    development and utilized Python and C++ for building robust
                    and scalable software solutions.
                  </h3>
                </div>
              </div>
              <div className="job-content" onClick={() => setActiveJob(2)}>
                <h1 className="h1-sub">Software Engineer</h1>
                <h2 className="h2">1 yr & 9 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 2 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">Team Collaboration and Development:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Served as an individual contributor in a 15 member
                    development team, actively addressing bugs and implementing
                    new features across 30+ backend microservices. Worked
                    closely with product management and support teams to enhance
                    software functionality and resolve issues.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    Customer-Centric Support and SLA Management:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Acted as the primary support resource for 5 high-priority
                    accounts, collaborating across support, account management,
                    and engineering teams to drive customer issue resolution.
                    Routinely managed SLAs for over 100 different issues,
                    ensuring timely and effective solutions for enterprise
                    contact center software customers.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Recognition and Technical Expertise:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Recognized as Employee of the Month for outstanding
                    contributions, reflecting a commitment to excellence.
                    Demonstrated technical proficiency in a range of skills
                    including Computer Science, Linux System Administration,
                    Agile Software Development, Docker, Jenkins, Test-Driven
                    Development, DevOps, Node.js, Linux, C, Agile Methodologies,
                    Testing, Go, Python, and React.
                  </h3>
                </div>
              </div>
              <div className="job-content" onClick={() => setActiveJob(3)}>
                <h1 className="h1-sub">Full-Stack Developer</h1>
                <h2 className="h2">5 months</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 3 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">Intensive Training and Specialization:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Successfully completed a 15-week intensive Full Stack
                    Developer training course, gaining in-depth knowledge and
                    practical skills. Specialized in software architecture,
                    focusing on React, Redux, and Ruby on Rails technologies.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Comprehensive Full Stack Expertise:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Developed a strong foundation in both front-end and back-end
                    development, incorporating React for dynamic user interfaces
                    and Ruby on Rails for robust server-side applications.
                    Applied Redux for state management, enhancing the overall
                    architecture of web applications.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Problem-Solving and Innovation:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Acquired problem-solving skills and the ability to architect
                    innovative solutions, demonstrating a commitment to
                    continuous learning and development within the dynamic field
                    of Full Stack Development.
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
