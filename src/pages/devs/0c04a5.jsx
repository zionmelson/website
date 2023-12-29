import calen from "../../assets/svg/calen.svg";

import flutter from "../../assets/svg/flutter.svg";
import gcp from "../../assets/svg/gcp.svg";
import firebase from "../../assets/svg/firebase.svg";
import dart from "../../assets/svg/dart.svg";
import javascript from "../../assets/svg/javascript.svg";

import "../../App.css";

export default function Secord() {
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
              Cliff Secord
            </h2>
            <h3 className="h3">atlanta, ga</h3>
            <a
              href="https://learnmutiny.io/developers/0c04a5"
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
                Cliff Secord
              </h1>
              <h2 className="h2">atlanta, ga</h2>
              <a
                href="https://learnmutiny.io/developers/0c04a5"
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
