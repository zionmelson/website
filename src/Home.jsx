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

      splitText.chars.forEach((char) => {
        char.classList.add(`chars`);
      });

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
      <div className="box">
        <div className="vertical">
          <h1 className="h1">
            Hire a big tech
            {loaded ? (
              <div className="span">
                {loaded ? (
                  <>
                    <h2 className="h1" id="animation">
                      full-stack developer
                    </h2>
                    <h2 className="h1" id="animation">
                      back-end developer
                    </h2>
                    <h2 className="h1" id="animation">
                      systems engineer
                    </h2>
                    <h2 className="h1" id="animation">
                      software architect
                    </h2>
                    <h2 className="h1" id="animation">
                      regression engineer
                    </h2>
                    <h2 className="h1" id="animation">
                      cloud engineer
                    </h2>
                    <h2 className="h1" id="animation">
                      blockchain engineer
                    </h2>
                    <h2 className="h1" id="animation">
                      devops engineer
                    </h2>
                    <h2 className="h1" id="animation">
                      database engineer
                    </h2>
                    <h2 className="h1" id="animation">
                      data engineer
                    </h2>
                    <h2 className="h1" id="animation">
                      project manager
                    </h2>
                    <h2 className="h1" id="animation">
                      ui/ux designer
                    </h2>
                    <h2 className="h1" id="animation">
                      graphic designer
                    </h2>
                    <h2 className="h1" id="animation">
                      animation engineer
                    </h2>
                    <h2 className="h1" id="animation">
                      product manager
                    </h2>
                    <h2 className="h1" id="animation">
                      scrum master
                    </h2>
                  </>
                ) : (
                  <>
                    <div className="span"></div>
                  </>
                )}
              </div>
            ) : (
              <div className="span">
                <h2 className="h1" id="animation">
                  loading...
                </h2>
              </div>
            )}
            for your startup
          </h1>
          <h2 className="h2">
            we source tech talent from tech giants and unicorns
          </h2>
          <h3 className="h3">and place them at your startup</h3>
        </div>
      </div>
      <a href="https://discord.gg/SG9RvqWb88">
        <h5 className="h5">
          <button className="emoji-container">start free trial 🚀</button>
        </h5>
      </a>
    </div>
  );
}

export default Home;
