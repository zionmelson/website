import calen from "../../assets/svg/calen.svg";

import rust from "../../assets/svg/rust.svg";
import vue from "../../assets/svg/vue.svg";
import react from "../../assets/svg/react.svg";
import node from "../../assets/svg/node.svg";
import ruby from "../../assets/svg/ruby.svg";
import aws from "../../assets/svg/aws.svg";
import star from "../../assets/svg/star.svg";

import logo from "../../assets/svg/learnmutiny.svg";

import "../../App.css";

export default function Wayne() {
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
              Bruce Wayne
            </h2>
            <h3 className="h3">portland, or</h3>
            <a
              href="https://learnmutiny.io/developers/49f40f"
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
                id="vue-container"
                style={{
                  marginBottom: "1rem",
                  padding: "1rem",
                }}
              >
                <img src={vue} className="emoji-2" alt="calendar" />
                Vue
              </span>

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
                id="node-container"
                style={{
                  marginBottom: "1rem",
                  padding: "1rem",
                }}
              >
                <img src={node} className="emoji-2" alt="calendar" />
                Node
              </span>

              <span
                className="emoji-container"
                id="ruby-container"
                style={{
                  marginBottom: "1rem",
                  padding: "1rem",
                }}
              >
                <img src={ruby} className="emoji-2" alt="calendar" />
                Ruby
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
                Bruce Wayne
              </h1>
              <h2 className="h2">portland, or</h2>
              <a
                href="https://learnmutiny.io/developers/49f40f"
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
                  id="vue-container"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                  }}
                >
                  <img src={vue} className="emoji-2" alt="calendar" />
                  Vue
                </span>

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
                  id="node-container"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                  }}
                >
                  <img src={node} className="emoji-2" alt="calendar" />
                  Node
                </span>

                <span
                  className="emoji-container"
                  id="ruby-container"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                  }}
                >
                  <img src={ruby} className="emoji-2" alt="calendar" />
                  Ruby
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
