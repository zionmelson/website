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
<<<<<<< HEAD
          <h1 className="h1">it's like</h1>
          <div className="hbox">
            <img src={tinder} className="emoji" alt="tinder" />
            <h1 className="h1" style={{ color: "#ee3e73" }}>
=======
          <h1 className="h1" style={{ color: "#ee3e73" }}>
            it's like
          </h1>
          <div className="hbox">
            <img src={tinder} className="emoji" alt="tinder" />
            <h1 className="h1" style={{ color: "#f05a64" }}>
>>>>>>> 62d1ed3 (go)
              tinder
            </h1>
          </div>
          <h1 className="h1">for startups</h1>
        </div>
<<<<<<< HEAD
        <a
=======
        {/* <a
>>>>>>> 62d1ed3 (go)
          href="https://discord.gg/learnmutiny"
          style={{ marginTop: "0.5rem" }}
          onClick={() => track("discord")}
        >
          <h3 className="h3">
            <img src={discord} className="emoji" alt="Discord" />
          </h3>
<<<<<<< HEAD
        </a>
=======
        </a> */}
        <div
          className="vbox"
          style={{ background: "purple", width: "15rem", height: "15rem" }}
        >
          pop a mint
        </div>
        <p className="p" style={{ display: "none" }}>
          AI-Powered FAANG Talent Sourcing: Revolutionizing Tech Recruitment Are
          you looking to hire top-tier talent from FAANG companies (Facebook,
          Amazon, Apple, Netflix, Google)? Our cutting-edge recruitment agency
          leverages artificial intelligence and Discord community engagement to
          connect you with the cream of the tech industry crop. Why Choose Our
          AI-Driven Recruitment Solution? Advanced AI Algorithms: Our
          proprietary machine learning models identify and evaluate
          high-potential candidates with unparalleled accuracy. Discord Talent
          Pool: Access a vibrant community of tech professionals actively
          discussing industry trends and showcasing their skills. Streamlined
          Hiring Process: Automated screening and matching save you time and
          resources in your talent acquisition efforts. Key Benefits: Access to
          Elite FAANG Talent: Tap into a network of experienced professionals
          from the world's leading tech companies. Innovative Sourcing
          Techniques: Utilize AI-powered bots to engage and assess candidates in
          real-time on Discord. Data-Driven Insights: Leverage analytics to make
          informed decisions about potential hires and market trends. Efficient
          Candidate Matching: Our AI algorithms ensure perfect alignment between
          job requirements and candidate skills. Continuous Learning: Our
          systems constantly evolve, staying ahead of the dynamic tech
          recruitment landscape. Our Tech Stack: Artificial Intelligence Machine
          Learning Natural Language Processing Discord API Integration Big Data
          Analytics Embrace the future of tech recruitment. Partner with us to
          secure the FAANG talent that will drive your company's innovation and
          growth.
        </p>
>>>>>>> 62d1ed3 (go)
      </div>
    </div>
  );
}

export default Home;
