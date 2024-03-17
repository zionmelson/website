/* eslint-disable react/prop-types */
import {
  FaUber,
  FaStripeS,
  FaDiscord,
  FaPlus,
  FaMinus,
  FaMinusCircle,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { SiCashapp } from "react-icons/si";
import { FaMeta } from "react-icons/fa6";
import { TbBrandAirbnb } from "react-icons/tb";

import { useSpring, animated } from "react-spring";

import Lottie from "lottie-react";
import developer from "./assets/json/developer.json";
import group from "./assets/json/group.json";

import cashapp from "./assets/svg/cashapp.svg";
import stock from "./assets/svg/stock.svg";
import apple from "./assets/svg/apple.svg";
import metamask from "./assets/svg/metamask.svg";
import ea from "./assets/svg/ea.svg";
import bumble from "./assets/svg/bumble.svg";
import meta from "./assets/svg/meta.svg";
import docusign from "./assets/svg/docusign.svg";
import grammarly from "./assets/svg/grammarly.svg";
import instacart from "./assets/svg/instacart.svg";
import toast from "./assets/svg/toast.svg";
import expedia from "./assets/svg/expedia.svg";
import snap from "./assets/svg/snap.svg";
import affirm from "./assets/svg/affirm.svg";
import google from "./assets/svg/google.svg";
import buzzfeed from "./assets/svg/buzzfeed.svg";
import rivian from "./assets/svg/rivian.svg";
import mozilla from "./assets/svg/mozilla.svg";
import zoom from "./assets/svg/zoom.svg";
import meetup from "./assets/svg/meetup.svg";
import amazon from "./assets/svg/amazon.svg";
import logo from "./assets/svg/logo.svg";
import stripe from "./assets/svg/stripe.svg";

import github from "./assets/svg/github.svg";
import aws from "./assets/svg/aws.svg";
import gcp from "./assets/svg/gcp.svg";
import azure from "./assets/svg/azure.svg";
import docker from "./assets/svg/docker.svg";
import terraform from "./assets/svg/terraform.svg";

import jonathan from "./assets/png/jonathan.png";
import ian from "./assets/png/ian.png";
import smiley from "./assets/png/silver.png";

import gsap from "gsap";
import SplitText from "split-text-js";
import { useEffect, useState, useRef } from "react";

import "./App.css";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 900,
    config: { mass: 10, tension: 20, friction: 25 },
  });

  return (
    <animated.div
      style={{ fontFamily: "Inter, sans-serif", fontWeight: "700" }}
    >
      {number.to((n) => `${n.toFixed(0)}+`)}
    </animated.div>
  );
}

