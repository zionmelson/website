import linkedin from "../assets/svg/linkedin-2.svg";
import x from "../assets/svg/twitter.svg";
import medium from "../assets/svg/medium.svg";
import spotify from "../assets/svg/spotify.svg";

import "./Components.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <h5>© 2024 learnmutiny. All rights reserved.</h5>
        <a href="/terms">
          <h5>Terms of Service</h5>
        </a>
        <a href="/privacy">
          <h5>Privacy Policy</h5>
        </a>
      </div>
      <div className="vertical">
        <div className="socials">
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
            href="https://medium.com/@learnmutiny.io"
            target="_blank"
            rel="noreferrer"
          >
            <img className="social" src={medium} alt="medium" />
          </a>
          <a
            href="https://podcasters.spotify.com/pod/show/learnmutinyio"
            target="_blank"
            rel="noreferrer"
          >
            <img className="social" src={spotify} alt="medium" />
          </a>
        </div>
      </div>
    </div>
  );
}
