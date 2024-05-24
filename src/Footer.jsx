import link from "./svg/link.svg";
import x from "./svg/twitter.svg";
import medium from "./svg/medium.svg";
import spotify from "./svg/spotify.svg";

export default function Footer() {
  return (
    <div className="main">
      <div className="vbox" style={{ gap: "1.5rem" }}>
        <div className="vbox" style={{ gap: "0.25rem" }}>
          <p className="p">© 2024 learnmutiny.io. All rights reserved.</p>
          <a className="p" href="/terms">
            Terms of Service
          </a>
          <a className="p" href="/privacy">
            Privacy Policy
          </a>
        </div>
        <div className="hbox" style={{ gap: "0.5rem" }}>
          <a
            href="https://www.linkedin.com/company/learnmutiny/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="emoji" src={link} alt="link" />
          </a>
          <a
            href="https://www.twitter.com/learnmutiny/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="emoji" src={x} alt="x" />
          </a>
          <a
            href="https://medium.com/@learnmutiny.io"
            target="_blank"
            rel="noreferrer"
          >
            <img className="emoji" src={medium} alt="medium" />
          </a>
          <a
            href="https://podcasters.spotify.com/pod/show/learnmutinyio"
            target="_blank"
            rel="noreferrer"
          >
            <img className="emoji" src={spotify} alt="spot" />
          </a>
        </div>
      </div>
    </div>
  );
}
