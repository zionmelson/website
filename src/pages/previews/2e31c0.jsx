import calen from "../../assets/svg/calen.svg";

import python from "../../assets/svg/python.svg";
import aws from "../../assets/svg/aws.svg";
import mysql from "../../assets/svg/mysql.svg";
import typescript from "../../assets/svg/typescript.svg";
import go from "../../assets/svg/go.svg";
import docker from "../../assets/svg/docker.svg";

import logo from "../../assets/svg/learnmutiny.svg";

import "../../App.css";

export default function Queen() {
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
              Oliver Queen
            </h2>
            <h3 className="h3">los angeles, ca</h3>
            <a
              href="https://learnmutiny.io/developers/2e31c0"
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
                width: "60%",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
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
                id="mysql-container"
                style={{
                  marginBottom: "1rem",
                  padding: "1rem",
                }}
              >
                <img src={mysql} className="emoji-2" alt="calendar" />
                MySQL
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
                id="docker-container"
                style={{
                  marginBottom: "1rem",
                  padding: "1rem",
                }}
              >
                <img src={docker} className="emoji-2" alt="calendar" />
                Docker
              </span>
            </div>
          </div>

          <div className="vertical-content">
            <span
              className="emoji-container"
              id="csuite"
              style={{
                marginBottom: "1rem",
                padding: "1rem",
                width: "100%",
              }}
            >
              base level developer
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
                Oliver Queen
              </h1>
              <h2 className="h2">los angeles, ca</h2>
              <a
                href="https://learnmutiny.io/developers/2e31c0"
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
                  id="mysql-container"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                  }}
                >
                  <img src={mysql} className="emoji-2" alt="calendar" />
                  MySQL
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
                  id="docker-container"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                  }}
                >
                  <img src={docker} className="emoji-2" alt="calendar" />
                  Docker
                </span>
              </div>
            </div>
            <div className="vertical-content" style={{}}>
              <div className="vertical-content">
                <span
                  className="emoji-container"
                  id="midtier"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                    width: "100%",
                  }}
                >
                  base level developer
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
