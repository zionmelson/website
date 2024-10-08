import "./App.css";

export default function Error() {
  return (
    <div className="main">
      <h1 className="h1">Let&apos;s get started</h1>
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
        itemscope
        itemtype="https://schema.org/TechArticle"
      >
        <h1 itemprop="headline">
          AI-Powered FAANG Talent Sourcing: Revolutionizing Tech Recruitment
        </h1>
        <p itemprop="description">
          Looking to hire top-tier talent from FAANG companies (Facebook,
          Amazon, Apple, Netflix, Google)? Our cutting-edge recruitment agency
          leverages artificial intelligence and Discord community engagement to
          connect you with the cream of the tech industry crop.
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
    </div>
  );
}
