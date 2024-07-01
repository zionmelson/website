import link from "./images/link.svg";
import x from "./images/twitter.svg";
import spotify from "./images/spotify.svg";

export default function Footer() {
  return (
    <div className="main">
      <div className="vbox" style={{ gap: "1.5rem" }}>
        <div className="vbox" style={{ gap: "0.25rem" }}>
          <p className="p">© 2024 learnmutiny.io. All rights reserved.</p>
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
