import calen from "../../assets/svg/calen.svg";

import react from "../../assets/svg/react.svg";
import typescript from "../../assets/svg/typescript.svg";
import postgres from "../../assets/svg/postgres.svg";
import dynamodb from "../../assets/svg/dynamodb.svg";
import aws from "../../assets/svg/aws.svg";
import firebase from "../../assets/svg/firebase.svg";
import star from "../../assets/svg/star.svg";

import logo from "../../assets/svg/learnmutiny.svg";

import "../../App.css";

export default function Lucas() {
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
              Carl Lucas
            </h2>
            <h3 className="h3">atlanta, ga</h3>
            <a
              href="https://learnmutiny.io/developers/8a6ca5"
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
                Carl Lucas
              </h1>
              <h2 className="h2">atlanta, ga</h2>
              <a
                href="https://learnmutiny.io/developers/8a6ca5"
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
