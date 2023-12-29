import bear from "../assets/bear.png";

import "../App.css";

export default function Error() {
  return (
    <div className="main">
      <div className="vertical-content" style={{ marginTop: "3rem" }}>
        <h2 className="h2" style={{ width: "100%", marginBottom: "1rem" }}>
          where are you going? 🧐
        </h2>
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
