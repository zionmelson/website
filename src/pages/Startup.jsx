import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import { FaReact } from "react-icons/fa";

// import startup from "../assets/sProfile.svg";

import small from "../assets/small.svg";
import medium from "../assets/medium.svg";
import unicorn from "../assets/unicorn.svg";

import "../App.css";

function Startup() {
  return (
    <div className="main">
      {/* startup-intro desktop */}
      <div className="startup-box">
        <div className="vertical-content">
          <h1
            className="h1"
            style={{ marginBottom: "1rem", marginTop: "5rem" }}
          >
            we source and vet qualified and reputable developer talent for your{" "}
            <span className="span">tech startup</span>
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            we are a team based in the atlanta and our priority is to help aid
            startups by providing them talented web developers.
          </h2>{" "}
          <div className="icons">
            <AiFillAndroid id="android" className="icon" />
            <AiFillApple id="apple" className="icon" />
            <FaReact id="react" className="icon" />
          </div>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            we target the best college student talent from the top universities
            in the metro atlanta area.
          </h2>
        </div>
      </div>
      {/* startup-intro phone */}
      <div className="startup-box-mobile">
        <div className="vertical-content">
          <h1
            className="h1"
            style={{ marginBottom: "1rem", marginTop: "2rem" }}
          >
            we source and vet qualified tech talent for your{" "}
            <span className="span">tech startup</span>
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            we are a team based in the atlanta and our priority is to help aid
            startups by providing them talented web developers.
          </h2>{" "}
          <div className="icons">
            <AiFillAndroid id="android" className="icon" />
            <AiFillApple id="apple" className="icon" />
            <FaReact id="react" className="icon" />
          </div>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            we target the best college student talent from the top universities
            in the metro atlanta area.
          </h2>
        </div>
      </div>
      {/* startup-mu desktop */}
      {/* <div className="startup-box">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            create your startup profile
          </h1>
          <div className="vertical-content">
            <img src={startup} className="logo" alt="startup" />
            <h2 className="h3" style={{ marginBottom: "1rem" }}>
              your startup profile will reflect your company
            </h2>
          </div>
        </div>
      </div> */}
      {/* startup-mu phone */}
      {/* <div className="startup-box-mobile">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            create your startup mu
          </h1>
          <div className="vertical-content">
            <img src={startup} className="logo" alt="startup" />
            <h2 className="h3" style={{ marginBottom: "1rem" }}>
              your startup profile will reflect your company
            </h2>
          </div>
        </div>
      </div> */}
      {/* matching-algo desktop */}
      <div className="startup-box">
        <div className="vertical-content">
          {" "}
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            our matching model
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            we know that early stage startups have the difficult task of finding
            the perfect team to help them grow, because of this we crafted our
            sourcing strategy around on key metric,{" "}
            <span className="span">data</span>.
          </h2>
        </div>
      </div>
      {/* matching-algo phone */}
      <div className="startup-box-mobile">
        <div className="vertical-content">
          {" "}
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            our matching model
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            early stage startups have the difficult task of finding the perfect
            team, so we crafted our sourcing strategy around{" "}
            <span className="span">developer data</span> to find the best
            possible hire.
          </h2>
        </div>
      </div>
      {/* pricing desktop */}
      <div className="startup-box">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            pricing
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            our rates are as follows:
          </h2>
          <div className="horizontal-content-small">
            <div
              className="vertical-content"
              style={{
                border: "2px solid #5dc4ff",
                borderRadius: "2rem",
                padding: "1rem",
                margin: "1rem",
              }}
            >
              <h2 className="h2" style={{ marginBottom: "0.7rem" }}>
                small company
              </h2>
              <h3 className="h3" style={{ marginBottom: "1rem", width: "90%" }}>
                <a
                  href="https://calendly.com/learnmutiny/company-intro"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    className="emoji-container"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    $0 - $2,000
                  </span>{" "}
                </a>
                contract value (per employee)
              </h3>
              <h1 className="h1">15%</h1>
              <h3
                className="h3"
                style={{ marginBottom: "1rem", width: "100%" }}
              >
                of contract value
              </h3>
              <img src={small} className="logo" alt="small" />
            </div>
            <div
              className="vertical-content"
              style={{
                border: "2px solid #5dc4ff",
                borderRadius: "2rem",
                padding: "1rem",
                margin: "1rem",
              }}
            >
              <h2 className="h2" style={{ marginBottom: "0.7rem" }}>
                startup
              </h2>
              <h3 className="h3" style={{ marginBottom: "1rem", width: "90%" }}>
                <a
                  href="https://calendly.com/learnmutiny/company-intro"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    className="emoji-container"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    $2,000 - $5,000
                  </span>{" "}
                </a>
                contract value (per employee)
              </h3>
              <h1 className="h1">12%</h1>
              <h3
                className="h3"
                style={{ marginBottom: "1rem", width: "100%" }}
              >
                of contract value
              </h3>
              <img src={medium} className="logo" alt="medium" />
            </div>
            <div
              className="vertical-content"
              style={{
                border: "2px solid #5dc4ff",
                borderRadius: "2rem",
                padding: "1rem",
                margin: "1rem",
              }}
            >
              <h2 className="h2" style={{ marginBottom: "0.7rem" }}>
                unicorn
              </h2>
              <h3 className="h3" style={{ marginBottom: "1rem", width: "90%" }}>
                <a
                  href="https://calendly.com/learnmutiny/company-intro"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    className="emoji-container"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    $5,000+
                  </span>{" "}
                </a>
                contract value (per employee)
              </h3>
              <h1 className="h1">10%</h1>
              <h3
                className="h3"
                style={{ marginBottom: "1rem", width: "100%" }}
              >
                of contract value
              </h3>
              <img src={unicorn} className="logo" alt="unicorn" />
            </div>
          </div>
        </div>
      </div>
      {/* pricing phone */}
      <div className="startup-box-mobile">
        {" "}
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            pricing
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            our rates are as follows:
          </h2>
          <div className="horizontal-content-small">
            <div
              className="vertical-content"
              style={{
                border: "2px solid #5dc4ff",
                borderRadius: "2rem",
                padding: "1rem",
                margin: "1rem",
              }}
            >
              <h2 className="h2" style={{ marginBottom: "1rem" }}>
                small company
              </h2>
              <h3 className="h3" style={{ marginBottom: "1rem", width: "90%" }}>
                <a
                  href="https://calendly.com/learnmutiny/company-intro"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    className="emoji-container"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    $0 - $2,000
                  </span>{" "}
                </a>
                contract value (per employee)
              </h3>
              <h1 className="h1">15%</h1>
              <h3 className="h3" style={{ marginBottom: "1rem" }}>
                of contract value
              </h3>
              <img src={small} className="logo" alt="small" />
            </div>
            <div
              className="vertical-content"
              style={{
                border: "2px solid #5dc4ff",
                borderRadius: "2rem",
                padding: "1rem",
                margin: "1rem",
              }}
            >
              <h2 className="h2" style={{ marginBottom: "1rem" }}>
                startup
              </h2>
              <h3 className="h3" style={{ marginBottom: "1rem", width: "90%" }}>
                <a
                  href="https://calendly.com/learnmutiny/company-intro"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    className="emoji-container"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    $2,000 - $5,000
                  </span>{" "}
                </a>
                contract value (per employee)
              </h3>
              <h1 className="h1">12%</h1>
              <h3 className="h3" style={{ marginBottom: "1rem" }}>
                of contract value
              </h3>
              <img src={medium} className="logo" alt="medium" />
            </div>
            <div
              className="vertical-content"
              style={{
                border: "2px solid #5dc4ff",
                borderRadius: "2rem",
                padding: "1rem",
                margin: "1rem",
              }}
            >
              <h2 className="h2" style={{ marginBottom: "1rem" }}>
                unicorn
              </h2>
              <h3 className="h3" style={{ marginBottom: "1rem", width: "90%" }}>
                <a
                  href="https://calendly.com/learnmutiny/company-intro"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    className="emoji-container"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    $5,000+
                  </span>{" "}
                </a>
                contract value (per employee)
              </h3>
              <h1 className="h1">10%</h1>
              <h3 className="h3" style={{ marginBottom: "1rem" }}>
                of contract value
              </h3>
              <img src={unicorn} className="logo" alt="unicorn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Startup;
