import Instagram from "../assets/instagram.svg";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import X from "../assets/X.svg";

import "./Components.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>© 2023 learnmutiny. All rights reserved.</p>
      <div className="socials">
        <a href="https://www.instagram.com/learnmutiny/">
          <img className="social" src={Instagram} alt="instagram" />
        </a>
        <a href="https://www.github.com/learnmutiny-io/">
          <img className="social" src={Github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/company/learnmutiny/">
          <img className="social" src={Linkedin} alt="linkedin" />
        </a>
        <a href="https://www.twitter.com/learnmutiny/">
          <img className="social" src={X} alt="x" />
        </a>
      </div>
    </div>
  );
}
