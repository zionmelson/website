/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

import calen from "../../assets/svg/calen.svg";
import react from "../../assets/svg/react.svg";
import rust from "../../assets/svg/rust.svg";
import javascript from "../../assets/svg/javascript.svg";
import aws from "../../assets/svg/aws.svg";
import azure from "../../assets/svg/azure.svg";
import gcp from "../../assets/svg/gcp.svg";
import graphql from "../../assets/svg/graphql.svg";
import angular from "../../assets/svg/angular.svg";
import node from "../../assets/svg/node.svg";
import redux from "../../assets/svg/redux.svg";

import vue from "../../assets/svg/vue.svg";
import postgres from "../../assets/svg/postgres.svg";
import solidity from "../../assets/svg/solidity.svg";

import linkedIn from "../../assets/svg/link.svg";
import github from "../../assets/svg/git.svg";
import coinonia from "../../assets/svg/coinonia.svg";
import bigpixel from "../../assets/svg/bigpixel.svg";

import jonathanVideo from "../../assets/mp4/jonathan.mp4";
import jonathanIcon from "../../assets/png/jonathan.png";

import Lottie from "lottie-react";
import curious from "../../assets/json/curious.json";
import rocket from "../../assets/json/rocket.json";
import product from "../../assets/json/product.json";

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

