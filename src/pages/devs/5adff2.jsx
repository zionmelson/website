import calen from "../../assets/svg/calen.svg";

import python from "../../assets/svg/python.svg";
import mysql from "../../assets/svg/mysql.svg";
import mongodb from "../../assets/svg/mongodb.svg";
import java from "../../assets/svg/java.svg";
import rust from "../../assets/svg/rust.svg";
import docker from "../../assets/svg/docker.svg";

import "../../App.css";

export default function Douglas() {
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
              Arthur Douglas
            </h2>
            <h3 className="h3">atlanta, ga</h3>
            <a
              href="https://learnmutiny.io/developers/5adff2"
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
                id="mongodb-container"
                style={{
                  marginBottom: "1rem",
                  padding: "1rem",
                }}
              >
                <img src={mongodb} className="emoji-2" alt="calendar" />
                MongoDB
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
                Arthur Douglas
              </h1>
              <h2 className="h2">atlanta, ga</h2>
              <a
                href="https://learnmutiny.io/developers/5adff2"
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
                  id="mongodb-container"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                  }}
                >
                  <img src={mongodb} className="emoji-2" alt="calendar" />
                  MongoDB
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
          </div>
        </div>
      </div>
    </>
  );
}
