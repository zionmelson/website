/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import { track } from "@vercel/analytics";

import discord from "./images/discord.svg";

import "./App.css";

function Home() {
  return (
    <div className="main">
      <div className="vbox">
        <div className="hbox" style={{ gap: "0.5rem" }}>
          <h1 className="h1" style={{ color: "white" }}>
            hire people on
          </h1>
          <h1 className="h1" style={{ color: "#5761f6" }}>
            Discord
          </h1>
          <div className="hbox">
            <img src={discord} className="emoji" alt="discord" />
          </div>
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
              width: "10.5rem",
              height: "3rem",
              borderRadius: "0.5rem",
            }}
          >
            welcome 👋
          </div>
        </a>
        <a
          href="https://www.learnmutiny.io/stats"
          style={{ marginTop: "0.5rem" }}
          onClick={() => track("stats")}
        >
          <div
            className="vbox"
            style={{
              background: "#999999",
              width: "10.5rem",
              height: "3rem",
              borderRadius: "0.5rem",
            }}
          >
            stats 📊
          </div>
        </a>
        <article
          style={{
            color: "#111111",
            lineHeight: "0",
            marginTop: "1rem",
          }}
          itemscope
          itemtype="https://schema.org/TechArticle"
        >
          <h1 itemprop="headline">
            AI-Powered FAANG Talent Sourcing: Revolutionizing Tech Recruitment
          </h1>
          <p itemprop="description">
            Looking to hire top-tier talent from FAANG companies (Facebook,
            Amazon, Apple, Netflix, Google)? Our cutting-edge recruitment agency
            leverages artificial intelligence and Discord community engagement
            to connect you with the cream of the tech industry crop.
          </p>
          <section itemprop="articleSection">
            <h2>Innovative AI-Driven Recruitment Solutions</h2>
            <ul>
              <li>Artificial Intelligence</li>
              <li>Machine Learning</li>
              <li>Natural Language Processing</li>
              <li>Discord API Integration</li>
              <li>Big Data Analytics</li>
            </ul>
          </section>
          <section itemprop="articleSection">
            <h2>Unparalleled Benefits of Our Tech Recruitment Approach</h2>
            <ul>
              <li>
                <strong>Access to Elite FAANG Talent:</strong> Tap into a
                network of experienced professionals from the world's leading
                tech companies.
              </li>
              <li>
                <strong>Innovative Sourcing Techniques:</strong> Utilize
                AI-powered bots to engage and assess candidates in real-time on
                Discord.
              </li>
              <li>
                <strong>Data-Driven Insights:</strong> Leverage analytics to
                make informed decisions about potential hires and market trends.
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
          </section>
          <section itemprop="articleSection">
            <h2>Cutting-Edge Technology Stack</h2>
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
          </section>

          <p>
            Embrace the future of tech recruitment.{" "}
            <a href="/contact" itemprop="mainEntityOfPage">
              Partner with us
            </a>{" "}
            to secure the FAANG talent that will drive your company's innovation
            and growth.
          </p>
          <footer>
            <p>
              Learn more about our{" "}
              <a href="/services">AI-powered recruitment services</a> or explore
              our <a href="/case-studies">success stories</a>.
            </p>
          </footer>
        </article>
        <article style={{ color: "#111111", lineHeight: "0", marginTop: "1rem" }} itemscope itemtype="https://schema.org/TechArticle">
  <h1 itemprop="headline">
    Discord-First Tech Recruitment: Building Quality-Focused Communities
  </h1>
  
  <p itemprop="description">
    Transform your tech recruitment strategy by leveraging Discord's powerful community features and our innovative approval-based approach. Create an exclusive talent pool where every member is manually vetted, ensuring the highest quality candidate interactions and hiring outcomes.
  </p>

  <section itemprop="articleSection">
    <h2>Advanced Discord Community Features</h2>
    <ul>
      <li>Role-Based Access Control</li>
      <li>Custom Bot Integration</li>
      <li>Channel Management</li>
      <li>Member Verification Systems</li>
      <li>Community Engagement Tools</li>
    </ul>
  </section>

  <section itemprop="articleSection">
    <h2>Key Benefits of Our Discord-First Approach</h2>
    <ul>
      <li>
        <strong>Strict Approval Process:</strong> Every community member undergoes thorough verification, ensuring only qualified professionals join your talent pool.
      </li>
      <li>
        <strong>Role-Based Organization:</strong> Utilize Discord's role system to categorize members by expertise, experience level, and interests for targeted recruitment.
      </li>
      <li>
        <strong>Active Community Management:</strong> Foster meaningful discussions and connections through moderated channels and scheduled events.
      </li>
      <li>
        <strong>Real-Time Engagement:</strong> Leverage Discord's voice, video, and screen sharing capabilities for immediate candidate interactions and technical assessments.
      </li>
      <li>
        <strong>Automated Workflow Integration:</strong> Custom bots handle routine tasks like candidate screening and interview scheduling.
      </li>
    </ul>
  </section>

  <section itemprop="articleSection">
    <h2>Innovative Discord Features We Leverage</h2>
    <ul>
      <li>
        <strong>Forum Channels:</strong> Create structured discussions for different tech specialties and job opportunities, enabling focused candidate engagement.
      </li>
      <li>
        <strong>Stage Events:</strong> Host large-scale tech talks, AMAs, and recruitment events to showcase your company culture and opportunities.
      </li>
      <li>
        <strong>Thread Management:</strong> Organize conversations efficiently with automated thread creation and archiving for each job opening.
      </li>
    </ul>
  </section>

  <p>
    Experience the power of community-driven recruitment.{" "}
    <a href="/contact" itemprop="mainEntityOfPage">
      Join our Discord
    </a>{" "}
    to build your exclusive talent pipeline.
  </p>

  <footer>
    <p>
      Discover our{" "}
      <a href="/community-guidelines">community guidelines</a> or review our{" "}
      <a href="/success-metrics">recruitment metrics</a>.
    </p>
  </footer>
