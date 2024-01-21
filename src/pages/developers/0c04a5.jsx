import { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

import secord from "../../assets/mp3/secord.mp3";
import calen from "../../assets/svg/calen.svg";

import Lottie from "lottie-react";
import voice from "../../assets/json/voice.json";

import flutter from "../../assets/svg/flutter.svg";
import gcp from "../../assets/svg/gcp.svg";
import firebase from "../../assets/svg/firebase.svg";
import dart from "../../assets/svg/dart.svg";
import javascript from "../../assets/svg/javascript.svg";
import html from "../../assets/svg/html.svg";
import css from "../../assets/svg/css.svg";

export default function Secord() {
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
                  Cliff Secord{" "}
                </h1>
              </div>
              <Lottie animationData={voice} />
              <audio
                ref={(el) => setVideoElement(el)}
                style={{ marginBottom: "0.5rem" }}
              >
                <source src={secord} type="audio/mpeg" />
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
                  border: "3px solid #000",
                  borderRadius: "1rem",
                }}
              >
                <h2 className="h2" style={{ marginBottom: "1rem" }}>
                  coding ability details
                </h2>
                <span
                  className="emoji-container"
                  id="midtier"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                    width: "100%",
                  }}
                >
                  base developer
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
                    id="firebase-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={firebase} className="emoji-2" alt="calendar" />
                    Firebase
                  </span>

                  <span
                    className="emoji-container"
                    id="dart-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={dart} className="emoji-2" alt="calendar" />
                    Dart
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
                    2+ years of experience
                  </span>
                  <span
                    className="emoji-container"
                    style={{ marginBottom: "1rem", padding: "1rem" }}
                  >
                    bootcamp
                  </span>
                </div>
              </div>
              <div
                className="vertical-content"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  margin: "0.5rem",
                  border: "3px solid #000",
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
                  <h4 className="h4">minimum salary: $100,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">maxmimum salary: $120,000</h4>
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
                <h1 className="h1-sub">Product Manager</h1>
                <h2 className="h2">3 yrs & 4 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 1 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">Strategic Product Leadership:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Formulated the vision, strategy, and roadmap for …, a
                    community-focused social platform dedicated to events.
                    Developed success metrics and conducted customer interviews
                    to shape the product direction. Designed a prototype to
                    align with … strategic goal of creating economic and
                    communal value for creators and communities.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Hands-On Engineering and Deployment:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Led the end-to-end development of the community-focused
                    social platform using Flutter and Firebase, deploying the
                    product to iOS and Android test stores. Demonstrated
                    proficiency in Flutter development to bring the vision to
                    life, ensuring a seamless user experience for both
                    platforms.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    Community Growth and Partnership Building:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Successfully grew the pre-launch community to over 3500
                    people, fostering organic growth and engagement. Cultivated
                    partnerships with 200+ creators and partners, contributing
                    to the development of a vibrant and active community around
                    the … platform.
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
                <h1 className="h1-sub">Platform Engineer</h1>
                <h2 className="h2">1 yr & 2 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 2 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">Technical Onboarding Expertise:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Played a pivotal role at …, a fintech leader in the
                    1-click-checkout market for web-based eCommerce. Specialized
                    in assisting customers during onboarding, ensuring a
                    seamless integration process, and serving as the first
                    responder to immediate technical issues.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    Software Implementation and Troubleshooting:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Prioritized responsibilities that involved implementing
                    software solutions and troubleshooting technical issues for
                    sellers. Collaborated with a diverse portfolio of over 200
                    clients, overseeing the installation and customization of
                    their checkout solutions.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Client Relationship Management:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Managed and nurtured long-term relationships with numerous
                    clients, strategically focusing on retention and consistent
                    growth of transaction volume week over week. Operated at the
                    intersection of sales and engineering teams, contributing to
                    the overall success of Fast by ensuring customer
                    satisfaction and fostering ongoing partnerships.
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
                <h1 className="h1-sub">Software Developer</h1>
                <h2 className="h2">5 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 3 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">
                    Full-time Immersive Development Program:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Engaged in a comprehensive apprenticeship at Momentum at
                    Morehouse, dedicating full-time efforts to an immersive
                    development program. The focus of the program centered on
                    honing essential skills for aspiring Software Developers.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Technical Skill Development:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Participated in a curriculum that reinforced proficiency in
                    key programming languages and frameworks, including HTML,
                    CSS, JavaScript, Python, and Django. Acquired hands-on
                    experience and practical knowledge to prepare for a
                    successful career in software development.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Culminating Team Project and Demo Day:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Applied acquired skills in a team project, showcasing the
                    ability to collaborate and deliver results. Contributed to
                    the cohort&apos;s success by presenting the project during
                    the cohort demo day, demonstrating the practical application
                    of learned concepts and technologies.
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
            Cliff Secord
          </h1>
          <div className="horizontal-content">
            <Lottie animationData={voice} />
            <audio
              ref={(el) => setVideoElement(el)}
              style={{ marginBottom: "0.5rem" }}
            >
              <source src={secord} type="audio/mpeg" />
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
                  border: "3px solid #000",
                  borderRadius: "1rem",
                }}
              >
                <h2 className="h2" style={{ marginBottom: "1rem" }}>
                  coding ability details
                </h2>
                <span
                  className="emoji-container"
                  id="midtier"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                    width: "100%",
                  }}
                >
                  base developer
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
                    id="firebase-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={firebase} className="emoji-2" alt="calendar" />
                    Firebase
                  </span>

                  <span
                    className="emoji-container"
                    id="dart-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={dart} className="emoji-2" alt="calendar" />
                    Dart
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
                    2+ years of experience
                  </span>
                  <span
                    className="emoji-container"
                    style={{ marginBottom: "1rem", padding: "1rem" }}
                  >
                    bootcamp
                  </span>
                </div>
              </div>
              <div
                className="vertical-content"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  margin: "0.5rem",
                  border: "3px solid #000",
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
                  <h4 className="h4">minimum salary: $100,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">maximum salary: $120,000</h4>
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
                <h1 className="h1-sub">Product Manager</h1>
                <h2 className="h2">3 yrs & 4 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 1 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">Strategic Product Leadership:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Formulated the vision, strategy, and roadmap for …, a
                    community-focused social platform dedicated to events.
                    Developed success metrics and conducted customer interviews
                    to shape the product direction. Designed a prototype to
                    align with … strategic goal of creating economic and
                    communal value for creators and communities.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Hands-On Engineering and Deployment:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Led the end-to-end development of the community-focused
                    social platform using Flutter and Firebase, deploying the
                    product to iOS and Android test stores. Demonstrated
                    proficiency in Flutter development to bring the vision to
                    life, ensuring a seamless user experience for both
                    platforms.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    Community Growth and Partnership Building:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Successfully grew the pre-launch community to over 3500
                    people, fostering organic growth and engagement. Cultivated
                    partnerships with 200+ creators and partners, contributing
                    to the development of a vibrant and active community around
                    the … platform.
                  </h3>
                </div>
              </div>
              <div className="job-content" onClick={() => setActiveJob(2)}>
                <h1 className="h1-sub">Platform Engineer</h1>
                <h2 className="h2">1 yr & 2 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 2 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">Technical Onboarding Expertise:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Played a pivotal role at …, a fintech leader in the
                    1-click-checkout market for web-based eCommerce. Specialized
                    in assisting customers during onboarding, ensuring a
                    seamless integration process, and serving as the first
                    responder to immediate technical issues.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    Software Implementation and Troubleshooting:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Prioritized responsibilities that involved implementing
                    software solutions and troubleshooting technical issues for
                    sellers. Collaborated with a diverse portfolio of over 200
                    clients, overseeing the installation and customization of
                    their checkout solutions.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Client Relationship Management:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Managed and nurtured long-term relationships with numerous
                    clients, strategically focusing on retention and consistent
                    growth of transaction volume week over week. Operated at the
                    intersection of sales and engineering teams, contributing to
                    the overall success of Fast by ensuring customer
                    satisfaction and fostering ongoing partnerships.
                  </h3>
                </div>
              </div>
              <div className="job-content" onClick={() => setActiveJob(3)}>
                <h1 className="h1-sub">Software Developer</h1>
                <h2 className="h2">5 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 3 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">
                    Full-time Immersive Development Program:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Engaged in a comprehensive apprenticeship at Momentum at
                    Morehouse, dedicating full-time efforts to an immersive
                    development program. The focus of the program centered on
                    honing essential skills for aspiring Software Developers.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Technical Skill Development:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Participated in a curriculum that reinforced proficiency in
                    key programming languages and frameworks, including HTML,
                    CSS, JavaScript, Python, and Django. Acquired hands-on
                    experience and practical knowledge to prepare for a
                    successful career in software development.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Culminating Team Project and Demo Day:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Applied acquired skills in a team project, showcasing the
                    ability to collaborate and deliver results. Contributed to
                    the cohort&apos;s success by presenting the project during
                    the cohort demo day, demonstrating the practical application
                    of learned concepts and technologies.
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
