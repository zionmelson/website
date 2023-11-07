import zia from "../assets/zia.svg";
import bear from "../assets/bear.svg";
import calen from "../assets/calen.svg";

import "../App.css";

export default function Contact() {
  return (
    <div className="main">
      {/* support desktop */}
      <div className="support-box">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            getting connected
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            hey it&apos;s zia, and i&apos;m here to help you get you access to
          </h2>
          <span className="emoji-container" style={{ marginBottom: "1rem" }}>
            <img src={bear} className="emoji" alt="mu" /> learnmutiny
          </span>
          <img
            src={zia}
            className="headshots"
            alt="support"
            style={{ marginBottom: "1rem" }}
          />
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            schedule a time to chat with us
          </h2>
          <a
            href="https://calendly.com/learnmutiny/showcase"
            target="_blank"
            rel="noreferrer"
            style={{ marginBottom: "1rem" }}
          >
            <span className="emoji-container">
              <img src={calen} className="emoji" alt="mu" />
              Calendly
            </span>
          </a>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            or email us
          </h2>
          <span
            className="emoji-container"
            id="support"
            style={{ marginBottom: "1rem" }}
          >
            <img src={bear} className="emoji" id="support" alt="mu" />
            support@learnmutiny.io
          </span>
          <h3 className="h3">until it&apos;s done.</h3>
        </div>
      </div>
      {/* support phone */}
      <div className="support-box-mobile">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            getting connected
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            hey it&apos;s zia, and i&apos;m here to help you get you access to
          </h2>
          <span className="emoji-container" style={{ marginBottom: "1rem" }}>
            <img src={bear} className="emoji" alt="mu" /> learnmutiny
          </span>
          <img
            src={zia}
            className="headshots"
            alt="support"
            style={{ marginBottom: "1rem" }}
          />
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            schedule a time to chat with us
          </h2>
          <a
            href="https://calendly.com/learnmutiny/showcase"
            target="_blank"
            rel="noreferrer"
            style={{ marginBottom: "1rem" }}
          >
            <span className="emoji-container">
              <img src={calen} className="emoji" alt="mu" />
              Calendly
            </span>
          </a>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            or email us
          </h2>
          <span
            className="emoji-container"
            id="support"
            style={{ marginBottom: "1rem" }}
          >
            <img src={bear} className="emoji" alt="mu" />
            support@learnmutiny.io
          </span>
          <h3 className="h3">until it&apos;s done.</h3>
        </div>
      </div>
    </div>
  );
}
