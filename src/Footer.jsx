import { track } from "@vercel/analytics";
import link from "./images/link.svg";
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
            onClick={() => track("linkedin")}
          >
            <img className="emoji" src={link} alt="link" />
          </a>

          <a
            href="https://podcasters.spotify.com/pod/show/learnmutinyio"
            target="_blank"
            rel="noreferrer"
            onClick={() => track("spotify")}
          >
            <img className="emoji" src={spotify} alt="spot" />
          </a>
        </div>
      </div>
    </div>
  );
}