export default function Jonathan() {
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
    const gitHub = await fetch("https://api.github.com/users/jfbloom22");
    const repos = await fetch("https://api.github.com/users/jfbloom22/repos");

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
          <h1 className="h1">Jonathan Flower</h1>
          <h3 className="h3">a.k.a. Scott Laing</h3>
        </div>
        <div className="memoji-container">
          <img src={jonathanIcon} alt="ian" className="memoji" />
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
              <source autoPlay={true} src={jonathanVideo} type="video/mp4" />
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
                <Number n={92} />
              </h1>
              <a
                href="https://www.linkedin.com/in/jonathan-flower/"
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
                href="https://github.com/jfbloom22"
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
                id="react-container"
                style={{
                  marginTop: "0.5rem",
                  marginBottom: "1rem",
                  padding: "1rem",
                }}
              >
                <img src={react} className="emoji-2" alt="calendar" />
                React
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
                id="solidity-container"
                style={{
                  marginTop: "0.5rem",
                  marginBottom: "1rem",
                  padding: "1rem",
                }}
              >
                <img src={solidity} className="emoji-2" alt="calendar" />
                Solidity
              </span>
              <h5 className="h5">best attribute</h5>
              <Lottie
                animationData={rocket}
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
            <h1 className="h1-sub">Entrepreneurial</h1>
            <Lottie
              animationData={rocket}
              style={{ width: "70%" }}
              id="developer"
            />
            <h5 className="h5">
              Has experience starting and leading a company to success.
            </h5>
          </div>
          <div className="attribute">
            <h1 className="h1-sub">Curious</h1>
            <Lottie animationData={curious} id="smile" />
            <h5 className="h5">
              Constantly learning and exploring new technologies.
            </h5>
          </div>
          <div className="attribute">
            <h1 className="h1-sub">Product Manager</h1>
            <Lottie
              animationData={product}
              style={{ width: "70%" }}
              id="team"
            />
            <h5 className="h5">
              Can take an idea and turn it into a successful product.
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
                  <h1 className="h1-sub">Coinonia Labs</h1>
                  <h2 className="h2">Lead Software Architect</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    1 year & 9 months
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
                    id="graphql-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={graphql} className="emoji-2" alt="calendar" />
                    GraphQL
                  </span>
                  <span
                    className="emoji-container"
                    id="vue-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={vue} className="emoji-2" alt="calendar" />
                    Vue
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
                  <h2 className="h2">NFT Ecosystem Architecture:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.2rem",
                    }}
                  >
                    Architected a comprehensive NFT ecosystem, including NFT
                    games, generative NFT collections, no-code interactive NFT
                    smart contract generators, and an NFT marketplace.
                    Demonstrated expertise in designing and implementing
                    complex, decentralized solutions.
                  </h3>
                </div>
                <div className="job-description">
                  <h2 className="h2">Agile Coaching and Best Practices:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.2rem",
                    }}
                  >
                    Actively coached team members in adopting Agile
                    methodologies, coding best practices, and integrating
                    artificial intelligence to enhance overall effectiveness.
                    Fostered a collaborative and innovative development
                    environment, driving continuous improvement.
                  </h3>
                </div>
                <div className="job-description">
                  <h2 className="h2">
                    Technology Stack and Deployment Management:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.2rem",
                    }}
                  >
                    Deployed high-performing and scalable solutions utilizing a
                    technology stack that included Docker, Hasura, Nuxt SSR,
                    Vue.js, GraphQL, Postgres, and serverless functions. Managed
                    virtual machines and established continuous deployment
                    pipelines on both Azure and Google Cloud, showcasing
                    proficiency in cloud platforms.
                  </h3>
                </div>
                <div className="job-description">
                  <h2 className="h2">Developer Experience Enhancement:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.2rem",
                    }}
                  >
                    Improved developer experience by implementing continuous
                    integration, PNPM monorepos, Eslint, and Prettier.
                    Introduced tools and practices to streamline development
                    processes and maintain code quality.
                  </h3>
                </div>
                <h2 className="h2" style={{ marginTop: "0.5rem" }}>
                  Salary: $80,000
                </h2>
              </div>
              <a
                href="https://coinonialabs.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={coinonia}
                  style={{
                    right: "1rem",
                    bottom: "0.5rem",
                    width: "5%",
                    position: "absolute",
                  }}
                  alt="coinonia"
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
                  <h1 className="h1-sub">Big Pixel</h1>
                  <h2 className="h2">Lead Software Architect</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    2 years & 4 months
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
                    id="angular-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={angular} className="emoji-2" alt="calendar" />
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
                    Node
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
                  <h2 className="h2">Team Leadership and Development:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.2rem",
                    }}
                  >
                    Successfully recruited, coached, and led a team of
                    developers in the creation of highly scalable and modern
                    enterprise software solutions. Demonstrated strong
                    leadership skills to nurture talent, foster collaboration,
                    and drive collective success.
                  </h3>
                </div>
                <div className="job-description">
                  <h2 className="h2">Agile Methodologies Implementation:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.2rem",
                    }}
                  >
                    Spearheaded the implementation of Agile methodologies within
                    the development process. As a result, revenue experienced
                    remarkable growth, more than doubling within a single year.
                    Applied Agile principles to enhance project efficiency,
                    adaptability, and client satisfaction.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Enterprise Software Solutions:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.2rem",
                    }}
                  >
                    Played a pivotal role in the design and development of
                    enterprise-level software solutions. Leveraged expertise in
                    software architecture to create scalable, robust, and
                    innovative solutions that met the demands of modern business
                    environments.
                  </h3>
                </div>
                <h2 className="h2" style={{ marginTop: "0.5rem" }}>
                  Salary: $80,000
                </h2>
              </div>
              <a
                href="https://www.thebigpixel.net/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={bigpixel}
                  style={{
                    right: "0rem",
                    bottom: "0rem",
                    width: "3%",
                    position: "absolute",
                  }}
                  alt="bigpixel"
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
                <h1 className="h1-sub">Simple Joy Solutions</h1>
                <h2 className="h2">Founder, Lead Full Stack Developer</h2>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  6 years & 3 months
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
                  id="angular-container"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                  }}
                >
                  <img src={angular} className="emoji-2" alt="calendar" />
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
                  Node
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
                <h2 className="h2">Architectural Leadership:</h2>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.2rem",
                  }}
                >
                  Spearheaded the architectural design of enterprise-grade
                  mobile and web applications, utilizing cutting-edge
                  technologies such as React, Angular, Ionic Framework, Redux,
                  and Node.js. Demonstrated expertise in creating robust and
                  scalable solutions that align with industry best practices.
                </h3>
              </div>
              <div className="job-description">
                <h2 className="h2">Blockchain Deployment:</h2>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.2rem",
                  }}
                >
                  Successfully deployed a private blockchain testnet and
                  developed a wallet application, showcasing proficiency in
                  blockchain technology. Implemented secure and efficient
                  solutions to meet the demands of the rapidly evolving
                  blockchain landscape.
                </h3>
              </div>

              <div className="job-description">
                <h2 className="h2">Client Satisfaction and Recommendations:</h2>
                <h3
                  className="h3"
                  style={{
                    marginBottom: "0.2rem",
                  }}
                >
                  Achieved high levels of client satisfaction across diverse
                  industries, including real estate, learning management
                  systems, prescription drugs, online eBook libraries, medical
                  gas, and oil and gas. Clients from various sectors recommended
                  our services, highlighting the quality and impact of our
                  solutions.
                </h3>
              </div>
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
          <h1 className="h1">Jonathan Flower</h1>
          <h3 className="h3">a.k.a. Scott Laing</h3>
        </div>
        <div className="memoji-container">
          <img src={jonathanIcon} alt="ian" className="memoji" />
        </div>
        <div className="vertical-content">
          <div className="vertical-content" style={{ padding: "1rem" }}>
            <video className="video" controls>
              <source autoPlay={true} src={jonathanVideo} type="video/mp4" />
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
                <Number n={92} />
              </h1>
              <a
                href="https://www.linkedin.com/in/jonathan-flower/"
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
                href="https://github.com/jfbloom22"
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
                id="react-container"
                style={{
                  marginTop: "0.5rem",
                  marginBottom: "1rem",
                  padding: "1rem",
                }}
              >
                <img src={react} className="emoji-2" alt="calendar" />
                React
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
                id="solidity-container"
                style={{
                  marginTop: "0.5rem",
                  marginBottom: "1rem",
                  padding: "1rem",
                }}
              >
                <img src={solidity} className="emoji-2" alt="calendar" />
                Solidity
              </span>
              <h5 className="h5">best attribute</h5>
              <Lottie
                animationData={rocket}
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
            <h1 className="h1-sub">Entrepreneurial</h1>
            <Lottie
              animationData={rocket}
              style={{ width: "70%" }}
              id="developer"
            />
            <h5 className="h5">
              Has experience starting and leading a company to success.
            </h5>
          </div>
          <div className="attribute">
            <h1 className="h1-sub">Curious</h1>
            <Lottie animationData={curious} id="smile" />
            <h5 className="h5">
              Constantly learning and exploring new technologies.
            </h5>
          </div>
          <div className="attribute">
            <h1 className="h1-sub">Product Manager</h1>
            <Lottie
              animationData={product}
              style={{ width: "70%" }}
              id="team"
            />
            <h5 className="h5">
              Can take an idea and turn it into a successful product.
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
                  <h1 className="h1-sub">Coinonia</h1>
                  <h2 className="h2">Lead Software Architect</h2>
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
                    id="graphql-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={graphql} className="emoji-2" alt="calendar" />
                    GraphQL
                  </span>
                  <span
                    className="emoji-container"
                    id="vue-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={vue} className="emoji-2" alt="calendar" />
                    Vue
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
                  <h2 className="h2">NFT Ecosystem Architecture:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.2rem",
                    }}
                  >
                    Architected a comprehensive NFT ecosystem, including NFT
                    games, generative NFT collections, no-code interactive NFT
                    smart contract generators, and an NFT marketplace.
                    Demonstrated expertise in designing and implementing
                    complex, decentralized solutions.
                  </h3>
                </div>
                <div className="job-description">
                  <h2 className="h2">Agile Coaching and Best Practices:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.2rem",
                    }}
                  >
                    Actively coached team members in adopting Agile
                    methodologies, coding best practices, and integrating
                    artificial intelligence to enhance overall effectiveness.
                    Fostered a collaborative and innovative development
                    environment, driving continuous improvement.
                  </h3>
                </div>
                <div className="job-description">
                  <h2 className="h2">
                    Technology Stack and Deployment Management:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.2rem",
                    }}
                  >
                    Deployed high-performing and scalable solutions utilizing a
                    technology stack that included Docker, Hasura, Nuxt SSR,
                    Vue.js, GraphQL, Postgres, and serverless functions. Managed
                    virtual machines and established continuous deployment
                    pipelines on both Azure and Google Cloud, showcasing
                    proficiency in cloud platforms.
                  </h3>
                </div>
                <div className="job-description">
                  <h2 className="h2">Developer Experience Enhancement:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.2rem",
                    }}
                  >
                    Improved developer experience by implementing continuous
                    integration, PNPM monorepos, Eslint, and Prettier.
                    Introduced tools and practices to streamline development
                    processes and maintain code quality.
                  </h3>
                </div>
                <h2 className="h2" style={{ marginTop: "0.5rem" }}>
                  Salary: $80,000
                </h2>
              </div>
              <a
                href="https://coinonialabs.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={coinonia}
                  style={{
                    right: "0rem",
                    bottom: "0.5rem",
                    width: "15%",
                    position: "absolute",
                  }}
                  alt="coinonia"
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
                  <h1 className="h1-sub">Big Pixel</h1>
                  <h2 className="h2">Lead Software Architect</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    2 years & 4 months
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
                    id="angular-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={angular} className="emoji-2" alt="calendar" />
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
                    Node
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
                  <h2 className="h2">Team Leadership and Development:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.2rem",
                    }}
                  >
                    Successfully recruited, coached, and led a team of
                    developers in the creation of highly scalable and modern
                    enterprise software solutions. Demonstrated strong
                    leadership skills to nurture talent, foster collaboration,
                    and drive collective success.
                  </h3>
                </div>
                <div className="job-description">
                  <h2 className="h2">Agile Methodologies Implementation:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.2rem",
                    }}
                  >
                    Spearheaded the implementation of Agile methodologies within
                    the development process. As a result, revenue experienced
                    remarkable growth, more than doubling within a single year.
                    Applied Agile principles to enhance project efficiency,
                    adaptability, and client satisfaction.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Enterprise Software Solutions:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.2rem",
                    }}
                  >
                    Played a pivotal role in the design and development of
                    enterprise-level software solutions. Leveraged expertise in
                    software architecture to create scalable, robust, and
                    innovative solutions that met the demands of modern business
                    environments.
                  </h3>
                </div>
                <h2 className="h2" style={{ marginTop: "0.5rem" }}>
                  Salary: $80,000
                </h2>
              </div>
              <a
                href="https://www.thebigpixel.net/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={bigpixel}
                  style={{
                    right: "1rem",
                    bottom: "0.2rem",
                    width: "10%",
                    position: "absolute",
                  }}
                  alt="bigpixel"
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
                  <h1 className="h1-sub">Simple Joy Solutions</h1>
                  <h2 className="h2">Founder, Lead Full Stack Developer</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    6 years & 3 months
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
                    id="angular-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={angular} className="emoji-2" alt="calendar" />
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
                    Node
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
                  <h2 className="h2">Architectural Leadership:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.2rem",
                    }}
                  >
                    Spearheaded the architectural design of enterprise-grade
                    mobile and web applications, utilizing cutting-edge
                    technologies such as React, Angular, Ionic Framework, Redux,
                    and Node.js. Demonstrated expertise in creating robust and
                    scalable solutions that align with industry best practices.
                  </h3>
                </div>
                <div className="job-description">
                  <h2 className="h2">Blockchain Deployment:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.2rem",
                    }}
                  >
                    Successfully deployed a private blockchain testnet and
                    developed a wallet application, showcasing proficiency in
                    blockchain technology. Implemented secure and efficient
                    solutions to meet the demands of the rapidly evolving
                    blockchain landscape.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    Client Satisfaction and Recommendations:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.2rem",
                    }}
                  >
                    Achieved high levels of client satisfaction across diverse
                    industries, including real estate, learning management
                    systems, prescription drugs, online eBook libraries, medical
                    gas, and oil and gas. Clients from various sectors
                    recommended our services, highlighting the quality and
                    impact of our solutions.
                  </h3>
                </div>
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
