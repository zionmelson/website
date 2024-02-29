import { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

import lucas from "../../assets/mp3/lucas.mp3";
import calen from "../../assets/svg/calen.svg";

import Lottie from "lottie-react";
import voice from "../../assets/json/voice.json";

import react from "../../assets/svg/react.svg";
import typescript from "../../assets/svg/typescript.svg";
import postgres from "../../assets/svg/postgres.svg";
import dynamodb from "../../assets/svg/dynamodb.svg";
import aws from "../../assets/svg/aws.svg";
import firebase from "../../assets/svg/firebase.svg";
import netlify from "../../assets/svg/netlify.svg";

export default function Lucas() {
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
                  Carl Lucas{" "}
                </h1>
              </div>
              <Lottie animationData={voice} />
              <audio
                ref={(el) => setVideoElement(el)}
                style={{ marginBottom: "0.5rem" }}
              >
                <source src={lucas} type="audio/mpeg" />
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
                    id="dynamodb-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={dynamodb} className="emoji-2" alt="calendar" />
                    DynamoDB
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
                    id="netlify-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={netlify} className="emoji-2" alt="calendar" />
                    Netlify
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
                    9+ years of experience
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
                  <h4 className="h4">minimum salary: $70,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">maxmimum salary: $135,000</h4>
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
                <h2 className="h2">3 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 1 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">Feature Development Expert:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Spearheaded the implementation of new features for the data
                    edtech startup Empath using TypeScript and React.
                    Innovatively enabled image, video, and file uploading
                    functionalities utilizing Uppy, demonstrating expertise in
                    front-end development and design. Contributed to building
                    the backend with AWS Amplify, including a fuzzy-searched
                    autocomplete global search bar and Dashboard/Courses
                    functionalities.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Full-Stack Web Development:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Led the creation of a comprehensive marketing website for
                    the cybersecurity startup … from the ground up. Utilized
                    React, TypeScript, GatsbyJS, and Netlify, integrating mdx
                    for blog posts and incorporating animations using the aos
                    library. Successfully migrated the entire company website
                    from Gatsby Cloud to Netlify, showcasing skills in
                    full-stack web development, bug fixing, and ongoing
                    maintenance.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Tech Stack Mastery:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Leveraged a skill set encompassing JavaScript, React.js,
                    TypeScript, and front-end design to deliver high-quality
                    results in multiple projects. Demonstrated a keen eye for
                    user experience (UX) and played a key role in the success of
                    data edtech and cybersecurity startups through the
                    implementation of innovative features and website
                    development.
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
                <h1 className="h1-sub">Senior Software Engineer</h1>
                <h2 className="h2">1 yr & 1 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 2 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">Full-Stack Frontend Architect:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Led the development of the entire frontend and its
                    architecture for the industry-changing work/hire platform ….
                    Utilized TypeScript and React to construct every module of
                    reusable UI components in WCAG compliant and semantic code,
                    ensuring consistency across the project. Independently
                    managed the frontend within a small team, collaborating with
                    backend developers and PMs as QA/testers.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Cross-Functional Collaboration:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Worked closely with backend developers to create new data
                    types and columns in PostgreSQL, integrating frontend
                    interfaces with Apollo GraphQL. Collaborated with a
                    third-party mobile development team on data/user flows via
                    Slack, emphasizing effective communication and coordination.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    Mentorship and Optimization Specialist:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Guided fellow team members on React/Typescript and frontend
                    development paradigms through pair programming. Optimized
                    application performance by identifying and resolving
                    bottlenecks, employing code optimization, and fine-tuning.
                    Actively participated in Agile development processes,
                    contributing to daily stand-ups, sprint planning, and
                    retrospective meetings. Engaged in CEO/Leadership team
                    meetings to discuss future aspects of the project and
                    upcoming work.
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
                <h1 className="h1-sub">Senior Fullstack Engineer</h1>
                <h2 className="h2">9 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 3 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">Fullstack Feature Architect:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Designed and implemented new features for a client project,
                    optimizing and refining old user flows and business logic in
                    React with a focus on WCAG compliant and semantic code.
                    Spearheaded the creation of new UI/UX designs using Figma,
                    ensuring a seamless and user-friendly experience.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Technical Leadership and Mentorship:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Provided guidance and pair programming sessions for
                    contracted Mid Level engineers, sharing expertise in
                    React/Typescript and frontend development best practices.
                    Configured Jest for the project, modularizing existing
                    components with dedicated test folders, and wrote
                    comprehensive unit and integrated tests for robust testing
                    coverage.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    Frontend Re-Architect and Backend Transition Specialist:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Led the re-architecture of the frontend and played a pivotal
                    role in transitioning the backend from Amplify to PostgreSQL
                    and a custom backend. Engaged in client-facing meetings to
                    discuss future project aspects and work.
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
            Carl Lucas
          </h1>
          <div className="horizontal-content">
            <Lottie animationData={voice} />
            <audio
              ref={(el) => setVideoElement(el)}
              style={{ marginBottom: "0.5rem" }}
            >
              <source src={lucas} type="audio/mpeg" />
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
                    id="dynamodb-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={dynamodb} className="emoji-2" alt="calendar" />
                    DynamoDB
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
                    id="netlify-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={netlify} className="emoji-2" alt="calendar" />
                    Netlify
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
                    9+ years of experience
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
                  <h4 className="h4">minimum salary: $70,000</h4>
                </span>
                <span
                  className="emoji-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <h4 className="h4">maximum salary: $135,000</h4>
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
                <h2 className="h2">3 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 1 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">Feature Development Expert:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Spearheaded the implementation of new features for the data
                    edtech startup Empath using TypeScript and React.
                    Innovatively enabled image, video, and file uploading
                    functionalities utilizing Uppy, demonstrating expertise in
                    front-end development and design. Contributed to building
                    the backend with AWS Amplify, including a fuzzy-searched
                    autocomplete global search bar and Dashboard/Courses
                    functionalities.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Full-Stack Web Development:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Led the creation of a comprehensive marketing website for
                    the cybersecurity startup … from the ground up. Utilized
                    React, TypeScript, GatsbyJS, and Netlify, integrating mdx
                    for blog posts and incorporating animations using the aos
                    library. Successfully migrated the entire company website
                    from Gatsby Cloud to Netlify, showcasing skills in
                    full-stack web development, bug fixing, and ongoing
                    maintenance.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Tech Stack Mastery:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Leveraged a skill set encompassing JavaScript, React.js,
                    TypeScript, and front-end design to deliver high-quality
                    results in multiple projects. Demonstrated a keen eye for
                    user experience (UX) and played a key role in the success of
                    data edtech and cybersecurity startups through the
                    implementation of innovative features and website
                    development.
                  </h3>
                </div>
              </div>
              <div className="job-content" onClick={() => setActiveJob(2)}>
                <h1 className="h1-sub">Senior Software Engineer</h1>
                <h2 className="h2">1 yr & 1 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 2 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">Full-Stack Frontend Architect:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Led the development of the entire frontend and its
                    architecture for the industry-changing work/hire platform ….
                    Utilized TypeScript and React to construct every module of
                    reusable UI components in WCAG compliant and semantic code,
                    ensuring consistency across the project. Independently
                    managed the frontend within a small team, collaborating with
                    backend developers and PMs as QA/testers.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Cross-Functional Collaboration:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Worked closely with backend developers to create new data
                    types and columns in PostgreSQL, integrating frontend
                    interfaces with Apollo GraphQL. Collaborated with a
                    third-party mobile development team on data/user flows via
                    Slack, emphasizing effective communication and coordination.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    Mentorship and Optimization Specialist:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Guided fellow team members on React/Typescript and frontend
                    development paradigms through pair programming. Optimized
                    application performance by identifying and resolving
                    bottlenecks, employing code optimization, and fine-tuning.
                    Actively participated in Agile development processes,
                    contributing to daily stand-ups, sprint planning, and
                    retrospective meetings. Engaged in CEO/Leadership team
                    meetings to discuss future aspects of the project and
                    upcoming work.
                  </h3>
                </div>
              </div>
              <div className="job-content" onClick={() => setActiveJob(3)}>
                <h1 className="h1-sub">Senior Fullstack Engineer</h1>
                <h2 className="h2">9 mos</h2>
              </div>
              <div
                className="description-content"
                id={activeJob == 3 ? "active" : "inactive"}
              >
                <div className="job-description">
                  <h2 className="h2">Fullstack Feature Architect:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Designed and implemented new features for a client project,
                    optimizing and refining old user flows and business logic in
                    React with a focus on WCAG compliant and semantic code.
                    Spearheaded the creation of new UI/UX designs using Figma,
                    ensuring a seamless and user-friendly experience.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">Technical Leadership and Mentorship:</h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Provided guidance and pair programming sessions for
                    contracted Mid Level engineers, sharing expertise in
                    React/Typescript and frontend development best practices.
                    Configured Jest for the project, modularizing existing
                    components with dedicated test folders, and wrote
                    comprehensive unit and integrated tests for robust testing
                    coverage.
                  </h3>
                </div>

                <div className="job-description">
                  <h2 className="h2">
                    Frontend Re-Architect and Backend Transition Specialist:
                  </h2>
                  <h3
                    className="h3"
                    style={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    Led the re-architecture of the frontend and played a pivotal
                    role in transitioning the backend from Amplify to PostgreSQL
                    and a custom backend. Engaged in client-facing meetings to
                    discuss future project aspects and work.
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
