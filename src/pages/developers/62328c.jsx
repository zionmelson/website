import { useState } from "react";
import {
  FaPause,
  FaPlay,
  FaVolumeUp,
  FaVolumeDown,
  FaVolumeMute,
} from "react-icons/fa";

import calen from "../../assets/calen.svg";

import react from "../../assets/react.svg";
import redux from "../../assets/redux.svg";
import node from "../../assets/node.svg";
import azure from "../../assets/azure.svg";
import gcp from "../../assets/gcp.svg";
import sol from "../../assets/sol.svg";
import graph from "../../assets/graph.svg";

export default function Peaberry() {
  const [videoPaused, setVideoPaused] = useState(true);
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
                Peaberry Wigglewhistle
              </h1>
              <h3
                className="h3"
                style={{
                  marginBottom: "1rem",
                }}
              >
                full-stack developer
              </h3>

              <video
                id="video"
                width="650"
                autoPlay
                loop
                ref={(el) => setVideoElement(el)}
                style={{ marginBottom: "1rem" }}
              >
                <source src="/src/assets/peaberry.mp4" type="video/mp4" />
                Your browser does not support HTML video.
              </video>
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
                  id="csuite"
                  style={{ width: "90%", marginBottom: "1rem" }}
                >
                  c-suite
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
                    style={{
                      display: "flex",
                      marginBottom: "1rem",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <img src={azure} className="emoji-2" alt="calendar" />
                    Azure
                  </span>
                  <span
                    className="emoji-container"
                    style={{
                      display: "flex",

                      marginBottom: "1rem",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <img src={gcp} className="emoji-2" alt="calendar" />
                    Google Cloud
                  </span>
                  <span
                    className="emoji-container"
                    id="solidity-container"
                    style={{
                      display: "flex",

                      marginBottom: "1rem",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <img src={sol} className="emoji-2" alt="calendar" />
                    Solidity
                  </span>
                  <span
                    className="emoji-container"
                    id="graphql-container"
                    style={{
                      display: "flex",

                      marginBottom: "1rem",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <img src={graph} className="emoji-2" alt="calendar" />
                    GraphQL
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
                    $150,000
                  </h3>
                </span>

                <span
                  className="emoji-container"
                  style={{ width: "90%", marginBottom: "1rem" }}
                >
                  <h4 className="h4">maximum</h4>
                  <h3 className="h3" style={{ paddingLeft: "4rem" }}>
                    $200,000
                  </h3>
                </span>
                <span
                  className="emoji-container"
                  style={{ width: "90%", marginBottom: "1rem" }}
                >
                  W-2
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
              Lead Software Architect
            </h1>
            <h2
              className="h2"
              style={{
                marginBottom: "1rem",
                textAlign: "left",
              }}
            >
              1 yr 9 mos
            </h2>
            <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
                textAlign: "left",
              }}
            >
              Architected NFT games, generative NFT collections, no code
              interactive NFT smart contract generators, and an NFT marketplace.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
                textAlign: "left",
              }}
            >
              Coached team members to follow Agile methodologies, coding best
              practices, and leverage artificial intelligence to enhance
              effectiveness.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
                textAlign: "left",
              }}
            >
              Deployed high performing and scalable solutions using Docker,
              Hasura, Nuxt SSR, Vue.js, GraphQL, Postgres, and serverless
              functions. Managed VMs and continuous deployment pipelines on
              Azure and Google Cloud.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "2rem",
                textAlign: "left",
              }}
            >
              Improved developer UX with the introduction of CI, PNPM monorepos,
              Eslint and Prettier.
            </h3>
          </div>
          <div
            className="vertical-content"
            style={{ alignItems: "flex-start", marginRight: "20rem" }}
          >
            <h1
              className="h1-sub"
              style={{
                textAlign: "left",
              }}
            >
              Lead Software Architect
            </h1>
            <h2
              className="h2"
              style={{
                marginBottom: "1rem",
                textAlign: "left",
              }}
            >
              2 yrs 4 mos
            </h2>
            <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
                textAlign: "left",
              }}
            >
              Recruited, coached, and led developers as we built highly scalable
              and modern enterprise software solutions.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "2rem",
                textAlign: "left",
              }}
            >
              Spearheading the implementation of Agile methodologies, revenue
              was more than doubled within a single year.
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
              Founder, Lead Full Stack Developer
            </h1>
            <h2
              className="h2"
              style={{
                marginBottom: "1rem",
                textAlign: "left",
              }}
            >
              6 yrs 3 mos
            </h2>
            <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
                textAlign: "left",
              }}
            >
              Architected enterprise mobile and web applications. Used state of
              the art technologies such as React, Angular, Ionic Framework,
              Redux, and Node.js.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
                textAlign: "left",
              }}
            >
              Deployed a private blockchain testnet and wallet app.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "2rem",
                textAlign: "left",
              }}
            >
              Happy clients recommended our services across multiple industries:
              Real estate, learning management systems, prescription drugs,
              online eBook library, medical gas, oil and gas, reverse logistics…
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
            Peaberry Wigglewhistle
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
            <video
              id="video"
              autoPlay
              loop
              ref={(el) => setVideoElement(el)}
              style={{ marginBottom: "0.5rem" }}
            >
              <source src="/src/assets/peaberry.mp4" type="video/mp4" />
              Your browser does not support HTML video.
            </video>
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
                  style={{ width: "90%", marginBottom: "1rem" }}
                >
                  c-suite
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
                    style={{
                      display: "flex",
                      marginBottom: "1rem",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <img src={azure} className="emoji-2" alt="calendar" />
                    Azure
                  </span>
                  <span
                    className="emoji-container"
                    style={{
                      display: "flex",

                      marginBottom: "1rem",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <img src={gcp} className="emoji-2" alt="calendar" />
                    Google Cloud
                  </span>
                  <span
                    className="emoji-container"
                    id="solidity-container"
                    style={{
                      display: "flex",

                      marginBottom: "1rem",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <img src={sol} className="emoji-2" alt="calendar" />
                    Solidity
                  </span>
                  <span
                    className="emoji-container"
                    id="graphql-container"
                    style={{
                      display: "flex",

                      marginBottom: "1rem",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <img src={graph} className="emoji-2" alt="calendar" />
                    GraphQL
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
                    $150,000
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
                    $200,000
                  </h3>
                </span>
                <span
                  className="emoji-container"
                  style={{ width: "90%", marginBottom: "1rem" }}
                >
                  W-2
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
                Lead Software Architect
              </h1>
              <h2
                className="h2"
                style={{
                  marginBottom: "1rem",
                  textAlign: "left",
                }}
              >
                1 yr 9 mos
              </h2>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                  textAlign: "left",
                }}
              >
                Architected NFT games, generative NFT collections, no code
                interactive NFT smart contract generators, and an NFT
                marketplace.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                  textAlign: "left",
                }}
              >
                Coached team members to follow Agile methodologies, coding best
                practices, and leverage artificial intelligence to enhance
                effectiveness.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                  textAlign: "left",
                }}
              >
                Deployed high performing and scalable solutions using Docker,
                Hasura, Nuxt SSR, Vue.js, GraphQL, Postgres, and serverless
                functions. Managed VMs and continuous deployment pipelines on
                Azure and Google Cloud.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "2rem",
                  textAlign: "left",
                }}
              >
                Improved developer UX with the introduction of CI, PNPM
                monorepos, Eslint and Prettier.
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
                Lead Software Architect
              </h1>
              <h2
                className="h2"
                style={{
                  marginBottom: "1rem",
                  textAlign: "left",
                }}
              >
                2 yrs 4 mos
              </h2>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                  textAlign: "left",
                }}
              >
                Recruited, coached, and led developers as we built highly
                scalable and modern enterprise software solutions.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "2rem",
                  textAlign: "left",
                }}
              >
                Spearheading the implementation of Agile methodologies, revenue
                was more than doubled within a single year.
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
                Founder, Lead Full Stack Developer
              </h1>
              <h2
                className="h2"
                style={{
                  marginBottom: "1rem",
                  textAlign: "left",
                }}
              >
                6 yrs 3 mos
              </h2>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                  textAlign: "left",
                }}
              >
                Architected enterprise mobile and web applications. Used state
                of the art technologies such as React, Angular, Ionic Framework,
                Redux, and Node.js.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                  textAlign: "left",
                }}
              >
                Deployed a private blockchain testnet and wallet app.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "2rem",
                  textAlign: "left",
                }}
              >
                Happy clients recommended our services across multiple
                industries: Real estate, learning management systems,
                prescription drugs, online eBook library, medical gas, oil and
                gas, reverse logistics…
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
