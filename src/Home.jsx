/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import { track } from "@vercel/analytics";

import discord from "./images/discord.svg";
import tinder from "./images/tinder.svg";

import "./App.css";

function Home() {
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
          onClick={() => track("discord")}
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
