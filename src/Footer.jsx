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
      <a
        href="https://www.producthunt.com/posts/hire-learnmutiny-io?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-hire&#0045;learnmutiny&#0045;io"
        target="_blank"
        rel="noreferrer"
        onClick={() => track("producthunt")}
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=463297"
          alt="hire&#0032;learnmutiny&#0046;io - Hire&#0032;tech&#0032;people&#0032;without&#0032;a&#0032;Recruiter&#0032;🤯 | Product Hunt"
          style={{ width: "250px", height: "54px", marginTop: "1rem" }}
          width="250"
          height="54"
        />
      </a>
    </div>
  );
}
