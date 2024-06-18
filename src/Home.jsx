/* eslint-disable react/prop-types */

import gsap from "gsap";
import SplitText from "split-text-js";
import { useEffect, useState } from "react";

import "./App.css";

function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const technologies = gsap.utils.toArray("#animation");
    const tl = gsap.timeline({ repeat: -1 });

    technologies.forEach((technology) => {
      const splitText = new SplitText(technology);

      tl.from(
        splitText.chars,
        {
          opacity: 0,
          fontWeight: 700,
          y: 60,
          rotateX: -35,
          stagger: 0.02,
        },
        "<"
      ).to(
        splitText.chars,
        {
          opacity: 0,
          fontWeight: 700,
          y: -60,
          rotateX: 35,
          stagger: 0.02,
        },
        "<1.8"
      );
    });

    setTimeout(() => setLoaded(true), 850);

    return () => tl.kill();
  }, [loaded]);

  return (
    <div className="main">
      <div className="vbox" style={{ gap: "0.5rem" }}>
        <h1 className="h1">
          Hire a big tech
          {loaded ? (
            <div className="animation">
              {loaded ? (
                <>
                  <h1 className="h1" id="animation">
                    engineer
                  </h1>
                  <h1 className="h1" id="animation">
                    designer
                  </h1>
                  <h1 className="h1" id="animation">
                    manager
                  </h1>
                  <h1 className="h1" id="animation">
                    recruiter
                  </h1>
                  <h1 className="h1" id="animation">
                    executive
                  </h1>
                </>
              ) : (
                <>
                  <div className="animation"></div>
                </>
              )}
            </div>
          ) : (
            <div className="animation">
              <h2 className="h1" id="animation">
                loading...
              </h2>
            </div>
          )}
          for your startup
        </h1>
        <div className="vbox">
          <h2 className="h3">Hire our talent all on Discord 🤖</h2>
        </div>
        <a href="https://discord.gg/WKj3uz6sZZ">
          <h3 className="h3">
            <button className="button">start free trial 🚀</button>
          </h3>
        </a>
      </div>
      <a
        href="https://www.producthunt.com/posts/hire-learnmutiny-io?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-hire&#0045;learnmutiny&#0045;io"
        target="_blank"
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

export default Home;
