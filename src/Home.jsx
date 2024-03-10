import { FaUber, FaStripeS, FaDiscord } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { SiCashapp } from "react-icons/si";
import { FaMeta } from "react-icons/fa6";
import { TbBrandAirbnb } from "react-icons/tb";

import Lottie from "lottie-react";
import animation from "./assets/json/animate2.json";

import cashapp from "./assets/svg/cashapp.svg";
import stock from "./assets/svg/stock.svg";
import apple from "./assets/svg/apple.svg";
import yc from "./assets/svg/yc.svg";
import a16z from "./assets/svg/a16z.svg";
import founders from "./assets/svg/founders.svg";

import jonathan from "./assets/png/jonathan.png";
import ian from "./assets/png/ian.png";
import smiley from "./assets/png/silver.png";

import gsap from "gsap";
import SplitText from "split-text-js";
import { useEffect, useState, useRef } from "react";

import "./App.css";

function Home() {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    developer: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.screen.width < 780) {
      setMobile(true);
    }
  }, []);

  const targetRef = useRef(null);

  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus(null);
    setSubmitted(false);
    try {
      const response = await fetch(
        "https://us-central1-learnmutiny-website.cloudfunctions.net/form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();

      console.log("data from response", data);

      if (response.ok) {
        console.log("response ok", response.status);
        setSubmissionStatus("success");

        setFormData({
          first: "",
          last: "",
          email: "",
          developer: "",
          message: "",
        });

        setSubmitted(true);
      } else {
        console.error("response error:", data.error, response.status);
        setSubmissionStatus("failure");
        setError(data.error);
        setSubmitted(true);

        // You can add any additional logic for failed submission here
      }
    } catch (error) {
      console.error("fetching error:", error);
      setSubmissionStatus("failure");

      setSubmitted(true);

      // You can add error handling logic here
    }
  };

  useEffect(() => {
    const technologies = gsap.utils.toArray("#gsap");
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

    return () => tl.kill();
  }, []);

  return (
    <div className="main">
      {/* startup-intro */}
      <div className="box">
        <div className="vertical-content">
          <h1 className="h1">
            hire a &quot;laid-off&quot; senior
            <div className="span">
              <h1 className="h1" id="gsap">
                full-stack developer
              </h1>
              <h1 className="h1" id="gsap">
                back-end developer
              </h1>
              <h1 className="h1" id="gsap">
                systems engineer
              </h1>
              <h1 className="h1" id="gsap">
                software architect
              </h1>
              <h1 className="h1" id="gsap">
                regression engineer
              </h1>
              <h1 className="h1" id="gsap">
                cloud engineer
              </h1>
              <h1 className="h1" id="gsap">
                blockchain engineer
              </h1>
              <h1 className="h1" id="gsap">
                devops engineer
              </h1>
              <h1 className="h1" id="gsap">
                database engineer
              </h1>
              <h1 className="h1" id="gsap">
                data engineer
              </h1>
            </div>
            for your startup
          </h1>
          <h2 className="h2">
            we source recently laid-off senior developers from tech giants and
            unicorns
          </h2>
          {mobile ? (
            <div className="icons" style={{ marginBottom: "2rem" }}>
              <SiCashapp id="cashapp" className="icon" />
              <FaMeta id="meta" className="icon" />
              <RiTwitterXFill id="X" className="icon" />
              <TbBrandAirbnb id="airbnb" className="icon" />
            </div>
          ) : (
            <div className="icons" style={{ marginBottom: "2rem" }}>
              <SiCashapp id="cashapp" className="icon" />
              <FaMeta id="meta" className="icon" />
              <RiTwitterXFill id="X" className="icon" />
              <TbBrandAirbnb id="airbnb" className="icon" />
              <FaUber id="uber" className="icon" />
              <FaStripeS id="stripe" className="icon" />
              <FaDiscord id="discord" className="icon" />
            </div>
          )}
          <h2 className="h2">and place them at your startup company</h2>
          <h5 className="h5">
            <button className="emoji-container" onClick={scrollToTarget}>
              hire a layoff
            </button>
          </h5>
        </div>
      </div>
      {/* hiring */}
      <div className="box">
        <div className="vertical-content">
          <h1 className="h1">hiring laid-off talent</h1>
          <h2 className="h2">
            the biggest names in tech are laying off thousands of talented
            senior engineers that are now available for hire
          </h2>
          <Lottie animationData={animation} />
          <h3 className="h3">
            we have built relationship pipelines with these engineers and can
            work with your team to get you access to our professionals
          </h3>
        </div>
      </div>
      {/* lay-offs */}
      <div className="box">
        <div className="vertical-content">
          <h1 className="h1">sourced &quot;lay-offs&quot;</h1>
          <div className="layoff-content">
            <div
              className="memoji-container"
              style={{
                position: "relative",
                margin: "0",
              }}
            >
              <img src={jonathan} alt="ian" className="memoji" />
            </div>
            <div
              className="horizontal-content"
              style={{
                margin: "0",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h2
                className="h2"
                style={{
                  width: "100%",
                }}
              >
                Frank Secord
              </h2>
              <h5
                className="h5"
                style={{ marginBottom: "1rem", width: "100%" }}
              >
                senior back-end developer
              </h5>
              <div
                className="horizontal-content-small"
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 0,
                  margin: 0,
                }}
              >
                <span
                  className="emoji-container"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                    border: "2px solid #fff",
                  }}
                >
                  <img src={apple} className="emoji-2" alt="calendar" />
                  Apple
                </span>
                <h5
                  className="h5"
                  style={{ marginBottom: "1rem", width: "100%" }}
                >
                  laid-off on December 2023
                </h5>
              </div>
              <h5 className="h5">
                <button className="emoji-container" onClick={scrollToTarget}>
                  hire a layoff
                </button>
              </h5>
            </div>
          </div>
          <div className="layoff-content">
            <div
              className="memoji-container"
              style={{ position: "relative", margin: "0" }}
            >
              <img src={ian} alt="ian" className="memoji" />
            </div>
            <div
              className="horizontal-content"
              style={{
                margin: "0",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h2
                className="h2"
                style={{
                  width: "100%",
                }}
              >
                Coty Ranger
              </h2>
              <h5
                className="h5"
                style={{ marginBottom: "1rem", width: "100%" }}
              >
                senior software engineer
              </h5>
              <div
                className="horizontal-content-small"
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 0,
                  margin: 0,
                }}
              >
                <span
                  className="emoji-container"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                    border: "2px solid #fff",
                  }}
                >
                  <img src={stock} className="emoji-2" alt="calendar" />
                  StockX
                </span>
                <h5
                  className="h5"
                  style={{ marginBottom: "1rem", width: "100%" }}
                >
                  laid-off on January 2024
                </h5>
              </div>
              <h5 className="h5">
                <button className="emoji-container" onClick={scrollToTarget}>
                  hire a layoff
                </button>
              </h5>
            </div>
          </div>
          <div className="layoff-content">
            <div
              className="memoji-container"
              style={{
                position: "relative",
                margin: "0",
              }}
            >
              <img src={smiley} alt="ian" className="memoji" />
            </div>
            <div
              className="horizontal-content"
              style={{
                margin: "0",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h2
                className="h2"
                style={{
                  width: "100%",
                }}
              >
                Pratik Silver
              </h2>
              <h5
                className="h5"
                style={{ marginBottom: "1rem", width: "100%" }}
              >
                mobile engineering manager
              </h5>
              <div
                className="horizontal-content-small"
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 0,
                  margin: 0,
                }}
              >
                <span
                  className="emoji-container"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                    border: "2px solid #fff",
                  }}
                >
                  <img src={cashapp} className="emoji-2" alt="calendar" />
                  Cashapp
                </span>
                <h5
                  className="h5"
                  style={{ marginBottom: "1rem", width: "100%" }}
                >
                  laid-off on February 2024
                </h5>
              </div>
              <h5 className="h5">
                <button className="emoji-container" onClick={scrollToTarget}>
                  hire a layoff
                </button>
              </h5>
            </div>
          </div>
        </div>
      </div>
      {/* companies */}
      <div className="box">
        <div className="vertical-content">
          <h1 className="h1">venture backed clients</h1>
          <h2 className="h2">
            we work with clients that are backed by top venture capital firms
            and have raised their series A to B round
          </h2>
          <h3 className="h3">
            we have helped companies backed by YCombinator, Andreessen Horowitz,
            and Founder&apos;s Fund source talent for their teams
          </h3>
          <div
            className="horizontal-content"
            style={{
              gap: "0.5rem",
            }}
          >
            <span
              className="emoji-container"
              style={{
                marginBottom: "1rem",
                padding: "1rem",
                border: "2px solid #fff",
              }}
            >
              <img src={yc} className="emoji-2" alt="calendar" />
              YCombinator
            </span>
            <span
              className="emoji-container"
              style={{
                marginBottom: "1rem",
                padding: "1rem",
                border: "2px solid #fff",
              }}
            >
              <img src={a16z} className="emoji-2" alt="calendar" />
              Andreessen Horowitz
            </span>
            <span
              className="emoji-container"
              style={{
                marginBottom: "1rem",
                padding: "1rem",
                border: "2px solid #fff",
              }}
            >
              <img src={founders} className="emoji-2" alt="calendar" />
              Founder&apos;s Fund
            </span>
          </div>
        </div>
      </div>
      {/* submit */}
      <div className="box" ref={targetRef}>
        <div className="vertical-content">
          <h1 className="h1">hire a &quot;lay-off&quot;</h1>
          {submitted && submissionStatus === "success" ? (
            <>
              <p>Thank you for your submission!</p>
              <p> We will get back to you soon.</p>
            </>
          ) : (
            <form
              className="vertical-content"
              style={{ gap: "1rem", width: "100%", display: "flex" }}
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="first name"
                className="input"
                name="first"
                value={formData.first}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="last name"
                className="input"
                name="last"
                value={formData.last}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="company name"
                className="input"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                placeholder="company email"
                className="input"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <select
                type="text"
                placeholder="company title"
                className="input"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              >
                <option value="" selected disabled hidden>
                  company title
                </option>
                <option value="level1">Engineer or Analyst</option>
                <option value="level2">Associate</option>
                <option value="level3">Director or Principal</option>
                <option value="level4">VP or Head of Division</option>
                <option value="level5">Co-Founder or Chief Officer</option>
              </select>
              <select
                type="text"
                placeholder="developer"
                className="input"
                name="developer"
                value={formData.developer}
                onChange={handleChange}
                required
              >
                <option value="" disabled hidden>
                  select a engineer type
                </option>
                <option value="staff">Staff Engineer</option>
                <option value="principal">Principal Engineer</option>
                <option value="director">Director of Engineering</option>
                <option value="vp">VP of Engineering</option>
                <option value="co-founder">Co-Founding Engineer</option>
              </select>
              <textarea
                type="text"
                placeholder="message (optional)"
                className="input"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              <button
                className="emoji-container-submit"
                type="submit"
                onClick={scrollToTarget}
              >
                <h4 className="h4" style={{ margin: 0 }}>
                  submit
                </h4>
              </button>
            </form>
          )}
          {submissionStatus === "failure" && (
            <>
              <p>Failed to submit the form. Please try again.</p>
              <p>{error}</p>
            </>
          )}
        </div>
      </div>
      {/* pricing */}
      <div className="box">
        <div className="vertical-content">
          <h1 className="h1">engineer search costs</h1>
          <div className="pricing-content">
            <h1 className="h1">standard search</h1>
            <h3 className="h3">$2,000 engagement</h3>
            <span
              className="emoji-container"
              onClick={scrollToTarget}
              style={{ marginBottom: "1rem" }}
            >
              contact sales
            </span>
            <h5 className="h5">with a 60-day guarantee</h5>
          </div>
          <div className="pricing-content">
            <h1 className="h1">executive search</h1>
            <h3 className="h3">$4,000 engagement</h3>
            <span
              className="emoji-container"
              onClick={scrollToTarget}
              style={{ marginBottom: "1rem" }}
            >
              contact sales
            </span>
            <h5 className="h5">with a 90-day guarantee</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
