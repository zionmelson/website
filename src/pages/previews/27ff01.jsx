import calen from "../../assets/svg/calen.svg";

import react from "../../assets/svg/react.svg";
import java from "../../assets/svg/java.svg";
import typescript from "../../assets/svg/typescript.svg";
import javascript from "../../assets/svg/javascript.svg";
import elastic from "../../assets/svg/elastic.svg";
import postgres from "../../assets/svg/postgres.svg";
import star from "../../assets/svg/star.svg";

import logo from "../../assets/svg/learnmutiny.svg";

import "../../App.css";

export default function Grimm() {
  return (
    <>
      {/* desktop */}
      <div className="desktop">
        <div
          className="dev-info"
          style={{
            padding: "1rem",
            border: "1px",
            borderRadius: "1rem",
            marginBottom: "2rem",
          }}
        >
          <div className="vertical-content">
            <h2 className="h2" style={{ width: "100%" }}>
              Benjamin Grimm
            </h2>
            <h3 className="h3">hawaii</h3>
            <a
              href="https://learnmutiny.io/developers/27ff01"
              target="_blank"
              rel="noreferrer"
              style={{ marginTop: "1rem" }}
            >
              <span className="emoji-container" style={{ padding: "1rem" }}>
                see my full profile 😄
              </span>
            </a>
          </div>
          <div className="vertical-content" style={{ width: "60%" }}>
            <h2 className="h2" style={{ marginBottom: "1rem" }}>
              top skills
            </h2>
            <div
              className="horizontal-content-small"
              style={{
                width: "60%",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
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
                id="java-container"
                style={{
                  marginBottom: "1rem",
                  padding: "1rem",
                }}
              >
                <img src={java} className="emoji-2" alt="calendar" />
                Java
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
                id="elastic-container"
                style={{
                  marginBottom: "1rem",
                  padding: "1rem",
                }}
              >
                <img src={elastic} className="emoji-2" alt="calendar" />
                Elastic Search
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
            </div>
          </div>

          <div className="vertical-content">
            <span
              className="emoji-container"
              id="star-container"
              style={{ marginBottom: "1rem", padding: "1rem" }}
            >
              <img src={star} className="emoji-2" alt="ai" />
              top developer
            </span>
            <span
              className="emoji-container"
              id="csuite"
              style={{
                marginBottom: "1rem",
                padding: "1rem",
                width: "100%",
              }}
            >
              senior developer
            </span>
            <a
              href="https://calendly.com/learnmutiny/company-final-steps"
              target="_blank"
              rel="noreferrer"
              style={{
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
                Meet with me
              </span>
            </a>
            <img src={logo} alt="learnmutiny" />
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="mobile">
        <div
          className="dev-info"
          style={{
            padding: "1rem",
            border: "1px",
            borderRadius: "1rem",
            marginBottom: "2rem",
          }}
        >
          <div className="vertical-content">
            <div className="vertical-content" style={{ marginBottom: "1rem" }}>
              <h1 className="h1" style={{ width: "100%" }}>
                Benjamin Grimm
              </h1>
              <h2 className="h2">hawaii</h2>
              <a
                href="https://learnmutiny.io/developers/27ff01"
                target="_blank"
                rel="noreferrer"
                style={{ marginTop: "1rem" }}
              >
                <span className="emoji-container" style={{ padding: "1rem" }}>
                  see my full profile 😄
                </span>
              </a>
            </div>
            <div className="vertical-content">
              <h2 className="h2" style={{ marginBottom: "1rem" }}>
                top skills
              </h2>
              <div
                className="horizontal-content-small"
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
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
                  id="java-container"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                  }}
                >
                  <img src={java} className="emoji-2" alt="calendar" />
                  Java
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
                  id="elastic-container"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                  }}
                >
                  <img src={elastic} className="emoji-2" alt="calendar" />
                  Elastic Search
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
              </div>
            </div>
            <div className="vertical-content" style={{}}>
              <div className="vertical-content">
                <span
                  className="emoji-container"
                  id="star-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <img src={star} className="emoji-2" alt="ai" />
                  top developer
                </span>
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
                <a
                  href="https://calendly.com/learnmutiny/company-final-steps"
                  target="_blank"
                  rel="noreferrer"
                  style={{
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
                    Meet with me
                  </span>
                </a>
                <img src={logo} alt="learnmutiny" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
