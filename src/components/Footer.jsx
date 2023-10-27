import Instagram from "../assets/instagram.svg";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import X from "../assets/x.svg";

import "./Components.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>© 2023 learnmutiny. All rights reserved.</p>
      <div className="socials">
        <img className="social" src={Instagram} alt="instagram" />
        <img className="social" src={Github} alt="github" />
        <img className="social" src={Linkedin} alt="linkedin" />
        <img className="social" src={X} alt="x" />
      </div>
    </div>
  );
}
