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
          <h2 className="h3">get direct access to the top tech talent</h2>
          <h3 className="h3">and place them at your startup</h3>
        </div>
        <a href="https://discord.gg/WKj3uz6sZZ">
          <h3 className="h3">
            <button className="button">start free trial 🚀</button>
          </h3>
        </a>
      </div>
    </div>
  );
}

export default Home;
