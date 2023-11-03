import Instagram from "../assets/instagram.svg";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import X from "../assets/X.svg";

import "./Components.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="foot-cont">
        <p>© 2023 learnmutiny. All rights reserved.</p>
        <a href="/terms" className="span-link">
          <p className="terms-mobile">Terms of Service | Privacy Policy</p>
        </a>
      </div>
      <a href="/terms" className="span-link">
        <p className="terms">Terms of Service | Privacy Policy</p>
      </a>
      <div className="socials">
        <a
          href="https://www.instagram.com/learnmutiny/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social" src={Instagram} alt="instagram" />
        </a>
        <a
          href="https://www.github.com/learnmutiny-io/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social" src={Github} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/company/learnmutiny/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social" src={Linkedin} alt="linkedin" />
        </a>
        <a
          href="https://www.twitter.com/learnmutiny/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social" src={X} alt="x" />
        </a>
      </div>
    </div>
  );
}
