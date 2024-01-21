import calen from "../../assets/svg/calen.svg";

import java from "../../assets/svg/java.svg";
import csharp from "../../assets/svg/csharp.svg";
import typescript from "../../assets/svg/typescript.svg";
import rust from "../../assets/svg/rust.svg";

import logo from "../../assets/svg/learnmutiny.svg";

import "../../App.css";

export default function Nelson() {
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
              Kent Nelson
            </h2>
            <h3 className="h3">memphis, tn</h3>
            <a
              href="https://learnmutiny.io/developers/df2916"
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
                id="csharp-container"
                style={{
                  marginBottom: "1rem",
                  padding: "1rem",
                }}
              >
                <img src={csharp} className="emoji-2" alt="calendar" />
                CSharp
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
                Τypescript
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
                Kent Nelson
              </h1>
              <h2 className="h2">memphis, tn</h2>
              <a
                href="https://learnmutiny.io/developers/df2916"
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
                  id="csharp-container"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                  }}
                >
                  <img src={csharp} className="emoji-2" alt="calendar" />
                  C#
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
                  Τypescript
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
