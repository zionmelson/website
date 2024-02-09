import calen from "../../assets/svg/calen.svg";

import python from "../../assets/svg/python.svg";
import javascript from "../../assets/svg/javascript.svg";
import azure from "../../assets/svg/azure.svg";
import docker from "../../assets/svg/docker.svg";
import postgres from "../../assets/svg/postgres.svg";
import django from "../../assets/svg/django.svg";
import star from "../../assets/svg/star.svg";

import logo from "../../assets/svg/learnmutiny.svg";

import "../../App.css";

export default function Richards() {
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
              Reed Richards
            </h2>
            <h3 className="h3">san francisco, ca</h3>
            <a
              href="https://learnmutiny.io/developers/0459bb"
              target="_blank"
              rel="noreferrer"
              style={{ marginTop: "1rem" }}
            >
              <span className="emoji-container" style={{ padding: "1rem" }}>
                see my full profile 😄
              </span>
            </a>
          </div>
          <div className="vertical-content" style={{ width: "65%" }}>
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
                id="docker-container"
                style={{
                  marginBottom: "1rem",
                  padding: "1rem",
                }}
              >
                <img src={docker} className="emoji-2" alt="calendar" />
                Docker
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
                id="django-container"
                style={{
                  marginBottom: "1rem",
                  padding: "1rem",
                }}
              >
                <img src={django} className="emoji-2" alt="calendar" />
                Django
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
              <h1 className="h1-sub" style={{ width: "100%" }}>
                Reed Richards
              </h1>
              <h2 className="h2">san francisco, ca</h2>
              <a
                href="https://learnmutiny.io/developers/0459bb"
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
                  id="docker-container"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                  }}
                >
                  <img src={docker} className="emoji-2" alt="calendar" />
                  Docker
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
                  id="django-container"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                  }}
                >
                  <img src={django} className="emoji-2" alt="calendar" />
                  Django
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
