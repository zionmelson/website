import { useParams } from "react";

import bear from "../assets/bear.png";

import "../App.css";

export default function Developer() {
  const params = useParams();
  return (
    <div className="main">
      <div className="vertical-content" style={{ marginTop: "3rem" }}>
        <a href="/">
          <span className="emoji-container">
            <img src={bear} className="emoji" alt="mu" />
            {params.id}
          </span>
        </a>
      </div>
    </div>
  );
}
