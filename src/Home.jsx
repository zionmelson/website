/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */

import gsap from "gsap";
import SplitText from "split-text-js";
import { useEffect, useRef, useState } from "react";

import discord from "./images/discord.svg";
import tinder from "./images/tinder.svg";

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
      <div className="vbox">
        <div className="hbox" style={{ gap: "0.5rem" }}>
          <h1 className="h1">it's like</h1>
          <div className="hbox">
            <img src={tinder} className="emoji" alt="tinder" />
            <h1 className="h1" style={{ color: "#ee3e73" }}>
              tinder
            </h1>
          </div>
          <h1 className="h1">for startups</h1>
        </div>
        <a
          href="https://discord.gg/learnmutiny"
          style={{ marginTop: "0.5rem" }}
        >
          <h3 className="h3">
            <img src={discord} className="emoji" alt="Discord" />
          </h3>
        </a>
      </div>
    </div>
  );
}

export default Home;
