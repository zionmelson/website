import { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

import calen from "../../assets/svg/calen.svg";

import python from "../../assets/svg/python.svg";
import rust from "../../assets/svg/rust.svg";
import javascript from "../../assets/svg/javascript.svg";
import linux from "../../assets/svg/linux.svg";
import aws from "../../assets/svg/aws.svg";
import gcp from "../../assets/svg/gcp.svg";
import terraform from "../../assets/svg/terraform.svg";
import docker from "../../assets/svg/docker.svg";
import kubernetes from "../../assets/svg/kubernetes.svg";

import linkedIn from "../../assets/svg/link.svg";
import github from "../../assets/svg/git.svg";
import onscale from "../../assets/svg/onscale.svg";

import ianVideo from "../../assets/mp4/ian.mp4";
import ianIcon from "../../assets/png/ian.png";

import Lottie from "lottie-react";
import animation from "../../assets/json/animate2.json";

export default function Ian() {
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

  return (
    <dix className="main" style={{ paddingTop: "7rem" }}>
      {/* Intro*/}
      <div className="box" style={{ marginBottom: "2rem" }}>
        <div className="vertical-content" style={{ marginBottom: "1rem" }}>
          <h1 className="h1">Ian Mizer</h1>
          <h3 className="h3">a.k.a. Steven Rogers</h3>
        </div>
        <div className="memoji-container">
          <img src={ianIcon} alt="ian" className="memoji" />
        </div>
        <div
          className="horizontal-content"
          style={{
            padding: "1rem",
            gap: "2rem",
            alignItems: "start",
            justifyContent: "center",
          }}
        >
          <div className="vertical-content" style={{ padding: "1rem" }}>
            <video ref={(el) => setVideoElement(el)} className="video">
              <source src={ianVideo} type="video/mp4" />
            </video>
            <div
              className="horizontal-content"
              style={{ gap: "1rem", marginTop: "1rem" }}
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
          </div>
          <div className="vertical-content" style={{ padding: "1rem" }}>
            <div className="info-content">
              <h1 className="h1" id="score" style={{ fontSize: "4rem" }}>
                9.7
                <span className="h1" style={{ fontSize: "1rem" }}>
                  /10.0
                </span>
              </h1>
              <span
                className="emoji-container"
                style={{ marginBottom: "1rem" }}
              >
                <img src={linkedIn} className="emoji-2" alt="calen" />
                LinkedIn
              </span>
              <span
                className="emoji-container"
                style={{ marginBottom: "1rem" }}
              >
                <img src={github} className="emoji-2" alt="calen" />
                GitHub
              </span>

              <h2 className="h2">top langauge</h2>
              <span
                className="emoji-container"
                id="python-container"
                style={{
                  marginTop: "0.5rem",
                  marginBottom: "1rem",
                  padding: "1rem",
                }}
              >
                <img src={python} className="emoji-2" alt="calendar" />
                Python
              </span>
              <h2 className="h2">pursuing langauges</h2>
              <span
                className="emoji-container"
                id="rust-container"
                style={{
                  marginTop: "0.5rem",
                  marginBottom: "0.5rem",
                  padding: "1rem",
                }}
              >
                <img src={rust} className="emoji-2" alt="calendar" />
                Rust
              </span>
              <span
                className="emoji-container"
                id="kubernetes-container"
                style={{
                  marginTop: "0.5rem",
                  padding: "1rem",
                }}
              >
                <img src={kubernetes} className="emoji-2" alt="calendar" />
                Kubernetes
              </span>
              <Lottie
                animationData={animation}
                id="animation"
                style={{
                  marginBottom: "1rem",
                  width: "50%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Work Experience */}
      <div className="box" style={{ marginBottom: "2rem" }}>
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            Work Experience
          </h1>
          <div
            className="work-content"
            style={{
              alignItems: "start",
            }}
          >
            <div className="vertical-content">
              <div className="horizontal-content" style={{ width: "100%" }}>
                <div
                  className="vertical-content"
                  style={{
                    alignItems: "start",
                    justifyContent: "start",
                    textAlign: "left",
                  }}
                >
                  <h1 className="h1-sub">OnScale</h1>
                  <h2 className="h2">Cloud Support Engineer</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    2 years
                  </h3>
                </div>
                <div
                  className="horizontal-content"
                  style={{
                    width: "70%",
                    alignSelf: "end",
                    justifySelf: "end",
                  }}
                >
                  <div
                    className="horizontal-content"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "end",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      padding: 0,
                      margin: 0,
                    }}
                  >
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
                      id="terraform-container"
                      style={{
                        marginBottom: "1rem",
                        padding: "1rem",
                      }}
                    >
                      <img src={terraform} className="emoji-2" alt="calendar" />
                      Terraform
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
                      <img
                        src={kubernetes}
                        className="emoji-2"
                        alt="calendar"
                      />
                      Kubernetes
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
                  </div>
                </div>
              </div>
              <div
                className="vertical-content"
                style={{
                  alignItems: "start",
                  justifyContent: "start",
                  textAlign: "left",
                  width: "100%",
                }}
              >
                <div className="job-description">
                  <h2 className="h2">AWS Expertise:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.2rem",
                    }}
                  >
                    Applied deep knowledge of AWS services, with a focus on AWS
                    Security, Amazon S3, Amazon EC2, AWS IAM, AWS Lambda, and
                    overall Cloud Infrastructure to provide efficient and secure
                    solutions for Onscale's cloud-based applications.
                  </h3>
                </div>
                <div className="job-description">
                  <h2 className="h2">Multi-Cloud Proficiency:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.2rem",
                    }}
                  >
                    Demonstrated expertise in cloud platforms such as Google
                    Cloud Platform (GCP), Microsoft Azure, and Kubernetes,
                    ensuring seamless integration and support across diverse
                    cloud environments to meet the company's evolving needs.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">DevOps and Technical Support:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.2rem",
                    }}
                  >
                    Applied Agile Methodologies and DevOps practices to
                    streamline development workflows, troubleshoot technical
                    issues, and deliver exceptional technical support, utilizing
                    skills in Linux, Docker Products, Terraform, and Python
                    programming. time.
                  </h3>
                </div>
                <h2 className="h2" style={{ marginTop: "0.5rem" }}>
                  Salary: $150,000
                </h2>
              </div>
              <img
                src={onscale}
                style={{
                  alignSelf: "end",
                  justifySelf: "end",
                  width: "10%",
                }}
                alt="onscale"
                className="emoji"
              />
            </div>
          </div>
          <div
            className="work-content"
            style={{
              alignItems: "start",
            }}
          >
            <div className="vertical-content">
              <div className="horizontal-content" style={{ width: "100%" }}>
                <div
                  className="vertical-content"
                  style={{
                    alignItems: "start",
                    justifyContent: "start",
                    textAlign: "left",
                  }}
                >
                  <h1 className="h1-sub">Legacy Software Systems</h1>
                  <h2 className="h2">Software Developer</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    1 year & 2 months
                  </h3>
                </div>
                <div className="horizontal-content">
                  <div className="horizontal-content" style={{ gap: "0.5rem" }}>
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
                      id="javascript-container"
                      style={{
                        marginBottom: "1rem",
                        padding: "1rem",
                      }}
                    >
                      <img
                        src={javascript}
                        className="emoji-2"
                        alt="calendar"
                      />
                      Javascript
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
                </div>
              </div>
              <div
                className="vertical-content"
                style={{
                  alignItems: "start",
                  justifyContent: "start",
                  textAlign: "left",
                  width: "100%",
                }}
              >
                <div className="job-description">
                  <h2 className="h2">Software Rework:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.2rem",
                    }}
                  >
                    Successfully reworked existing software systems using Python
                    and JavaScript applications. Demonstrated proficiency in
                    enhancing and optimizing codebases, contributing to improved
                    system performance and functionality.
                  </h3>
                </div>
                <div className="job-description">
                  <h2 className="h2">Contract Development:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.2rem",
                    }}
                  >
                    Acted as a contracted software developer with a primary
                    focus on Python. Undertook specific projects, delivering
                    tailored solutions and meeting project requirements within
                    the designated time frame.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Maintenance and Upgrades:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.2rem",
                    }}
                  >
                    Played a key role in maintaining and upgrading existing
                    software, utilizing a tech stack that included Python,
                    JavaScript, and Linux. Implemented updates and improvements
                    to ensure the software&apos;s relevance and efficiency over
                    time.
                  </h3>
                </div>
                <h2 className="h2" style={{ marginTop: "0.5rem" }}>
                  Salary: $120,000
                </h2>
              </div>
            </div>
          </div>

          <div className="work-content">
            <div
              className="vertical-content"
              style={{
                alignItems: "start",
                justifyContent: "start",
                textAlign: "left",
              }}
            >
              <h1 className="h1-sub">PyATL</h1>
              <h2 className="h2">Core Organizer of Atlanta Python Group</h2>
              <h3 className="h3">4 years</h3>
            </div>
            <div className="vertical-content">
              <h3 className="h3">Job Description</h3>
              <h3 className="h3">Job Salary</h3>
            </div>
            <div className="vertical-content">
              <h2 className="h2">skill learned:</h2>
              <h3 className="h3">skill</h3>
              <h3 className="h3">skill</h3>
              <h3 className="h3">skill</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Education */}
      <div className="box" style={{ marginBottom: "2rem" }}>
        <div className="work-content">
          <h1 className="h1-sub">Education</h1>
          <h2 className="h2">School Name</h2>
          <h3 className="h3">School Icon</h3>
          <h3 className="h3">Degree</h3>
          <h3 className="h3">Graduation Date</h3>
        </div>
      </div>
      {/* Projects */}
      <div className="box" style={{ marginBottom: "2rem" }}>
        <div className="work-content">
          <h1 className="h1-sub">Projects</h1>
          <h2 className="h2">Project 1</h2>
          <h3 className="h3">Project Description</h3>
          <h3 className="h3">Project Link</h3>
        </div>
      </div>
      {/* Attributes */}
      <div className="box">
        <div className="work-content">
          <h1 className="h1-sub">Attributes</h1>
          <h2 className="h2">Attributes 1</h2>
          <h3 className="h3">Attribute Icon</h3>
          <h3 className="h3">Attributes Description</h3>
        </div>
      </div>
    </dix>
  );
}
