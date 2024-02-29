import calen from "../../assets/svg/calen.svg";

import aws from "../../assets/svg/aws.svg";
import gcp from "../../assets/svg/gcp.svg";
import kubernetes from "../../assets/svg/kubernetes.svg";
import docker from "../../assets/svg/docker.svg";
import terraform from "../../assets/svg/terraform.svg";
import linux from "../../assets/svg/linux.svg";

import logo from "../../assets/svg/learnmutiny.svg";

import "../../App.css";

export default function Smith() {
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
              John Smith
            </h2>
            <h3 className="h3">miami, fl</h3>
            <a
              href="https://learnmutiny.io/developers/34b12a"
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
                id="kubernetes-container"
                style={{
                  marginBottom: "1rem",
                  padding: "1rem",
                }}
              >
                <img src={kubernetes} className="emoji-2" alt="calendar" />
                Kubernetes
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
                id="linux-container"
                style={{
                  marginBottom: "1rem",
                  padding: "1rem",
                }}
              >
                <img src={linux} className="emoji-2" alt="calendar" />
                Linux
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
                John Smith
              </h1>
              <h2 className="h2">miami, fl</h2>
              <a
                href="https://learnmutiny.io/developers/34b12a"
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
                  id="kubernetes-container"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                  }}
                >
                  <img src={kubernetes} className="emoji-2" alt="calendar" />
                  Kubernetes
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
                  id="linux-container"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                  }}
                >
                  <img src={linux} className="emoji-2" alt="calendar" />
                  Linux
                </span>
              </div>
            </div>
            <div className="vertical-content" style={{}}>
              <div className="vertical-content">
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
