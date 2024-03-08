import bear from "./assets/svg/bear.svg";

import "./App.css";

export default function Developer() {
  return (
    <div className="main">
      <div className="vertical-content">
        <h2 className="h2">coming soon...</h2>
        <a href="/">
          <span className="emoji-container">
            <img src={bear} className="emoji" alt="mu" />
            homepage
          </span>
        </a>
      </div>
    </div>
  );
}
