import calen from "../../assets/svg/calen.svg";
import react from "../../assets/svg/react.svg";
import node from "../../assets/svg/node.svg";
import solidity from "../../assets/svg/solidity.svg";
import python from "../../assets/svg/python.svg";
import rust from "../../assets/svg/rust.svg";
import ai from "../../assets/svg/ai.svg";
import star from "../../assets/svg/star.svg";

import logo from "../../assets/svg/learnmutiny.svg";

import "../../App.css";

export default function Liang() {
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
              Scott Liang
            </h2>
            <h3 className="h3">atlanta, ga</h3>
            <a
              href="https://learnmutiny.io/developers/62328c"
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
                id="react-container"
                style={{
                  marginBottom: "0.2rem",
                  padding: "1rem",
                }}
              >
                <img src={react} className="emoji-2" alt="calendar" />
                React
              </span>
              <span
                className="emoji-container"
                id="rust-container"
                style={{
                  marginBottom: "0.2rem",
                  padding: "1rem",
                }}
              >
                <img src={rust} className="emoji-2" alt="calendar" />
                Rust
              </span>
              <span
                className="emoji-container"
                id="node-container"
                style={{
                  marginBottom: "0.2rem",
                  padding: "1rem",
                }}
              >
                <img src={node} className="emoji-2" alt="calendar" />
                Node
              </span>
              <span
                className="emoji-container"
                id="python-container"
                style={{
                  marginBottom: "0.2rem",
                  padding: "1rem",
                }}
              >
                <img src={python} className="emoji-2" alt="calendar" />
                Python
              </span>
              <span
                className="emoji-container"
                id="solidity-container"
                style={{
                  marginBottom: "0.2rem",
                  padding: "1rem",
                }}
              >
                <img src={solidity} className="emoji-2" alt="calendar" />
                Solidity
              </span>
              <span
                className="emoji-container"
                id="ai-container"
                style={{ marginBottom: "1rem", padding: "1rem" }}
              >
                <img src={ai} className="emoji-2" alt="ai" />
                AI dev
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
              c-suite developer
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
                Scott Liang
              </h1>
              <h2 className="h2">atlanta, ga</h2>
              <a
                href="https://learnmutiny.io/developers/62328c"
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
                    marginBottom: "0.2rem",
                    padding: "1rem",
                  }}
                >
                  <img src={react} className="emoji-2" alt="calendar" />
                  React
                </span>
                <span
                  className="emoji-container"
                  id="rust-container"
                  style={{
                    marginBottom: "0.2rem",
                    padding: "1rem",
                  }}
                >
                  <img src={rust} className="emoji-2" alt="calendar" />
                  Rust
                </span>
                <span
                  className="emoji-container"
                  id="node-container"
                  style={{
                    marginBottom: "0.2rem",
                    padding: "1rem",
                  }}
                >
                  <img src={node} className="emoji-2" alt="calendar" />
                  Node
                </span>
                <span
                  className="emoji-container"
                  id="python-container"
                  style={{
                    marginBottom: "0.2rem",
                    padding: "1rem",
                  }}
                >
                  <img src={python} className="emoji-2" alt="calendar" />
                  Python
                </span>
                <span
                  className="emoji-container"
                  id="solidity-container"
                  style={{
                    marginBottom: "0.2rem",
                    padding: "1rem",
                  }}
                >
                  <img src={solidity} className="emoji-2" alt="calendar" />
                  Solidity
                </span>
                <span
                  className="emoji-container"
                  id="ai-container"
                  style={{ marginBottom: "1rem", padding: "1rem" }}
                >
                  <img src={ai} className="emoji-2" alt="ai" />
                  AI dev
                </span>
              </div>
            </div>
            <div className="vertical-content" style={{}}>
              <div className="vertical-content">
                <span
                  className="emoji-container"
                  id="ai-container"
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
                  c-suite developer
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
