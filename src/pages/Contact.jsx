// import bear from "../assets/bear.svg";
// import filter from "../assets/filter.svg";
// import { AiFillApple, AiFillAndroid } from "react-icons/ai";
// import { FaReact } from "react-icons/fa";

import zia from "../assets/zia.svg";

import "../App.css";

export default function Contact() {
  return (
    <div className="App">
      <div className="main">
        <div className="box">
          <div className="vertical-content">
            <h1 className="h1">any questions?</h1>
            <h2 className="h2">get in contact with our support team</h2>
            <img src={zia} className="headshots" alt="support" />

            <h2 className="h2">
              email:{" "}
              <a className="span-link" href="mailto:support@learnmutiny.io">
                support@learnmutiny.io{" "}
              </a>
            </h2>

            <h2 className="h2">
              schedule a time to chat with us:{" "}
              <a
                className="span-link"
                href="https://calendly.com/learnmutiny/support"
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
