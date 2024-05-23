import bear from "./assets/png/bear.png";

import "./App.css";

export default function Error() {
  return (
    <div className="main">
      <h2 className="h2">404 😬</h2>
      <a href="https://discord.gg/SG9RvqWb88">
        <h5 className="h5">
          <button className="emoji-container">
            <img src={bear} className="emoji" alt="mu" />
            get back home
          </button>
        </h5>
      </a>
      <h3 className="h3">yikes...</h3>
    </div>
  );
}
