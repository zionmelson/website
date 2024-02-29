/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

import calen from "../../assets/svg/calen.svg";
import python from "../../assets/svg/python.svg";
import rust from "../../assets/svg/rust.svg";
import javascript from "../../assets/svg/javascript.svg";
import linux from "../../assets/svg/linux.svg";
import aws from "../../assets/svg/aws.svg";
import azure from "../../assets/svg/azure.svg";
import gcp from "../../assets/svg/gcp.svg";
import terraform from "../../assets/svg/terraform.svg";
import docker from "../../assets/svg/docker.svg";
import kubernetes from "../../assets/svg/kubernetes.svg";

import linkedIn from "../../assets/svg/link.svg";
import github from "../../assets/svg/git.svg";
import onscale from "../../assets/svg/onscale.svg";
import pyatl from "../../assets/svg/pyatl.svg";

import ianVideo from "../../assets/mp4/ian.mp4";
import ianIcon from "../../assets/png/ian.png";

import Lottie from "lottie-react";
import smile from "../../assets/json/smile.json";
import developer from "../../assets/json/developer.json";
import team from "../../assets/json/team.json";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 25 },
  });

  return (
    <animated.div
      style={{ fontFamily: "Inter, sans-serif", fontWeight: "700" }}
    >
      {number.to((n) => n.toFixed(0))}
    </animated.div>
  );
}

