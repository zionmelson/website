/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import { track } from "@vercel/analytics";

import tinder from "./images/tinder.svg";

import "./App.css";

function Home() {
  return (
    <div className="main">
      <div className="vbox">
        <div className="hbox" style={{ gap: "0.5rem" }}>
          <h1 className="h1" style={{ color: "#ee3e73" }}>
            it's like
          </h1>
          <div className="hbox">
            <img src={tinder} className="emoji" alt="tinder" />
            <h1 className="h1" style={{ color: "#f05a64" }}>
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
          <div
            className="vbox"
            style={{
              background: "#5964f1",
              width: "15.5rem",
              height: "3.5rem",
              borderRadius: "0.5rem",
            }}
          >
            pop a mint ❄️
          </div>
        </a>
        <article
          style={{
            color: "#111111",
            lineHeight: "0",
            marginTop: "1rem",
          }}
        >
          <h1>
            AI-Powered FAANG Talent Sourcing: Revolutionizing Tech Recruitment
          </h1>

          <p>
            Are you looking to hire top-tier talent from FAANG companies
            (Facebook, Amazon, Apple, Netflix, Google)? Our cutting-edge
            recruitment agency leverages artificial intelligence and Discord
            community engagement to connect you with the cream of the tech
            industry crop.
          </p>

          <h2>Why Choose Our AI-Driven Recruitment Solution?</h2>
          <ul>
            <li>
              <strong>Advanced AI Algorithms:</strong> Our proprietary machine
              learning models identify and evaluate high-potential candidates
              with unparalleled accuracy.
            </li>
            <li>
              <strong>Discord Talent Pool:</strong> Access a vibrant community
              of tech professionals actively discussing industry trends and
              showcasing their skills.
            </li>
            <li>
              <strong>Streamlined Hiring Process:</strong> Automated screening
              and matching save you time and resources in your talent
              acquisition efforts.
            </li>
          </ul>

          <h2>Key Benefits</h2>
          <ul>
            <li>
              <strong>Access to Elite FAANG Talent:</strong> Tap into a network
              of experienced professionals from the world's leading tech
              companies.
            </li>
            <li>
              <strong>Innovative Sourcing Techniques:</strong> Utilize
              AI-powered bots to engage and assess candidates in real-time on
              Discord.
            </li>
            <li>
              <strong>Data-Driven Insights:</strong> Leverage analytics to make
              informed decisions about potential hires and market trends.
            </li>
            <li>
              <strong>Efficient Candidate Matching:</strong> Our AI algorithms
              ensure perfect alignment between job requirements and candidate
              skills.
            </li>
            <li>
              <strong>Continuous Learning:</strong> Our systems constantly
              evolve, staying ahead of the dynamic tech recruitment landscape.
            </li>
          </ul>

          <h2>Our Tech Stack</h2>
          <ul>
            <li>Artificial Intelligence</li>
            <li>Machine Learning</li>
            <li>Natural Language Processing</li>
            <li>Discord API Integration</li>
            <li>Big Data Analytics</li>
          </ul>

          <p>
            Embrace the future of tech recruitment. Partner with us to secure
            the FAANG talent that will drive your company's innovation and
            growth.
          </p>
        </article>
      </div>
    </div>
  );
}

export default Home;
