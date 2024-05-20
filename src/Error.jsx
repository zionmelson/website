import bear from "./assets/png/bear.png";

import "./App.css";

export default function Error() {
  return (
    <div className="main">
      <div
        className="box"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 className="h2">where are you going? 🧐</h2>
        <a href="/">
          <span className="emoji-container">
            <img src={bear} className="emoji" alt="mu" />
            get back to safety
          </span>
        </a>
      </div>
    </div>
  );
}
