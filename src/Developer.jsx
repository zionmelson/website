import bear from "./assets/svg/bear.svg";

import "./App.css";

export default function Developer() {
  return (
    <div className="main">
      <div className="coming-soon-container">
        <h1 className="h1">coming soon...</h1>
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
