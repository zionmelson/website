import instagram from "../assets/svg/insta.svg";
import discord from "../assets/svg/discord.svg";
import linkedin from "../assets/svg/linkedin-2.svg";
import x from "../assets/svg/twitter.svg";
import youtube from "../assets/svg/youtube.svg";

import "./Components.css";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <h5>© 2024 learnmutiny. All rights reserved.</h5>
        <a href="/terms">
          <h5>Terms of Service</h5>
        </a>
        <a href="/privacy">
          <h5>Privacy Policy</h5>
        </a>
      </div>
      <div className="socials">
        <a
          href="https://www.instagram.com/learnmutiny/"
          target="_blank"
          rel="noreferrer"
          className="social"
        >
          <img src={instagram} alt="instagram" />
        </a>
        <a
          href="https://discord.gg/ZbGfyErE3w"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social" src={discord} alt="discord" />
        </a>
        <a
          href="https://www.linkedin.com/company/learnmutiny/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social" src={linkedin} alt="linkedin" />
        </a>
        <a
          href="https://www.twitter.com/learnmutiny/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social" src={x} alt="x" />
        </a>
        <a
          href="https://www.youtube.com/@learnmutiny/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social" src={youtube} alt="youtube" />
        </a>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <span className="emoji-container">
          <h5 className="h5" style={{ marginBottom: "0" }}>
            470-881-1711
          </h5>
        </span>
        <span className="emoji-container">
          <h5 className="h5" style={{ marginBottom: "0" }}>
            404-881-1711
          </h5>
        </span>
      </div>
    </div>
  );
}
