import { useState } from "react";
import {
  FaPause,
  FaPlay,
  FaVolumeUp,
  FaVolumeDown,
  FaVolumeMute,
} from "react-icons/fa";

import Lottie from "lottie-react";
import voice from "../../assets/voice.json";

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
            <div className="vertical-content">
              <div
                className="vertical-content"
                style={{
                  marginTop: "5rem",
                }}
              >
                <h1 className="h1">Peaberry Wigglewhistle</h1>
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
                autoPlay
                ref={(el) => setVideoElement(el)}
                style={{ marginBottom: "1rem" }}
              >
                <source src="/src/assets/peaberry.mp3" type="audio/mpeg" />
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
            </div>
            <div
              className="vertical-content"
              style={{
                padding: "1rem",
                width: "50rem",
                marginTop: "3rem",
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
              NFT Ecosystem Architecture: Architected a comprehensive NFT
              ecosystem, including NFT games, generative NFT collections,
              no-code interactive NFT smart contract generators, and an NFT
              marketplace. Demonstrated expertise in designing and implementing
              complex, decentralized solutions.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
                textAlign: "left",
              }}
            >
              Agile Coaching and Best Practices: Actively coached team members
              in adopting Agile methodologies, coding best practices, and
              integrating artificial intelligence to enhance overall
              effectiveness. Fostered a collaborative and innovative development
              environment, driving continuous improvement.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
                textAlign: "left",
              }}
            >
              Technology Stack and Deployment Management: Deployed
              high-performing and scalable solutions utilizing a technology
              stack that included Docker, Hasura, Nuxt SSR, Vue.js, GraphQL,
              Postgres, and serverless functions. Managed virtual machines and
              established continuous deployment pipelines on both Azure and
              Google Cloud, showcasing proficiency in cloud platforms.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "2rem",
                textAlign: "left",
              }}
            >
              Developer Experience Enhancement: Improved developer experience by
              implementing continuous integration, PNPM monorepos, Eslint, and
              Prettier. Introduced tools and practices to streamline development
              processes and maintain code quality.
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
              Team Leadership and Development: Successfully recruited, coached,
              and led a team of developers in the creation of highly scalable
              and modern enterprise software solutions. Demonstrated strong
              leadership skills to nurture talent, foster collaboration, and
              drive collective success.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
                textAlign: "left",
              }}
            >
              Agile Methodologies Implementation: Spearheaded the implementation
              of Agile methodologies within the development process. As a
              result, revenue experienced remarkable growth, more than doubling
              within a single year. Applied Agile principles to enhance project
              efficiency, adaptability, and client satisfaction.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "2rem",
                textAlign: "left",
              }}
            >
              Enterprise Software Solutions: Played a pivotal role in the design
              and development of enterprise-level software solutions. Leveraged
              expertise in software architecture to create scalable, robust, and
              innovative solutions that met the demands of modern business
              environments.
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
              Architectural Leadership: Spearheaded the architectural design of
              enterprise-grade mobile and web applications, utilizing
              cutting-edge technologies such as React, Angular, Ionic Framework,
              Redux, and Node.js. Demonstrated expertise in creating robust and
              scalable solutions that align with industry best practices.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
                textAlign: "left",
              }}
            >
              Blockchain Deployment: Successfully deployed a private blockchain
              testnet and developed a wallet application, showcasing proficiency
              in blockchain technology. Implemented secure and efficient
              solutions to meet the demands of the rapidly evolving blockchain
              landscape.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "2rem",
                textAlign: "left",
              }}
            >
              Client Satisfaction and Recommendations: Achieved high levels of
              client satisfaction across diverse industries, including real
              estate, learning management systems, prescription drugs, online
              eBook libraries, medical gas, and oil and gas. Clients from
              various sectors recommended our services, highlighting the quality
              and impact of our solutions.
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
            <Lottie animationData={voice} />
            <audio
              autoPlay
              ref={(el) => setVideoElement(el)}
              style={{ marginBottom: "0.5rem" }}
            >
              <source src="/src/assets/peaberry.mp3" type="audio/mpeg" />
            </audio>
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
                NFT Ecosystem Architecture: Architected a comprehensive NFT
                ecosystem, including NFT games, generative NFT collections,
                no-code interactive NFT smart contract generators, and an NFT
                marketplace. Demonstrated expertise in designing and
                implementing complex, decentralized solutions.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                  textAlign: "left",
                }}
              >
                Agile Coaching and Best Practices: Actively coached team members
                in adopting Agile methodologies, coding best practices, and
                integrating artificial intelligence to enhance overall
                effectiveness. Fostered a collaborative and innovative
                development environment, driving continuous improvement.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                  textAlign: "left",
                }}
              >
                Technology Stack and Deployment Management: Deployed
                high-performing and scalable solutions utilizing a technology
                stack that included Docker, Hasura, Nuxt SSR, Vue.js, GraphQL,
                Postgres, and serverless functions. Managed virtual machines and
                established continuous deployment pipelines on both Azure and
                Google Cloud, showcasing proficiency in cloud platforms.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "2rem",
                  textAlign: "left",
                }}
              >
                Developer Experience Enhancement: Improved developer experience
                by implementing continuous integration, PNPM monorepos, Eslint,
                and Prettier. Introduced tools and practices to streamline
                development processes and maintain code quality.
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
                Team Leadership and Development: Successfully recruited,
                coached, and led a team of developers in the creation of highly
                scalable and modern enterprise software solutions. Demonstrated
                strong leadership skills to nurture talent, foster
                collaboration, and drive collective success.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                  textAlign: "left",
                }}
              >
                Agile Methodologies Implementation: Spearheaded the
                implementation of Agile methodologies within the development
                process. As a result, revenue experienced remarkable growth,
                more than doubling within a single year. Applied Agile
                principles to enhance project efficiency, adaptability, and
                client satisfaction.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "2rem",
                  textAlign: "left",
                }}
              >
                Enterprise Software Solutions: Played a pivotal role in the
                design and development of enterprise-level software solutions.
                Leveraged expertise in software architecture to create scalable,
                robust, and innovative solutions that met the demands of modern
                business environments.
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
                Architectural Leadership: Spearheaded the architectural design
                of enterprise-grade mobile and web applications, utilizing
                cutting-edge technologies such as React, Angular, Ionic
                Framework, Redux, and Node.js. Demonstrated expertise in
                creating robust and scalable solutions that align with industry
                best practices.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                  textAlign: "left",
                }}
              >
                Blockchain Deployment: Successfully deployed a private
                blockchain testnet and developed a wallet application,
                showcasing proficiency in blockchain technology. Implemented
                secure and efficient solutions to meet the demands of the
                rapidly evolving blockchain landscape.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "2rem",
                  textAlign: "left",
                }}
              >
                Client Satisfaction and Recommendations: Achieved high levels of
                client satisfaction across diverse industries, including real
                estate, learning management systems, prescription drugs, online
                eBook libraries, medical gas, and oil and gas. Clients from
                various sectors recommended our services, highlighting the
                quality and impact of our solutions.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
