// import bear from "../assets/bear.svg";
// import filter from "../assets/filter.svg";
// import { AiFillApple, AiFillAndroid } from "react-icons/ai";
// import { FaReact } from "react-icons/fa";

import zia from "../assets/zia.svg";
import bear from "../assets/bear.svg";

import "../App.css";

export default function Contact() {
  return (
    <div className="App">
      <div className="main">
        <div className="support-box">
          <div className="vertical-content">
            <h1 className="h1">ready to join?</h1>
            <h2 className="h2">
              <span className="vertical-content">
                hey it&apos;s zia, and i&apos;m here to help you get you access
                to{" "}
                <span className="emoji-container">
                  <img src={bear} className="emoji" alt="mu" /> learnmutiny
                </span>
              </span>
            </h2>
            <img src={zia} className="headshots" alt="support" />
            <h2 className="h2">
              send us over your resume.
              <br />
              email: <span className="span-link">support@learnmutiny.io </span>
            </h2>
            <h2 className="h2">
              and schedule a time to chat with us:{" "}
              <a
                className="span-link"
                href="https://calendly.com/learnmutiny/support"
                target="_blank"
                rel="noreferrer"
              >
                calendly
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