</article>
        <article style={{ color: "#111111", lineHeight: "0", marginTop: "1rem" }} itemscope itemtype="https://schema.org/TechArticle">
  <h1 itemprop="headline">
    Monetize Your FAANG Network: LinkedIn to Discord Referral Program
  </h1>
  
  <p itemprop="description">
    Transform your professional LinkedIn connections into valuable opportunities. Our innovative referral program rewards tech professionals who help grow our exclusive Discord community with quality FAANG talent, creating a win-win ecosystem for all participants.
  </p>

  <section itemprop="articleSection">
    <h2>Unlock Your Network's Value</h2>
    <ul>
      <li>LinkedIn Connection Monetization</li>
      <li>Passive Income Generation</li>
      <li>Performance-Based Rewards</li>
      <li>Network Growth Incentives</li>
      <li>Quality-Focused Compensation</li>
    </ul>
  </section>

  <section itemprop="articleSection">
    <h2>Why Our Referral Program Stands Out</h2>
    <ul>
      <li>
        <strong>Transparent Reward System:</strong> Earn competitive compensation for each qualified FAANG professional who joins and remains active in our community.
      </li>
      <li>
        <strong>Tiered Benefits:</strong> Unlock higher reward levels and exclusive perks as you successfully bring more valuable connections into the network.
      </li>
      <li>
        <strong>Long-Term Earnings:</strong> Benefit from ongoing rewards when your referrals actively participate in our community's growth and success.
      </li>
      <li>
        <strong>Quality Recognition:</strong> Receive premium bonuses for referring senior-level professionals and technical leaders from top companies.
      </li>
      <li>
        <strong>Community Status:</strong> Gain elevated roles and recognition within our Discord community as a successful talent connector.
      </li>
    </ul>
  </section>

  <section itemprop="articleSection">
    <h2>Maximizing Your Referral Success</h2>
    <ul>
      <li>
        <strong>Smart Targeting:</strong> We provide tools and templates to help you identify and approach the most valuable connections in your network.
      </li>
      <li>
        <strong>Automated Tracking:</strong> Our system automatically credits you for successful referrals, ensuring you never miss out on rewards.
      </li>
      <li>
        <strong>Performance Analytics:</strong> Access detailed insights about your referral success rate and earning potential through our dashboard.
      </li>
    </ul>
  </section>

  <section itemprop="articleSection">
    <h2>Success Stories</h2>
    <ul>
      <li>
        <strong>Network Champions:</strong> Join our top performers who have built substantial passive income streams through strategic referrals.
      </li>
      <li>
        <strong>Community Leaders:</strong> Many of our most successful members started by simply sharing opportunities with their professional networks.
      </li>
    </ul>
  </section>

  <p>
    Start monetizing your professional network today.{" "}
    <a href="/referral-program" itemprop="mainEntityOfPage">
      Join our referral program
    </a>{" "}
    and transform your LinkedIn connections into valuable opportunities.
  </p>

  <footer>
    <p>
      Review our{" "}
      <a href="/referral-terms">program terms</a> or explore our{" "}
      <a href="/top-earners">top earner showcase</a>.
    </p>
  </footer>
</article>
      </div>
    </div>
  );
}

export default Home;