function Home() {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    company: "",
    email: "",
    title: "",
    search: "",
    developer: "",
    message: "",
    companies: [],
    packages: {},
  });

  const [packages, setPackages] = useState({
    projectManager: 0,
    seniorEngineer: 0,
    juniorEngineer: 0,
  });

  const [bio, setBio] = useState(1);

  const [companies, setCompanies] = useState([]);

  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [error, setError] = useState(null);

  const [submitted, setSubmitted] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [sourceType, setSourceType] = useState("");
  const [date, setDate] = useState("");

  const addCompany = (newCompany) => {
    if (
      companies.length < 6 &&
      !companies.find((company) => company.name === newCompany.name)
    ) {
      setCompanies((prevCompanies) => [...prevCompanies, newCompany]);
      setFormData({ ...formData, companies: [...companies, newCompany] });

      console.log("company added:", newCompany);
      console.log("companies:", companies);
    }
  };

  const removeCompany = (company) => {
    setCompanies((prevCompanies) =>
      prevCompanies.filter((prevCompany) => prevCompany.name !== company.name)
    );
    setFormData({
      ...formData,
      companies: companies.filter(
        (prevCompany) => prevCompany.name !== company
      ),
    });
  };

  const addToPackages = (engineer) => {
    setPackages((prevPackages) => ({
      ...prevPackages,
      [engineer]: Math.min(10, prevPackages[engineer] + 1),
    }));

    setFormData({ ...formData, packages: { ...packages, [engineer]: 1 } });
  };

  const removeFromPackages = (engineer) => {
    setPackages((prevPackages) => ({
      ...prevPackages,
      [engineer]: Math.max(0, prevPackages[engineer] - 1),
    }));

    setFormData({ ...formData, packages: { ...packages, [engineer]: 0 } });
  };

  useEffect(() => {
    const newDate = new Date().toLocaleDateString();
    setDate(newDate);
  }, []);

  const toggleOpen = (num) => {
    setIsOpen(num);
  };

  useEffect(() => {
    if (window.screen.width < 780) {
      setMobile(true);
    }
  }, []);

  const targetRef = useRef(null);
  const sourcedRef = useRef(null);
  const directRef = useRef(null);
  const projectRef = useRef(null);

  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSourced = () => {
    if (sourcedRef.current) {
      sourcedRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToDirect = () => {
    if (directRef.current) {
      directRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProject = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "search") {
      setSourceType(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
        setSubmitted(true);

        setFormData({
          first: "",
          last: "",
          company: "",
          email: "",
          title: "",
          search: "",
          developer: "",
          message: "",
        });
      } else {
        console.error("response error:", data.error, response.status);
        setSubmissionStatus("failure");
        setError(data.error);
        setSubmitted(true);
        setLoading(false);

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
      {/* intro */}
      <div className="box">
        <div className="vertical-content">
          {mobile ? (
            <h1 className="h1">
              Hire a recently laid-off
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
                <h1 className="h1" id="gsap">
                  project manager
                </h1>
                <h1 className="h1" id="gsap">
                  designer
                </h1>
              </div>
              for your startup
            </h1>
          ) : (
            <h1 className="h1">
              Hire recently laid-off
              <div className="span">
                <h1 className="h1" id="gsap">
                  full-stack developers
                </h1>
                <h1 className="h1" id="gsap">
                  back-end developers
                </h1>
                <h1 className="h1" id="gsap">
                  systems engineers
                </h1>
                <h1 className="h1" id="gsap">
                  software architects
                </h1>
                <h1 className="h1" id="gsap">
                  regression engineers
                </h1>
                <h1 className="h1" id="gsap">
                  cloud engineers
                </h1>
                <h1 className="h1" id="gsap">
                  blockchain engineers
                </h1>
                <h1 className="h1" id="gsap">
                  devops engineers
                </h1>
                <h1 className="h1" id="gsap">
                  database engineers
                </h1>
                <h1 className="h1" id="gsap">
                  data engineers
                </h1>
                <h1 className="h1" id="gsap">
                  project managers
                </h1>
                <h1 className="h1" id="gsap">
                  designers
                </h1>
              </div>
              for your startup
            </h1>
          )}

          <h2 className="h2">
            we source recently laid-off engineers from tech giants and unicorns
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
              hire an engineer
            </button>
          </h5>
        </div>
      </div>
      {/* sourcing */}
      <div className="box">
        <div className="vertical-content">
          <div
            style={{
              width: "100%",
              textAlign: "start",
            }}
          >
            <h1 className="h1">Hiring recently laid off engineers</h1>
            <h3 className="h3">
              The recent major tech layoffs have created an opportunity for
              startup companies that need to hire and welcome new, vetted
              engineering teams.
            </h3>
            <h5 className="h5">
              At learnmutiny we have focused our work to revolve around this
              newly shapen reality and help make the onboarding of recent
              lay-offs as seamless as possible.
            </h5>
            <div
              style={{
                marginTop: "1rem",
                marginBottom: "1rem",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {!mobile ? (
                <>
                  <div>
                    <h2 className="h2">
                      We offer 2 distinct sourcing services
                    </h2>
                    <h5 className="h5">
                      <button
                        className="emoji-container"
                        onClick={() => {
                          toggleOpen(2);
                          scrollToProject();
                        }}
                      >
                        project package
                      </button>
                    </h5>
                    <h5 className="h5">
                      <button
                        className="emoji-container"
                        onClick={() => {
                          toggleOpen(1);
                          scrollToDirect();
                        }}
                      >
                        direct-to-hire
                      </button>
                    </h5>
                  </div>
                  <div className="stats-content">
                    <div
                      className="horizontal-content"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <div
                        className="vertical-content"
                        style={{
                          justifyContent: "center",
                          width: "50%",
                        }}
                      >
                        <h1 className="number">
                          <Number n={210} />
                        </h1>
                        <h5 className="h5">Engineers sourced</h5>
                      </div>
                      <div
                        className="vertical-content"
                        style={{
                          justifyContent: "center",
                          width: "50%",
                        }}
                      >
                        <h1 className="number">
                          <Number n={40} />
                        </h1>
                        <h5 className="h5">Engineers matched</h5>
                      </div>
                      <div
                        className="vertical-content"
                        style={{
                          justifyContent: "center",
                          width: "50%",
                        }}
                      >
                        <h1 className="number">
                          <Number n={10} />
                        </h1>
                        <h5 className="h5">Companies worked with</h5>
                      </div>
                    </div>
                    <h5
                      className="h4"
                      style={{
                        marginTop: "1rem",
                        marginBottom: "0",
                      }}
                    >
                      <button
                        className="emoji-container"
                        onClick={() => {
                          scrollToSourced();
                          setBio(1);
                        }}
                      >
                        view our sourced engineers
                      </button>
                    </h5>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h2 className="h2">
                      We offer 2 distinct sourcing services
                    </h2>
                    <h5 className="h5">
                      <button
                        className="emoji-container"
                        onClick={() => {
                          toggleOpen(2);
                          scrollToProject();
                        }}
                      >
                        project package
                      </button>
                    </h5>
                    <h5 className="h5">
                      <button
                        className="emoji-container"
                        onClick={() => {
                          toggleOpen(1);
                          scrollToDirect();
                        }}
                      >
                        direct-to-hire
                      </button>
                    </h5>
                    <div className="stats-content">
                      <div
                        className="vertical-content"
                        style={{
                          width: "50%",
                        }}
                      >
                        <h1 className="number">
                          <Number n={210} />
                        </h1>
                        <h5 className="h5">Engineers sourced</h5>
                      </div>
                      <div
                        className="vertical-content"
                        style={{
                          width: "50%",
                        }}
                      >
                        <h1 className="number">
                          <Number n={40} />
                        </h1>
                        <h5 className="h5">Engineers matched</h5>
                      </div>
                      <div
                        className="vertical-content"
                        style={{
                          width: "50%",
                        }}
                      >
                        <h1 className="number">
                          <Number n={10} />
                        </h1>
                        <h5 className="h5">Companies worked with</h5>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <h1 className="h1">Our Services</h1>
          </div>
          {/* project package */}
          <div
            className="vertical-content"
            ref={projectRef}
            style={{ width: "100%" }}
          >
            <div className={`sourcing-content ${isOpen ? "open" : ""}`}>
              <h2 className="h2">Project Package</h2>
              <Lottie animationData={group} style={{ width: "15rem" }} />
              <div
                className="sourcing-info"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                }}
              >
                <h3 className="h3">1. Initial Due Diligence Screening</h3>
                <h5 className="h5">
                  Our goal with the initial due diligence screening is to
                  condense down the exact requirements and timelines for
                  successful project deployment.
                </h5>
                <h5 className="h5">
                  During this process, our consultants work with your team to
                  understand the current state of your application and the
                  desired state of the application. Our team has industry
                  experience in the most commonly used technologies and cloud
                  infrastructures and can help your team plan accordingly for
                  project deployment.
                </h5>
                <h5 className="h5">
                  Our project package source allows you to customize the exact
                  position and role of every engineer on the team for the
                  project. These teams are tailored to the needs of your company
                  during our consultation.
                </h5>
                <h5 className="h5">
                  Within each of our project packages, you can pick and choose
                  the specific engineers at market rates for your project.
                </h5>
                {mobile ? null : (
                  <div className="due-diligence-content">
                    <div
                      className="horizontal-content"
                      style={{
                        justifyContent: "space-evenly",
                        width: "100%",
                      }}
                    >
                      <div className="horizontal-content">
                        <div
                          className="vertical-content"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                          }}
                        >
                          <h3 className="h3">
                            Project Managers: {packages.projectManager}
                          </h3>
                          <h3 className="h3">
                            Senior Engineers: {packages.seniorEngineer}
                          </h3>
                          <h3 className="h3">
                            Junior Engineers: {packages.juniorEngineer}
                          </h3>
                        </div>
                      </div>
                      <div
                        className="vertical-content"
                        style={{
                          width: "50%",
                        }}
                      >
                        <h5 className="h5">your team will be sourced from</h5>
                        {companies.length > 0 ? (
                          <div
                            className="horizontal-content"
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              flexWrap: "wrap",
                              gap: "1rem",
                            }}
                          >
                            {companies.map((company) => (
                              <span
                                className="emoji-container"
                                key={company.name}
                                style={{
                                  padding: "1rem",
                                }}
                              >
                                <button
                                  onClick={() => removeCompany(company)}
                                  style={{
                                    marginRight: "0.5rem",
                                    color: "red",
                                  }}
                                >
                                  <FaMinusCircle className="operator" />
                                </button>
                                <img src={company.logo} className="emoji-2" />
                                {company.name}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <div
                            className="horizontal-content"
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              flexWrap: "wrap",
                              gap: "1rem",
                            }}
                          >
                            <span
                              className="emoji-container"
                              id="github-container"
                              style={{
                                padding: "1rem",
                              }}
                            >
                              <img src={logo} className="emoji-2" />
                              learnmutiny.io
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                <div
                  className="due-diligence-content"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "start",
                    justifyContent: "space-evenly",
                    width: "100%",
                  }}
                >
                  <div className="vertical-content">
                    <div
                      className="horizontal-content"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        marginBottom: "1rem",
                      }}
                    >
                      <div className="vertical-content">
                        <h5 className="h5">
                          <button className="emoji-container">
                            Project Manager
                          </button>
                        </h5>
                        <div
                          className="horizontal-content"
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            width: "100%",
                          }}
                        >
                          <button
                            className="buttons"
                            onClick={() => removeFromPackages("projectManager")}
                          >
                            <FaMinus className="operator" />
                          </button>
                          <button
                            className="buttons"
                            onClick={() => addToPackages("projectManager")}
                          >
                            <FaPlus className="operator" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="horizontal-content"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        marginBottom: "1rem",
                      }}
                    >
                      <div className="vertical-content">
                        <h5 className="h5">
                          <button className="emoji-container">
                            Senior Engineer
                          </button>
                        </h5>
                        <div
                          className="horizontal-content"
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            width: "100%",
                          }}
                        >
                          <button
                            className="buttons"
                            onClick={() => removeFromPackages("seniorEngineer")}
                          >
                            <FaMinus className="operator" />
                          </button>
                          <button
                            className="buttons"
                            onClick={() => addToPackages("seniorEngineer")}
                          >
                            <FaPlus className="operator" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="horizontal-content"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        marginBottom: "1rem",
                      }}
                    >
                      <div className="vertical-content">
                        <h5 className="h5">
                          <button className="emoji-container">
                            Junior Engineer
                          </button>
                        </h5>
                        <div
                          className="horizontal-content"
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            width: "100%",
                          }}
                        >
                          <button
                            className="buttons"
                            onClick={() => removeFromPackages("juniorEngineer")}
                          >
                            <FaMinus className="operator" />
                          </button>
                          <button
                            className="buttons"
                            onClick={() => addToPackages("juniorEngineer")}
                          >
                            <FaPlus className="operator" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {mobile ? (
                    <div className="vertical-content">
                      <h5 className="h5">
                        <button className="emoji-container">
                          {packages.projectManager} PMs
                        </button>
                      </h5>
                      <h5 className="h5">
                        <button className="emoji-container">
                          {packages.seniorEngineer} SEs
                        </button>
                      </h5>
                      <h5 className="h5">
                        <button className="emoji-container">
                          {packages.juniorEngineer} JEs
                        </button>
                      </h5>
                    </div>
                  ) : (
                    <div className="vertical-content">
                      <h5 className="h5">from</h5>
                      <div
                        className="vertical-content"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                          alignItems: "start",
                          justifyContent: "end",
                          gap: "0.5rem",
                          width: "35rem",
                          height: "10rem",
                        }}
                      >
                        <span
                          className="emoji-container"
                          id="github-container"
                          onClick={() =>
                            addCompany({ name: "StockX", logo: stock })
                          }
                          style={{
                            padding: "1rem",
                          }}
                        >
                          <img src={stock} className="emoji-2" alt="calendar" />
                          StockX
                        </span>
                        <span
                          className="emoji-container"
                          id="github-container"
                          onClick={() => addCompany({ name: "EA", logo: ea })}
                          style={{
                            padding: "1rem",
                          }}
                        >
                          <img src={ea} className="emoji-2" alt="calendar" />
                          EA
                        </span>
                        <span
                          className="emoji-container"
                          id="github-container"
                          onClick={() =>
                            addCompany({ name: "Apple", logo: apple })
                          }
                          style={{
                            padding: "1rem",
                          }}
                        >
                          <img src={apple} className="emoji-2" alt="calendar" />
                          Apple
                        </span>
                        <span
                          className="emoji-container"
                          id="github-container"
                          onClick={() =>
                            addCompany({ name: "Amazon", logo: amazon })
                          }
                          style={{
                            padding: "1rem",
                          }}
                        >
                          <img
                            src={amazon}
                            className="emoji-2"
                            alt="calendar"
                          />
                          Amazon
                        </span>
                        <span
                          className="emoji-container"
                          id="github-container"
                          onClick={() =>
                            addCompany({ name: "Meetup", logo: meetup })
                          }
                          style={{
                            padding: "1rem",
                          }}
                        >
                          <img
                            src={meetup}
                            className="emoji-2"
                            alt="calendar"
                          />
                          Meetup
                        </span>
                        <span
                          className="emoji-container"
                          id="github-container"
                          onClick={() =>
                            addCompany({ name: "Zoom", logo: zoom })
                          }
                          style={{
                            padding: "1rem",
                          }}
                        >
                          <img src={zoom} className="emoji-2" alt="calendar" />
                          Zoom
                        </span>
                        <span
                          className="emoji-container"
                          id="github-container"
                          onClick={() =>
                            addCompany({ name: "Bumble", logo: bumble })
                          }
                          style={{
                            padding: "1rem",
                          }}
                        >
                          <img
                            src={bumble}
                            className="emoji-2"
                            alt="calendar"
                          />
                          Bumble
                        </span>
                        <span
                          className="emoji-container"
                          id="github-container"
                          onClick={() =>
                            addCompany({ name: "Meta", logo: meta })
                          }
                          style={{
                            padding: "1rem",
                          }}
                        >
                          <img src={meta} className="emoji-2" alt="calendar" />
                          Meta
                        </span>
                        <span
                          className="emoji-container"
                          id="github-container"
                          onClick={() =>
                            addCompany({ name: "DocuSign", logo: docusign })
                          }
                          style={{
                            padding: "1rem",
                          }}
                        >
                          <img
                            src={docusign}
                            className="emoji-2"
                            alt="calendar"
                          />
                          DocuSign
                        </span>
                        <span
                          className="emoji-container"
                          id="github-container"
                          onClick={() =>
                            addCompany({ name: "Expedia", logo: expedia })
                          }
                          style={{
                            padding: "1rem",
                          }}
                        >
                          <img
                            src={expedia}
                            className="emoji-2"
                            alt="calendar"
                          />
                          Expedia
                        </span>
                        <span
                          className="emoji-container"
                          id="github-container"
                          onClick={() =>
                            addCompany({ name: "Toast", logo: toast })
                          }
                          style={{
                            padding: "1rem",
                          }}
                        >
                          <img src={toast} className="emoji-2" alt="calendar" />
                          Toast
                        </span>
                        <span
                          className="emoji-container"
                          id="github-container"
                          onClick={() =>
                            addCompany({ name: "Instacart", logo: instacart })
                          }
                          style={{
                            padding: "1rem",
                          }}
                        >
                          <img
                            src={instacart}
                            className="emoji-2"
                            alt="calendar"
                          />
                          Instacart
                        </span>
                        <span
                          className="emoji-container"
                          id="github-container"
                          onClick={() =>
                            addCompany({ name: "Cashapp", logo: cashapp })
                          }
                          style={{
                            padding: "1rem",
                          }}
                        >
                          <img
                            src={cashapp}
                            className="emoji-2"
                            alt="calendar"
                          />
                          Cashapp
                        </span>
                        <span
                          className="emoji-container"
                          id="github-container"
                          onClick={() =>
                            addCompany({ name: "Metamask", logo: metamask })
                          }
                          style={{
                            padding: "1rem",
                          }}
                        >
                          <img
                            src={metamask}
                            className="emoji-2"
                            alt="calendar"
                          />
                          Metamask
                        </span>
                        <span
                          className="emoji-container"
                          id="github-container"
                          onClick={() =>
                            addCompany({ name: "Bumble", logo: bumble })
                          }
                          style={{
                            padding: "1rem",
                          }}
                        >
                          <img
                            src={bumble}
                            className="emoji-2"
                            alt="calendar"
                          />
                          Bumble
                        </span>
                        <span
                          className="emoji-container"
                          id="github-container"
                          onClick={() =>
                            addCompany({ name: "Grammarly", logo: grammarly })
                          }
                          style={{
                            padding: "1rem",
                          }}
                        >
                          <img
                            src={grammarly}
                            className="emoji-2"
                            alt="calendar"
                          />
                          Grammarly
                        </span>
                        <span
                          className="emoji-container"
                          id="github-container"
                          onClick={() =>
                            addCompany({ name: "Google", logo: google })
                          }
                          style={{
                            padding: "1rem",
                          }}
                        >
                          <img
                            src={google}
                            className="emoji-2"
                            alt="calendar"
                          />
                          Google
                        </span>
                        <span
                          className="emoji-container"
                          id="github-container"
                          onClick={() =>
                            addCompany({ name: "Snapchat", logo: snap })
                          }
                          style={{
                            padding: "1rem",
                          }}
                        >
                          <img src={snap} className="emoji-2" alt="calendar" />
                          Snapchat
                        </span>
                        <span
                          className="emoji-container"
                          id="github-container"
                          onClick={() =>
                            addCompany({ name: "Affirm", logo: affirm })
                          }
                          style={{
                            padding: "1rem",
                          }}
                        >
                          <img
                            src={affirm}
                            className="emoji-2"
                            alt="calendar"
                          />
                          Affirm
                        </span>
                        <span
                          className="emoji-container"
                          id="github-container"
                          onClick={() =>
                            addCompany({ name: "Buzzfeed", logo: buzzfeed })
                          }
                          style={{
                            padding: "1rem",
                          }}
                        >
                          <img
                            src={buzzfeed}
                            className="emoji-2"
                            alt="calendar"
                          />
                          Buzzfeed
                        </span>
                        <span
                          className="emoji-container"
                          id="github-container"
                          onClick={() =>
                            addCompany({ name: "Rivian", logo: rivian })
                          }
                          style={{
                            padding: "1rem",
                          }}
                        >
                          <img
                            src={rivian}
                            className="emoji-2"
                            alt="calendar"
                          />
                          Rivian
                        </span>
                        <span
                          className="emoji-container"
                          id="github-container"
                          onClick={() =>
                            addCompany({ name: "Mozilla", logo: mozilla })
                          }
                          style={{
                            padding: "1rem",
                          }}
                        >
                          <img
                            src={mozilla}
                            className="emoji-2"
                            alt="calendar"
                          />
                          Mozilla
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <h5
                  className="h5"
                  style={{
                    alignSelf: "end",
                  }}
                >
                  <button className="emoji-container" onClick={scrollToTarget}>
                    hire your package
                  </button>
                </h5>
              </div>

              {isOpen == 2 && (
                <div className="sourcing-info">
                  <h3 className="h3">2. Talent Source</h3>
                  <h4 className="h4">
                    We offer sourcing services to mitigate the fluctuations of
                    our pipeline to give you a tailored search based on your
                    engineering needs.
                  </h4>
                  <h5 className="h5">
                    Due to the nature of our talent pipeline, there tends to be
                    variability in the availability of engineers for each
                    project. We work with recently laid-off engineers looking to
                    join project-based teams immediately.
                  </h5>
                  <h5 className="h5">
                    Depending on job market conditions, we may have a sudden
                    influx of engineers who specialize in a specific technology
                    or cloud infrastructure. Because of this, we could have a
                    wide range of engineering talent ready to join project-based
                    teams, or we could have limited engineering talent.
                  </h5>
                  <h5 className="h5">
                    <button className="emoji-container">
                      last source: {date}
                    </button>
                  </h5>
                  <h3 className="h3">3. Placement Procedure</h3>
                  <h5 className="h5">
                    Once we have identified the ideal engineering package for
                    your team, we will work with your team to schedule
                    interviews and technical assessments.
                  </h5>
                  <h5 className="h5">
                    We have crafted our project package to be as easy as
                    possible for your team to onboard a new engineering team. We
                    utilize a simple and easy-to-understand billing process that
                    helps you to understand the precise cost of the project and
                    plan accordingly.
                  </h5>
                  <span
                    className="emoji-container"
                    id="aws-container"
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                    }}
                  >
                    <img src={stripe} className="emoji-2" alt="calendar" />
                    Stripe
                  </span>
                  <h5 className="h5">
                    All invoices via Stripe are sent out at the end of each
                    month, and are due within 15 days of invoice.
                  </h5>
                  <h3 className="h3">4. Required Check-ups</h3>
                  <h5 className="h5">
                    Throughout the project, we will check up with you and your
                    team of engineers to ensure that project milestones are
                    being met.
                  </h5>
                </div>
              )}
              {isOpen == 2 ? (
                <h5 className="h5">
                  <button
                    className="emoji-container"
                    onClick={() => toggleOpen(0)}
                  >
                    close view
                  </button>
                </h5>
              ) : (
                <h5 className="h5">
                  <button
                    className="emoji-container"
                    onClick={() => toggleOpen(2)}
                  >
                    view full process
                  </button>
                </h5>
              )}
              <h5 className="h5">
                <button className="emoji-container" onClick={scrollToTarget}>
                  hire a recently laid-off team
                </button>
              </h5>
            </div>
          </div>
          {/* direct-to-hire */}
          <div
            className="vertical-content"
            style={{ width: "100%" }}
            ref={directRef}
          >
            <div className={`sourcing-content ${isOpen ? "open" : ""}`}>
              <h2 className="h2">Direct-to-Hire Placements</h2>
              <Lottie animationData={developer} style={{ width: "10rem" }} />
              <div className="sourcing-info">
                <h3 className="h3">1. Initial Due Diligence Screening</h3>
                <h5 className="h5">
                  We work with your team to understand the current state of your
                  company and the position you are looking to fill.
                </h5>
                <h5 className="h5">
                  Our team will work with you to understand the technical
                  requirements and company culture fit to help us determine the
                  complexity of the role and help us source the ideal engineer
                  for your team.
                </h5>
                <h5 className="h5">
                  During this process, our consultants will work with your team
                  to understand the exact requirements for the role. Our team
                  has industry experience in the most commonly used technologies
                  and cloud infrastructures and can help you understand the
                  hidden complexities of the search.
                </h5>

                <h5 className="h5">
                  During this process, we also lay out the timelines for each
                  step in our sourcing process.
                </h5>
                <span
                  className="emoji-container"
                  id="github-container"
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                  }}
                >
                  <img src={github} className="emoji-2" alt="calendar" />
                  GitHub
                </span>
                {mobile ? (
                  <span
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      flexDirection: "row",
                      gap: "1rem",
                    }}
                  >
                    <span
                      className="emoji-container"
                      id="aws-container"
                      style={{
                        marginBottom: "1rem",
                        padding: "1rem",
                      }}
                    >
                      <img src={aws} className="emoji-2" alt="calendar" />
                      AWS
                    </span>
                    <span
                      className="emoji-container"
                      id="azure-container"
                      style={{
                        marginBottom: "1rem",
                        padding: "1rem",
                      }}
                    >
                      <img src={azure} className="emoji-2" alt="calendar" />
                      Azure
                    </span>
                    <span
                      className="emoji-container"
                      id="docker-container"
                      style={{
                        marginBottom: "1rem",
                        padding: "1rem",
                      }}
                    >
                      <img src={docker} className="emoji-2" alt="calendar" />
                      Docker
                    </span>
                  </span>
                ) : (
                  <span
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      flexDirection: "row",
                      gap: "1rem",
                    }}
                  >
                    <span
                      className="emoji-container"
                      id="aws-container"
                      style={{
                        marginBottom: "1rem",
                        padding: "1rem",
                      }}
                    >
                      <img src={aws} className="emoji-2" alt="calendar" />
                      AWS
                    </span>
                    <span
                      className="emoji-container"
                      id="gcp-container"
                      style={{
                        marginBottom: "1rem",
                        padding: "1rem",
                      }}
                    >
                      <img src={gcp} className="emoji-2" alt="calendar" />
                      Google Cloud
                    </span>
                    <span
                      className="emoji-container"
                      id="azure-container"
                      style={{
                        marginBottom: "1rem",
                        padding: "1rem",
                      }}
                    >
                      <img src={azure} className="emoji-2" alt="calendar" />
                      Azure
                    </span>
                    <span
                      className="emoji-container"
                      id="docker-container"
                      style={{
                        marginBottom: "1rem",
                        padding: "1rem",
                      }}
                    >
                      <img src={docker} className="emoji-2" alt="calendar" />
                      Docker
                    </span>
                    <span
                      className="emoji-container"
                      id="terraform-container"
                      style={{
                        marginBottom: "1rem",
                        padding: "1rem",
                      }}
                    >
                      <img src={terraform} className="emoji-2" alt="calendar" />
                      Terraform
                    </span>
                  </span>
                )}
              </div>
              {isOpen == 1 && (
                <div className="sourcing-info">
                  <h3 className="h3">2. Talent Source</h3>
                  <h5 className="h5">
                    We have pre-screened engineers available to join startup
                    teams immediately, yet they may not always be the right fit
                    for your team.
                  </h5>
                  <h5 className="h5">
                    Because of this, our team will shift our pipeline toward
                    sourcing an engineer that fits the exact requirements we
                    found during our Initial Due Diligence Screening.
                  </h5>
                  <h5 className="h4">
                    <button
                      className="emoji-container"
                      onClick={() => {
                        scrollToSourced();
                        setBio(1);
                      }}
                    >
                      view our sourced engineers
                    </button>
                  </h5>
                  <h3 className="h3">3. Placement Procedure</h3>
                  <h5 className="h5">
                    Once we have identified the ideal engineer for your team, we
                    will work with your team to schedule interviews and
                    technical assessments.
                  </h5>
                  <h5 className="h5">
                    Depending on the complexity and day-to-day requirements of
                    the role, we will conduct either a standard or executive
                    search.
                  </h5>
                  <h5 className="h5">
                    Standard search positions typically require a lower level of
                    experience and complexity, i.e. Staff Engineers, Principal
                    Engineers, & Engineering Directors.
                  </h5>
                  <h5 className="h5">
                    Executive search positions typically require a higher level
                    of experience and complexity, i.e. Co-Founding Engineer, VP
                    of Engineering, & CTOs.
                  </h5>
                  <h3 className="h3">4. Required Check-up</h3>
                  <h5 className="h5">
                    After an engineer is placed, we will follow up with your
                    team and the engineer to ensure that the placement and
                    culture fit works for both parties.
                  </h5>
                  <h5 className="h5">
                    If the engineer does not meet the requirements of the role
                    or culture fit, we reconduct our sourcing process and source
                    a replacement engineer.
                  </h5>
                </div>
              )}
              {isOpen == 1 ? (
                <h5 className="h5">
                  <button
                    className="emoji-container"
                    onClick={() => toggleOpen(0)}
                  >
                    close view
                  </button>
                </h5>
              ) : (
                <h5 className="h5">
                  <button
                    className="emoji-container"
                    onClick={() => toggleOpen(1)}
                  >
                    view full process
                  </button>
                </h5>
              )}
              <h5 className="h5">
                <button className="emoji-container" onClick={scrollToTarget}>
                  hire an engineer
                </button>
              </h5>
            </div>
          </div>
        </div>
      </div>
      {/* lay-offs */}
      <div
        className="box"
        style={{
          display: "flex",
          justifyContent: "start",
        }}
        ref={sourcedRef}
      >
        <div
          className="vertical-content"
          style={{
            width: "100%",
          }}
        >
          <div>
            <h1 className="h1">Recently sourced laid off engineers</h1>
          </div>
          <div
            className="layoff-content"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <div className="memoji-container">
              <img src={jonathan} alt="frank" className="memoji" />
            </div>
            {!mobile && (
              <div
                className="vertical-content"
                style={{
                  width: "50%",
                }}
              >
                {bio === 1 ? (
                  <div
                    style={{
                      textAlign: "start",
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
                    <h5 className="h5">
                      Frank is a senior Java Engineer with over 12 years of
                      professional experience split between startups and Fortune
                      500 companies. He has worked with some of the largest
                      companies in the world including LinkedIn, Paypal, and
                      Apple. Frank was let go from Apple within the last year.
                    </h5>
                    <h5 className="h5">
                      <button
                        className="emoji-container"
                        onClick={() => setBio(0)}
                      >
                        close bio
                      </button>
                    </h5>
                  </div>
                ) : (
                  <>
                    <h5 className="h5">
                      <button
                        className="emoji-container"
                        onClick={() => setBio(1)}
                      >
                        view full bio
                      </button>
                    </h5>
                  </>
                )}
              </div>
            )}
            <div
              className="horizontal-content"
              style={{
                margin: "0",
                display: "flex",
                flexDirection: "column",
              }}
            >
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
                  hire an engineer
                </button>
              </h5>
            </div>
          </div>
          <div
            className="layoff-content"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <div className="memoji-container">
              <img src={ian} alt="Coty" className="memoji" />
            </div>
            {!mobile && (
              <div
                className="vertical-content"
                style={{
                  width: "50%",
                }}
              >
                {bio === 2 ? (
                  <div
                    style={{
                      textAlign: "start",
                    }}
                  >
                    <h2
                      className="h2"
                      style={{
                        width: "100%",
                      }}
                    >
                      Coty Rothery
                    </h2>
                    <h5 className="h5">
                      Coty is a highly talented self-taught engineer. His
                      experience resides in the Backend using GO, Rust, and
                      Javascript. He was the 94th employee at StockX where he
                      worked on everything from design of third-party
                      applications, architecture, cloud computing, and DevOps.
                    </h5>

                    <h5 className="h5">
                      <button
                        className="emoji-container"
                        onClick={() => setBio(0)}
                      >
                        close bio
                      </button>
                    </h5>
                  </div>
                ) : (
                  <>
                    <h5 className="h5">
                      <button
                        className="emoji-container"
                        onClick={() => setBio(2)}
                      >
                        view full bio
                      </button>
                    </h5>
                  </>
                )}
              </div>
            )}
            <div
              className="horizontal-content"
              style={{
                margin: "0",
                display: "flex",
                flexDirection: "column",
              }}
            >
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
                  hire an engineer
                </button>
              </h5>
            </div>
          </div>
          <div
            className="layoff-content"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <div className="memoji-container">
              <img src={smiley} alt="Pratik" className="memoji" />
            </div>
            {!mobile && (
              <div
                className="vertical-content"
                style={{
                  width: "50%",
                }}
              >
                {bio === 3 ? (
                  <div
                    style={{
                      textAlign: "start",
                    }}
                  >
                    <h2
                      className="h2"
                      style={{
                        width: "100%",
                      }}
                    >
                      Pratik Phadke
                    </h2>
                    <h5 className="h5">
                      Pratik was recently laid off from Cashapp. He was a mobile
                      engineering manager with 12 years of experience working
                      with Android and IOS developments. At Cash App, he was
                      involved in the processes behind the temperature-changing
                      and pink debit card. When released, they were the
                      fastest-growing debit cards in the world.
                    </h5>

                    <h5 className="h5">
                      <button
                        className="emoji-container"
                        onClick={() => setBio(0)}
                      >
                        close bio
                      </button>
                    </h5>
                  </div>
                ) : (
                  <>
                    <h5 className="h5">
                      <button
                        className="emoji-container"
                        onClick={() => setBio(3)}
                      >
                        view full bio
                      </button>
                    </h5>
                  </>
                )}
              </div>
            )}
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
                  hire an engineer
                </button>
              </h5>
            </div>
          </div>
          <h5
            className="h4"
            style={{
              marginTop: "1rem",
              marginBottom: "0",
            }}
          >
            <button className="emoji-container" onClick={scrollToTarget}>
              view more engineers
            </button>
          </h5>
        </div>
      </div>
      {/* submit */}
      <div
        className="box"
        style={{
          display: "flex",
          justifyContent: "start",
          width: "100%",
        }}
        ref={targetRef}
      >
        <div className="vertical-content" style={{ width: "100%" }}>
          {submitted && submissionStatus === "success" ? (
            <h1 className="h1">Hired an engineer 😉</h1>
          ) : (
            <h1 className="h1">Hire an engineer</h1>
          )}
          {submitted && submissionStatus === "success" ? (
            <>
              <p>We have received your submission!</p>
              <p> Our consultation team will reach out shortly.</p>
            </>
          ) : (
            <form
              className="vertical-content"
              style={{ gap: "1rem", width: "100%", display: "flex" }}
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="First name"
                className="input"
                name="first"
                value={formData.first}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Last name"
                className="input"
                name="last"
                value={formData.last}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Company name"
                className="input"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                placeholder="Company email"
                className="input"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <select
                type="text"
                placeholder="Company title"
                className="input"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              >
                <option value="" selected disabled hidden>
                  Company title
                </option>
                <option value="Engineer/Analyst">Engineer or Analyst</option>
                <option value="Associate">Associate</option>
                <option value="Director/Principal">
                  Director or Principal
                </option>
                <option value="VP/Head">VP or Head of Division</option>
                <option value="Co-Founder">Co-Founder or Chief Officer</option>
                <option value="other">Other</option>
              </select>
              <select
                type="text"
                placeholder="Source type"
                className="input"
                name="search"
                value={formData.search}
                onChange={handleChange}
                required
              >
                <option value="" selected disabled hidden>
                  Source type
                </option>
                <option value="Direct-to-hire">Direct-to-Hire</option>
                <option value="Project-based">Project ackage</option>
              </select>
              {sourceType === "Direct-to-hire" && (
                <select
                  type="text"
                  placeholder="Developer"
                  className="input"
                  name="developer"
                  value={formData.developer}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled hidden>
                    Select a engineer type
                  </option>
                  <option value="Staff Engineer">Staff Engineer</option>
                  <option value="Principal Engineer">Principal Engineer</option>
                  <option value="Director of Engineering">
                    Director of Engineering
                  </option>
                  <option value="VP of Engineering">VP of Engineering</option>
                  <option value="Co-Founding Engineer">
                    Co-Founding Engineer
                  </option>
                  <option value="CTO">CTO</option>
                </select>
              )}
              <textarea
                type="text"
                placeholder="Message (optional)"
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
                  Submit
                </h4>
              </button>
            </form>
          )}
          {loading && !submitted ? <p>Submitting...</p> : null}
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
          <h1 className="h1">Let&apos;s get started</h1>
          <div className="pricing-content">
            <h2 className="h2">Project ackage source</h2>
            <span
              className="emoji-container"
              onClick={scrollToTarget}
              style={{ marginBottom: "1rem" }}
            >
              contact sales
            </span>
            <h5 className="h5">30-day guarantee</h5>
          </div>
          <div className="pricing-content">
            <h2 className="h2">Direct-to-hire source</h2>
            <span
              className="emoji-container"
              onClick={scrollToTarget}
              style={{ marginBottom: "1rem" }}
            >
              contact sales
            </span>
            <h5 className="h5">replacement guarantee</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
