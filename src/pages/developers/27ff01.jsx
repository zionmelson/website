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
import node from "../../assets/node.svg";
import ts from "../../assets/ts.svg";
import java from "../../assets/java.svg";
import elastic from "../../assets/elastic.svg";
import postgres from "../../assets/postgres.svg";

export default function Trashwee() {
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
                  marginTop: "3rem",
                }}
              >
                <h1 className="h1">Trashwee Sockborn</h1>
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
                <source src="/src/assets/trashwee.mp3" type="audio/mpeg" />
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
                  id="senior"
                  style={{ width: "90%", marginBottom: "1rem" }}
                >
                  senior
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
                    id="ts-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={ts} className="emoji-2" alt="calendar" />
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
                    <img src={java} className="emoji-2" alt="calendar" />
                    Java
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
                    <img src={elastic} className="emoji-2" alt="calendar" />
                    Elasticsearch
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
                    <img src={postgres} className="emoji-2" alt="calendar" />
                    PostgresQL
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
                    $160,000
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
              Senior Full Stack Software Engineer
            </h1>
            <h2
              className="h2"
              style={{
                marginBottom: "1rem",
                textAlign: "left",
              }}
            >
              1 yr 6 mos
            </h2>
            <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
                textAlign: "left",
              }}
            >
              Project Leadership and Technology Transition: Spearheaded the
              successful end-to-end execution of 5 projects, leading the team
              through a transition from jQuery to TypeScript/React, resulting in
              enhanced system efficiency and improved codebase maintainability.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
                textAlign: "left",
              }}
            >
              Operational Modernization and App Development: Led the operational
              modernization of 24/7 distribution operations by developing a
              driver routing/delivery app. Implemented critical functionalities
              such as airfreight tracking, driver check-in and inspection,
              invoice revision, and store chat apps, contributing to operational
              excellence.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "2rem",
                textAlign: "left",
              }}
            >
              Reusable Component Library for Legacy System Transition: Created a
              robust library comprising 50+ reusable React components,
              facilitating a smooth transition from legacy systems. This
              initiative ensured consistency and scalability in development
              practices across projects.
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
              Full Stack Software Engineer
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
              Financial Transaction Expertise: Integrated and managed Stripe
              billing/payment processing, overseeing transactions totaling
              $40MM+ annually for thousands of customers, ensuring secure and
              efficient financial operations.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
                textAlign: "left",
              }}
            >
              Optimized Housekeeping Operations: Designed and implemented a
              sophisticated scheduling algorithm for housekeepers&apos; daily
              room cleaning, leveraging recursive boolean constraint
              satisfaction. This algorithm considers employee profiles,
              availability, preferences, and routing across multiple resorts,
              optimizing housekeeping workflows.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "2rem",
                textAlign: "left",
              }}
            >
              Innovative System Development and Integration: Led the
              architecture, development, and integration of key functionalities,
              including a dynamic price forecaster for 200+ rooms, API
              integrations with platforms like Airbnb, VRBO, and BookingPal, and
              the creation of Operations, Owners, and Guest Portals. These
              systems, comprising web apps, REST endpoints, and Node.js APIs,
              have collectively generated $1MM+ in annual value, enhancing
              operational efficiency and guest experience.
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
              Full Stack Software Engineer
            </h1>
            <h2
              className="h2"
              style={{
                marginBottom: "1rem",
                textAlign: "left",
              }}
            >
              1 yr 7 mos
            </h2>
            <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
                textAlign: "left",
              }}
            >
              MLS System Enhancement and Global Collaboration: Spearheaded R&D
              and prototyping initiatives to refresh a legacy real estate agent
              MLS system, serving 2,000+ Hawaii agents. Collaborated seamlessly
              with an overseas cross-functional team in Ukraine, contributing to
              the system&apos;s modernization and improved functionality.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
                textAlign: "left",
              }}
            >
              Advanced Search Feature Development: Engineered an advanced
              Elasticsearch-powered search feature with real-time suggestions,
              transforming the MLS system&apos;s search capabilities across
              hundreds of fields. This enhancement significantly streamlined
              property discovery for agents.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "0.5rem",
                textAlign: "left",
              }}
            >
              Innovative Portal and OCR Data Entry Program: Prototyped an
              interactive portal enabling real estate agents to send curated
              searches, monitor client engagement, and discuss property listings
              via chat. Additionally, developed a tab-to-complete OCR data entry
              program, optimizing the processing of over 20,000 semi-structured
              tax conveyance documents monthly, resulting in a substantial
              reduction in keystrokes.
            </h3>
            <h3
              className="h3"
              style={{
                marginBottom: "2rem",
                textAlign: "left",
              }}
            >
              Monetized Data API Implementation: Successfully created and
              productionized a monetized data API, providing insurance companies
              with valuable MLS and TMK data. This initiative not only enhanced
              data accessibility but also introduced a new revenue stream for
              the organization.
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
            Trashwee Sockborn
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
              <source src="/src/assets/trashwee.mp3" type="audio/mpeg" />
              Your browser does not support HTML video.
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
                  id="senior"
                  style={{ width: "90%", marginBottom: "1rem" }}
                >
                  senior
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
                    id="ts-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={ts} className="emoji-2" alt="calendar" />
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
                    <img src={java} className="emoji-2" alt="calendar" />
                    Java
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
                    <img src={elastic} className="emoji-2" alt="calendar" />
                    Elasticsearch
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
                    <img src={postgres} className="emoji-2" alt="calendar" />
                    PostgresQL
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
                    $160,000
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
                Senior Full Stack Software Engineer
              </h1>
              <h2
                className="h2"
                style={{
                  marginBottom: "1rem",
                  textAlign: "left",
                }}
              >
                1 yr 6 mos
              </h2>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                  textAlign: "left",
                }}
              >
                Project Leadership and Technology Transition: Spearheaded the
                successful end-to-end execution of 5 projects, leading the team
                through a transition from jQuery to TypeScript/React, resulting
                in enhanced system efficiency and improved codebase
                maintainability.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                  textAlign: "left",
                }}
              >
                Operational Modernization and App Development: Led the
                operational modernization of 24/7 distribution operations by
                developing a driver routing/delivery app. Implemented critical
                functionalities such as airfreight tracking, driver check-in and
                inspection, invoice revision, and store chat apps, contributing
                to operational excellence.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "2rem",
                  textAlign: "left",
                }}
              >
                Reusable Component Library for Legacy System Transition: Created
                a robust library comprising 50+ reusable React components,
                facilitating a smooth transition from legacy systems. This
                initiative ensured consistency and scalability in development
                practices across projects.
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
                Full Stack Software Engineer
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
                Financial Transaction Expertise: Integrated and managed Stripe
                billing/payment processing, overseeing transactions totaling
                $40MM+ annually for thousands of customers, ensuring secure and
                efficient financial operations.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                  textAlign: "left",
                }}
              >
                Optimized Housekeeping Operations: Designed and implemented a
                sophisticated scheduling algorithm for housekeepers&apos; daily
                room cleaning, leveraging recursive boolean constraint
                satisfaction. This algorithm considers employee profiles,
                availability, preferences, and routing across multiple resorts,
                optimizing housekeeping workflows.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "2rem",
                  textAlign: "left",
                }}
              >
                Innovative System Development and Integration: Led the
                architecture, development, and integration of key
                functionalities, including a dynamic price forecaster for 200+
                rooms, API integrations with platforms like Airbnb, VRBO, and
                BookingPal, and the creation of Operations, Owners, and Guest
                Portals. These systems, comprising web apps, REST endpoints, and
                Node.js APIs, have collectively generated $1MM+ in annual value,
                enhancing operational efficiency and guest experience.
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
                Full Stack Software Engineer
              </h1>
              <h2
                className="h2"
                style={{
                  marginBottom: "1rem",
                  textAlign: "left",
                }}
              >
                1 yr 7 mos
              </h2>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                  textAlign: "left",
                }}
              >
                Financial Transaction Expertise: Integrated and managed Stripe
                billing/payment processing, overseeing transactions totaling
                $40MM+ annually for thousands of customers, ensuring secure and
                efficient financial operations.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "0.5rem",
                  textAlign: "left",
                }}
              >
                Optimized Housekeeping Operations: Designed and implemented a
                sophisticated scheduling algorithm for housekeepers&apos; daily
                room cleaning, leveraging recursive boolean constraint
                satisfaction. This algorithm considers employee profiles,
                availability, preferences, and routing across multiple resorts,
                optimizing housekeeping workflows.
              </h3>
              <h3
                className="h3"
                style={{
                  marginBottom: "2rem",
                  textAlign: "left",
                }}
              >
                Innovative System Development and Integration: Led the
                architecture, development, and integration of key
                functionalities, including a dynamic price forecaster for 200+
                rooms, API integrations with platforms like Airbnb, VRBO, and
                BookingPal, and the creation of Operations, Owners, and Guest
                Portals. These systems, comprising web apps, REST endpoints, and
                Node.js APIs, have collectively generated $1MM+ in annual value,
                enhancing operational efficiency and guest experience.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
