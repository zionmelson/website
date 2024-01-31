import { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

import drake from "../../assets/mp3/drake.mp3";
import calen from "../../assets/svg/calen.svg";

import Lottie from "lottie-react";
import voice from "../../assets/json/voice.json";

import go from "../../assets/svg/go.svg";
import rust from "../../assets/svg/rust.svg";
import typescript from "../../assets/svg/typescript.svg";
import node from "../../assets/svg/node.svg";
import aws from "../../assets/svg/aws.svg";
import terraform from "../../assets/svg/terraform.svg";
import postgres from "../../assets/svg/postgres.svg";
import mysql from "../../assets/svg/mysql.svg";

export default function Drake() {
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
                  Dinah Drake{" "}
                </h1>
              </div>
              <Lottie animationData={voice} />
              <audio
                ref={(el) => setVideoElement(el)}
                style={{ marginBottom: "0.5rem" }}
              >
                <source src={drake} type="audio/mpeg" />
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
                    id="mysql-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={mysql} className="emoji-2" alt="calendar" />
                    MySQL
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
                    14+ years of experience
                  </span>
                  <span
                    className="emoji-container"
                    style={{ marginBottom: "1rem", padding: "1rem" }}
                  >
                    college degree
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
                  <h4 className="h4">minimum salary: $205,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">maxmimum salary: $205,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">located: nashville, tn</h4>
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
                <h1 className="h1-sub">Senior Backend Engineer</h1>
                <h2 className="h2">6 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 1 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">
                    Innovative Serverless Backend Development:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Pioneered the development of a serverless backend for the
                    ZTX game, a crucial component of the Web3 Metaverse
                    Platform. Leveraged cutting-edge technologies including Go,
                    Terraform, and multiple AWS services to create a dynamic and
                    scalable infrastructure.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Robust Infrastructure Engineering:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Engineered a resilient and scalable infrastructure tailored
                    to support the intricate functionalities of the ZTX game.
                    Ensured a seamless experience for creators and communities
                    engaged in building, playing, and earning within the Web3
                    Metaverse.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Cloud Architecture and Optimization:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Showcased expertise in cloud architecture and infrastructure
                    management. Utilized Terraform for efficient provisioning
                    and orchestration, optimizing AWS services to meet the
                    specific requirements of the ZTX game. Contributed to the
                    realization of ZTX&apos;s vision, emphasizing innovation,
                    playability, and economic empowerment within the dynamic
                    Web3 Metaverse landscape.
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
                <h1 className="h1-sub">Senior Backend Engineer</h1>
                <h2 className="h2">1 yr & 6 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 2 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">
                    Innovative Solutions in Gas Estimation:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Spearheaded the development of Blocknative&apos;s Gas
                    Estimation Platform Engine, a groundbreaking tool in the
                    crypto industry. This platform stands as a cornerstone,
                    providing users with accurate Gas estimations to navigate
                    the dynamic crypto landscape with confidence, ensuring
                    informed decision-making.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Optimizing Core Functionalities:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Played a pivotal role in enhancing Blocknative&apos;s
                    infrastructure by significantly improving the Mempool
                    notification API. This critical backbone of the Explorer was
                    optimized for efficiency and reliability, resulting in a
                    more robust and responsive system.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    Empowering Communication and Integration:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Demonstrated ingenuity by designing and implementing the
                    Auction Gateway service, streamlining communication between
                    searchers and builders. This initiative not only contributed
                    to the overall efficiency of the ETH builder but also
                    fostered seamless integration with Quicknode, expanding the
                    reach and impact of both platforms in the crypto ecosystem.
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
                <h1 className="h1-sub">Senior Typescript Developer</h1>
                <h2 className="h2">8 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 3 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">
                    Empowering Substrate Blockchain Interaction:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Contributed significantly to the Substrate Contracts UI, a
                    web application designed to streamline the deployment and
                    interaction with WASM smart contracts on Substrate
                    blockchains, prominently featuring the FRAME Contracts
                    Pallet.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Enhancing User Experience:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Played a pivotal role in improving the user experience and
                    functionality of the Substrate Contracts UI. This
                    contribution directly impacted the usability and
                    effectiveness of a critical component within the Substrate
                    ecosystem.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    Collaborative Advancements in Blockchain Technology:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Actively collaborated with the Parity team to advance the
                    capabilities of Substrate, showcasing expertise in both
                    blockchain technology and web application development
                    specific to the blockchain domain.
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
            Dinah Drake
          </h1>
          <div className="horizontal-content">
            <Lottie animationData={voice} />
            <audio
              ref={(el) => setVideoElement(el)}
              style={{ marginBottom: "0.5rem" }}
            >
              <source src={drake} type="audio/mpeg" />
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
                    id="mysql-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={mysql} className="emoji-2" alt="calendar" />
                    MySQL
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
                    14+ years of experience
                  </span>
                  <span
                    className="emoji-container"
                    style={{ marginBottom: "1rem", padding: "1rem" }}
                  >
                    college degree
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
                  <h4 className="h4">minimum salary: $205,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">maximum salary: $205,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">located: nashville, tn</h4>
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
                <h1 className="h1-sub">Senior Backend Engineer</h1>
                <h2 className="h2">6 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 1 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">
                    Innovative Serverless Backend Development:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Pioneered the development of a serverless backend for the
                    ZTX game, a crucial component of the Web3 Metaverse
                    Platform. Leveraged cutting-edge technologies including Go,
                    Terraform, and multiple AWS services to create a dynamic and
                    scalable infrastructure.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Robust Infrastructure Engineering:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Engineered a resilient and scalable infrastructure tailored
                    to support the intricate functionalities of the ZTX game.
                    Ensured a seamless experience for creators and communities
                    engaged in building, playing, and earning within the Web3
                    Metaverse.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Cloud Architecture and Optimization:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Showcased expertise in cloud architecture and infrastructure
                    management. Utilized Terraform for efficient provisioning
                    and orchestration, optimizing AWS services to meet the
                    specific requirements of the ZTX game. Contributed to the
                    realization of ZTX&apos;s vision, emphasizing innovation,
                    playability, and economic empowerment within the dynamic
                    Web3 Metaverse landscape.
                  </h3>
                </div>
              </div>
              <div className="job-content" onClick={() => setActiveJob(2)}>
                <h1 className="h1-sub">Senior Backend Engineer</h1>
                <h2 className="h2">1 yr & 6 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 2 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">
                    Innovative Solutions in Gas Estimation:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Spearheaded the development of Blocknative&apos;s Gas
                    Estimation Platform Engine, a groundbreaking tool in the
                    crypto industry. This platform stands as a cornerstone,
                    providing users with accurate Gas estimations to navigate
                    the dynamic crypto landscape with confidence, ensuring
                    informed decision-making.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Optimizing Core Functionalities:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Played a pivotal role in enhancing Blocknative&apos;s
                    infrastructure by significantly improving the Mempool
                    notification API. This critical backbone of the Explorer was
                    optimized for efficiency and reliability, resulting in a
                    more robust and responsive system.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    Empowering Communication and Integration:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Demonstrated ingenuity by designing and implementing the
                    Auction Gateway service, streamlining communication between
                    searchers and builders. This initiative not only contributed
                    to the overall efficiency of the ETH builder but also
                    fostered seamless integration with Quicknode, expanding the
                    reach and impact of both platforms in the crypto ecosystem.
                  </h3>
                </div>
              </div>
              <div className="job-content" onClick={() => setActiveJob(3)}>
                <h1 className="h1-sub">Senior Typescript Developer</h1>
                <h2 className="h2">8 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 3 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">
                    Empowering Substrate Blockchain Interaction:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Contributed significantly to the Substrate Contracts UI, a
                    web application designed to streamline the deployment and
                    interaction with WASM smart contracts on Substrate
                    blockchains, prominently featuring the FRAME Contracts
                    Pallet.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Enhancing User Experience:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Played a pivotal role in improving the user experience and
                    functionality of the Substrate Contracts UI. This
                    contribution directly impacted the usability and
                    effectiveness of a critical component within the Substrate
                    ecosystem.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    Collaborative Advancements in Blockchain Technology:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Actively collaborated with the Parity team to advance the
                    capabilities of Substrate, showcasing expertise in both
                    blockchain technology and web application development
                    specific to the blockchain domain.
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