export default function Ian() {
  const [githubData, setGithubData] = useState({});
  const [repoData, setRepoData] = useState([]);
  const [toolTip, setToolTip] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const fetchGitHub = async () => {
    const gitHub = await fetch("https://api.github.com/users/HasturDev");
    const repos = await fetch("https://api.github.com/users/HasturDev/repos");

    const data = await gitHub.json();
    const reposData = await repos.json();

    // console.log(reposData);

    setGithubData(data);
    setRepoData(reposData);
  };

  useEffect(() => {
    fetchGitHub();
  }, []);

  return (
    <div className="main" style={{ paddingTop: "7rem" }}>
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
            <video className="video" controls>
              <source autoPlay={true} src={ianVideo} type="video/mp4" />
            </video>
          </div>
          <div className="vertical-content" style={{ padding: "1rem" }}>
            <div className="info-content" style={{ position: "relative" }}>
              {toolTip ? (
                <div className="tooltip-bar">
                  <h5 className="h5">overall team member score</h5>
                </div>
              ) : (
                <></>
              )}
              <h5
                className="tooltip"
                onMouseEnter={() => setToolTip(true)}
                onMouseLeave={() => setToolTip(false)}
              >
                ?
              </h5>
              <h1 className="h1" id="score" style={{ fontSize: "4rem" }}>
                <Number n={96} />
              </h1>
              <a
                href="https://www.linkedin.com/in/ian-mizer-039843155/"
                target="_blank"
                rel="noreferrer"
              >
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem" }}
                >
                  <img src={linkedIn} className="emoji-2" alt="calen" />
                  LinkedIn
                </span>
              </a>
              <a
                href="https://github.com/HasturDev"
                target="_blank"
                rel="noreferrer"
              >
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem" }}
                >
                  <img src={github} className="emoji-2" alt="calen" />
                  GitHub
                </span>
              </a>
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
                  marginBottom: "1rem",
                  padding: "1rem",
                }}
              >
                <img src={kubernetes} className="emoji-2" alt="calendar" />
                Kubernetes
              </span>
              <h5 className="h5">best attribute</h5>
              <Lottie
                animationData={smile}
                id="smile"
                style={{
                  marginBottom: "1rem",
                  width: "50%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Attributes */}
      <div className="box" style={{ marginBottom: "2rem" }}>
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            Attributes
          </h1>
        </div>
        <div
          className="horizontal-content"
          style={{ justifyContent: "space-evenly" }}
        >
          <div className="attribute">
            <h1 className="h1-sub">Charismatic</h1>
            <Lottie animationData={smile} id="smile" />
            <h5 className="h5">Creates a sense of ease around team members.</h5>
          </div>
          <div className="attribute">
            <h1 className="h1-sub">Expert Developer</h1>
            <Lottie
              animationData={developer}
              style={{ width: "70%" }}
              id="developer"
            />
            <h5 className="h5">
              Well versed in all things technology, both front & back-end.
            </h5>
          </div>
          <div className="attribute">
            <h1 className="h1-sub">Team Builder</h1>
            <Lottie animationData={team} style={{ width: "70%" }} id="team" />
            <h5 className="h5">
              Engages team members and takes initiative to led.
            </h5>
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
            <div
              className="vertical-content"
              style={{
                position: "relative",
              }}
            >
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
                    width: "60%",
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
                    id="azure-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={azure} className="emoji-2" alt="calendar" />
                    Azure
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
                    <img src={kubernetes} className="emoji-2" alt="calendar" />
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
                    solutions for Onscale&apos;s cloud-based applications.
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
                    cloud environments to meet the company&apos;s evolving
                    needs.
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
                  Salary: $64,000
                </h2>
              </div>
              <a href="https://onscale.com/" target="_blank" rel="noreferrer">
                <img
                  src={onscale}
                  style={{
                    right: "1rem",
                    bottom: "0.5rem",
                    width: "10%",
                    position: "absolute",
                  }}
                  alt="onscale"
                  className="emoji"
                />
              </a>
            </div>
          </div>
          <div
            className="work-content"
            style={{
              alignItems: "start",
            }}
          >
            <div
              className="vertical-content"
              style={{
                position: "relative",
              }}
            >
              <div className="horizontal-content" style={{ width: "100%" }}>
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
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    4 years
                  </h3>
                </div>

                <div
                  className="horizontal-content"
                  style={{
                    width: "60%",
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
                  <h2 className="h2">Event Coordination:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.2rem",
                    }}
                  >
                    Orchestrated and managed key activities as a core organizer
                    for an Atlanta Python Group, ensuring successful planning
                    and execution of Python-focused events, meetups, and
                    community engagements.
                  </h3>
                </div>
                <div className="job-description">
                  <h2 className="h2">Open Source Contribution:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.2rem",
                    }}
                  >
                    Actively contributed to an open-source web application,
                    employing Python Django and Javascript, to enhance
                    functionality, optimize performance, and promote
                    collaborative development within the broader tech community.
                    needs.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Industry Partnerships:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.2rem",
                    }}
                  >
                    Engaged in collaborative efforts with industry leaders such
                    as JFrog, Microsoft, and No Starch Press, fostering mutually
                    beneficial relationships and contributing to the exchange of
                    knowledge and resources within the technology sector.
                  </h3>
                </div>
              </div>
              <a href="https://pyatl.dev/" target="_blank" rel="noreferrer">
                <img
                  src={pyatl}
                  style={{
                    right: "0rem",
                    bottom: "0rem",
                    width: "2.5%",
                    position: "absolute",
                  }}
                  alt="pyatl"
                  className="emoji"
                />
              </a>
            </div>
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

              <div
                className="horizontal-content"
                style={{
                  width: "60%",
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
                  <img src={javascript} className="emoji-2" alt="calendar" />
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
                  Acted as a contracted software developer with a primary focus
                  on Python. Undertook specific projects, delivering tailored
                  solutions and meeting project requirements within the
                  designated time frame.
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
                  JavaScript, and Linux. Implemented updates and improvements to
                  ensure the software&apos;s relevance and efficiency over time.
                </h3>
              </div>
              <h2 className="h2" style={{ marginTop: "0.5rem" }}>
                Salary: $45 per hour
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className="box">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            Projects
          </h1>
        </div>
        <div
          className="work-content"
          style={{
            position: "relative",
            justifyContent: "start",
            textAlign: "left",
          }}
        >
          <div
            className="vertical-content"
            style={{
              justifyContent: "start",
              textAlign: "left",
            }}
          >
            <a href={githubData.html_url} target="_blank" rel="noreferrer">
              <img
                src={githubData.avatar_url}
                alt="icon"
                className="github-icon"
              />
            </a>
            <h2 className="h2">{githubData.login}</h2>
          </div>
          <div
            className="horizontal-content"
            style={{
              padding: "1rem",
              justifyContent: "start",
              gap: "0.6rem",
              width: "55rem",
              flexWrap: "wrap",
            }}
          >
            {repoData.map((repo) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="github-repo"
                >
                  <div>
                    <h5 className="h5" id="github-name">
                      {repo.name}
                    </h5>
                  </div>
                </a>
              );
            })}
          </div>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <img
              src={github}
              alt="github"
              style={{
                right: "1rem",
                bottom: "0.5rem",
                width: "8%",
                position: "absolute",
              }}
              className="emoji"
            />
          </a>
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
          <span className="emoji-container" style={{ marginBottom: "1rem" }}>
            <img src={calen} className="emoji-2" alt="calen" />
            Meet with me
          </span>
        </a>
        <a
          href=""
          style={{
            width: "100%",
            alignContent: "center",
            justifyContent: "center",
            display: "flex",
            marginTop: "1rem",
            textDecoration: "underline",
          }}
          onClick={scrollToTop}
        >
          Back to top
        </a>
      </div>
      {/* Intro mobile */}
      <div className="box-mobile" style={{ marginBottom: 0 }}>
        <div className="vertical-content" style={{ marginBottom: "1rem" }}>
          <h1 className="h1">Ian Mizer</h1>
          <h3 className="h3">a.k.a. Steven Rogers</h3>
        </div>
        <div className="memoji-container">
          <img src={ianIcon} alt="ian" className="memoji" />
        </div>
        <div className="vertical-content">
          <div className="vertical-content" style={{ padding: "1rem" }}>
            <video className="video" controls>
              <source autoPlay={true} src={ianVideo} type="video/mp4" />
            </video>
          </div>
          <div className="vertical-content" style={{ padding: "1rem" }}>
            <h1 className="h1" style={{ marginBottom: "2rem" }}>
              Overview
            </h1>
            <div
              className="info-content"
              style={{ position: "relative", width: "90%" }}
            >
              {toolTip ? (
                <div className="tooltip-bar">
                  <h5 className="h5">overall team member score</h5>
                </div>
              ) : (
                <></>
              )}
              <h5
                className="tooltip"
                onMouseEnter={() => setToolTip(true)}
                onMouseLeave={() => setToolTip(false)}
              >
                ?
              </h5>
              <h1 className="h1" id="score" style={{ fontSize: "4rem" }}>
                <Number n={96} />
              </h1>
              <a
                href="https://www.linkedin.com/in/ian-mizer-039843155/"
                target="_blank"
                rel="noreferrer"
              >
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem" }}
                >
                  <img src={linkedIn} className="emoji-2" alt="calen" />
                  LinkedIn
                </span>
              </a>
              <a
                href="https://github.com/HasturDev"
                target="_blank"
                rel="noreferrer"
              >
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem" }}
                >
                  <img src={github} className="emoji-2" alt="calen" />
                  GitHub
                </span>
              </a>
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
                  marginBottom: "1rem",
                  padding: "1rem",
                }}
              >
                <img src={kubernetes} className="emoji-2" alt="calendar" />
                Kubernetes
              </span>
              <h5 className="h5">best attribute</h5>
              <Lottie
                animationData={smile}
                id="smile"
                style={{
                  marginBottom: "1rem",
                  width: "50%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Attributes mobile */}
      <div className="box-mobile" style={{ marginBottom: 0 }}>
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            Attributes
          </h1>
        </div>
        <div
          className="horizontal-content"
          style={{ justifyContent: "space-evenly" }}
        >
          <div className="attribute">
            <h1 className="h1-sub">Charismatic</h1>
            <Lottie animationData={smile} id="smile" />
            <h5 className="h5">Creates a sense of ease around team members.</h5>
          </div>
          <div className="attribute">
            <h1 className="h1-sub">Expert Developer</h1>
            <Lottie
              animationData={developer}
              style={{ width: "70%" }}
              id="developer"
            />
            <h5 className="h5">
              Well versed in all things technology, both front & back-end.
            </h5>
          </div>
          <div className="attribute">
            <h1 className="h1-sub">Team Builder</h1>
            <Lottie animationData={team} style={{ width: "70%" }} id="team" />
            <h5 className="h5">
              Engages team members and takes initiative to led.
            </h5>
          </div>
        </div>
      </div>
      {/* Work Experience mobile */}
      <div className="box-mobile" style={{ marginBottom: 0 }}>
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
            <div
              className="vertical-content"
              style={{
                position: "relative",
              }}
            >
              <div
                className="vertical-content"
                style={{
                  width: "100%",
                  alignItems: "start",
                  justifyContent: "start",
                  textAlign: "left",
                }}
              >
                <div
                  className="vertical-content"
                  style={{
                    alignItems: "start",
                    justifyContent: "start",
                    textAlign: "left",
                    width: "100%",
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
                  className="vertical-content"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
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
                    id="azure-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={azure} className="emoji-2" alt="calendar" />
                    Azure
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
                    <img src={kubernetes} className="emoji-2" alt="calendar" />
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
                    solutions for Onscale&apos;s cloud-based applications.
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
                    cloud environments to meet the company&apos;s evolving
                    needs.
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
                  Salary: $64,000
                </h2>
              </div>
              <a href="https://onscale.com/" target="_blank" rel="noreferrer">
                <img
                  src={onscale}
                  style={{
                    right: "1rem",
                    bottom: "0.5rem",
                    width: "20%",
                    position: "absolute",
                  }}
                  alt="onscale"
                  className="emoji"
                />
              </a>
            </div>
          </div>
          <div
            className="work-content"
            style={{
              alignItems: "start",
            }}
          >
            <div
              className="vertical-content"
              style={{
                position: "relative",
              }}
            >
              <div
                className="vertical-content"
                style={{
                  width: "100%",
                  alignItems: "start",
                  justifyContent: "start",
                  textAlign: "left",
                }}
              >
                <div
                  className="vertical-content"
                  style={{
                    alignItems: "start",
                    justifyContent: "start",
                    textAlign: "left",
                    width: "100%",
                  }}
                >
                  <h1 className="h1-sub">PyATL</h1>
                  <h2 className="h2">Core Organizer of Atlanta Python Group</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    4 years
                  </h3>
                </div>
                <div
                  className="vertical-content"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                    flexWrap: "wrap",
                    gap: "0.5rem",
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
                  <h2 className="h2">Event Coordination:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.2rem",
                    }}
                  >
                    Orchestrated and managed key activities as a core organizer
                    for an Atlanta Python Group, ensuring successful planning
                    and execution of Python-focused events, meetups, and
                    community engagements.
                  </h3>
                </div>
                <div className="job-description">
                  <h2 className="h2">Open Source Contribution:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.2rem",
                    }}
                  >
                    Actively contributed to an open-source web application,
                    employing Python Django and Javascript, to enhance
                    functionality, optimize performance, and promote
                    collaborative development within the broader tech community.
                    needs.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Industry Partnerships:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.2rem",
                    }}
                  >
                    Engaged in collaborative efforts with industry leaders such
                    as JFrog, Microsoft, and No Starch Press, fostering mutually
                    beneficial relationships and contributing to the exchange of
                    knowledge and resources within the technology sector.
                  </h3>
                </div>
              </div>
              <a href="https://pyatl.dev/" target="_blank" rel="noreferrer">
                <img
                  src={pyatl}
                  style={{
                    right: "0rem",
                    bottom: "0rem",
                    width: "10%",
                    position: "absolute",
                  }}
                  alt="pyatl"
                  className="emoji"
                />
              </a>
            </div>
          </div>
          <div
            className="work-content"
            style={{
              alignItems: "start",
            }}
          >
            <div
              className="vertical-content"
              style={{
                position: "relative",
              }}
            >
              <div
                className="vertical-content"
                style={{
                  width: "100%",
                  alignItems: "start",
                  justifyContent: "start",
                  textAlign: "left",
                }}
              >
                <div
                  className="vertical-content"
                  style={{
                    alignItems: "start",
                    justifyContent: "start",
                    textAlign: "left",
                    width: "100%",
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
                <div
                  className="vertical-content"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                    flexWrap: "wrap",
                    gap: "0.5rem",
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
                  Salary: $45 per hour
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Projects mobile */}
      <div className="box-mobile">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            Projects
          </h1>
        </div>
        <div
          className="work-content"
          style={{
            flexDirection: "column",
            position: "relative",
            justifyContent: "center",
          }}
        >
          <div
            className="vertical-content"
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <a href={githubData.html_url} target="_blank" rel="noreferrer">
              <img
                src={githubData.avatar_url}
                alt="icon"
                className="github-icon"
              />
            </a>
            <h2 className="h2">{githubData.login}</h2>
          </div>
          <div
            className="vertical-content"
            style={{
              width: "100%",
              padding: "1rem",
              justifyContent: "start",
              alignItems: "start",
              gap: "0.5rem",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {repoData.map((repo) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  <div
                    className="horizontal-content"
                    style={{
                      padding: "0.3rem",
                      borderRadius: "0.5rem",
                      border: "1px solid #fff",
                      background: "linear-gradient(135deg, #111111, #222123)",
                    }}
                  >
                    <h5 className="h5" id="github-name">
                      {repo.name}
                    </h5>
                  </div>
                </a>
              );
            })}
          </div>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <img
              src={github}
              alt="github"
              style={{
                right: "1rem",
                bottom: "0.5rem",
                width: "15%",
                position: "absolute",
              }}
              className="emoji"
            />
          </a>
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
        <a
          href=""
          style={{
            width: "100%",
            alignContent: "center",
            justifyContent: "center",
            display: "flex",
            marginTop: "1rem",
            textDecoration: "underline",
          }}
          onClick={scrollToTop}
        >
          Back to top
        </a>
      </div>
    </div>
  );
}
