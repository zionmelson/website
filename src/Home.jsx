/* eslint-disable use-isnan */
/* eslint-disable react/prop-types */
// import { io } from "socket.io-client";
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

import { Link } from "react-router-dom";

import { useSpring, animated } from "react-spring";

import Lottie from "lottie-react";
import developer from "./assets/json/developer.json";
import group from "./assets/json/group.json";
import rocket from "./assets/json/rocket.json";
import team from "./assets/json/team.json";

import netflix from "./assets/svg/netflix.svg";
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
import microsoft from "./assets/svg/microsoft.svg";
import logo from "./assets/svg/logo.svg";
import linkedin from "./assets/svg/linkedin-2.svg";
import discord from "./assets/svg/discord.svg";
import uber from "./assets/svg/uber.svg";
import airbnb from "./assets/svg/airbnb.svg";
import spotify from "./assets/svg/spotify.svg";
import twitch from "./assets/svg/twitch.svg";
import ebay from "./assets/svg/ebay.svg";
import paypal from "./assets/svg/paypal.svg";
import facebook from "./assets/svg/facebook.svg";
import twitter from "./assets/svg/twitter.svg";
import pinterest from "./assets/svg/pinterest.svg";
import tiktok from "./assets/svg/tiktok.svg";
import tesla from "./assets/svg/tesla.svg";
// import ibm from "./assets/svg/ibm.svg";
// import amazonBlack from "./assets/svg/amazonBlack.svg";
// import ibmWhite from "./assets/svg/ibmWhite.svg";

import gsap from "gsap";
import SplitText from "split-text-js";
import { useEffect, useState, useRef } from "react";

import "./App.css";

const socket = new WebSocket(
  "wss://23c8np7196.execute-api.us-east-1.amazonaws.com/production/"
);

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

function Percent({ n }) {
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
      {number.to((n) => `${n.toFixed(0)}%`)}
    </animated.div>
  );
}

function Home() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "");
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

  const [memberCount, setMemberCount] = useState(0);
  const [activeCount, setActiveCount] = useState(0);
  const [interviewedRateCount, setInterviewedRateCount] = useState(0);

  const [packages, setPackages] = useState({
    projectManager: 0,
    softwareEngineer: 0,
    graphicDesigner: 0,
  });

  const [companies, setCompanies] = useState([]);

  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [error, setError] = useState(null);

  const [submitted, setSubmitted] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // const [metaCount, setMetaCount] = useState(0);
  // const [appleCount, setAppleCount] = useState(0);
  // const [googleCount, setGoogleCount] = useState(0);
  // const [netflixCount, setNetflixCount] = useState(0);
  // const [teslaCount, setTeslaCount] = useState(0);
  // const [microsoftCount, setMicrosoftCount] = useState(0);
  // const [amazonCount, setAmazonCount] = useState(0);
  // const [paypalCount, setPaypalCount] = useState(0);
  // const [ibmCount, setIbmCount] = useState(0);

  const [sourceType, setSourceType] = useState("");

  const addCompany = (newCompany) => {
    const saved = localStorage.getItem("companies");

    console.log("form:", formData);

    if (
      companies.length < 6 &&
      !companies.find((company) => company.name === newCompany.name)
    ) {
      setCompanies((prevCompanies) => {
        const updatedCompanies = [...prevCompanies, newCompany];
        return updatedCompanies;
      });

      setFormData((prevData) => {
        console.log("Previous Data:", prevData);
        const updatedData = {
          ...prevData,
          companies: [...prevData.companies, newCompany],
        };
        console.log("Updated Data:", updatedData);
        return updatedData;
      });

      localStorage.setItem(newCompany.name, JSON.stringify(newCompany));
      localStorage.setItem(
        "companies",
        JSON.stringify([...companies, newCompany])
      );

      console.log("company added:", newCompany);
      console.log("previous companies:", companies);
      console.log("cached:", JSON.parse(saved));
    }
  };

  const removeCompany = (company) => {
    const saved = localStorage.getItem("companies");

    setCompanies((prevCompanies) =>
      prevCompanies.filter((prevCompany) => prevCompany.name !== company.name)
    );
    setFormData({
      ...formData,
      companies: companies.filter(
        (prevCompany) => prevCompany.name !== company
      ),
    });
    localStorage.removeItem(company.name);
    const updatedCompanies = companies.filter(
      (prevCompany) => prevCompany.name !== company.name
    );
    console.log("updated companies:", updatedCompanies);
    localStorage.setItem("companies", JSON.stringify(updatedCompanies));

    console.log("company removed:", company);
    console.log("previous companies:", companies);
    console.log("cached:", JSON.parse(saved));
  };

  const addToPackages = (engineer) => {
    setPackages((prevPackages) => {
      const updatedPackages = {
        ...prevPackages,
        [engineer]: Math.min(10, prevPackages[engineer] + 1),
      };

      localStorage.setItem("packages", JSON.stringify(updatedPackages));

      setFormData((prevFormData) => ({
        ...prevFormData,
        packages: {
          ...prevFormData.packages,
          [engineer]: updatedPackages[engineer],
        },
      }));
      return updatedPackages;
    });
  };

  const removeFromPackages = (engineer) => {
    setPackages((prevPackages) => {
      const updatedPackages = {
        ...prevPackages,
        [engineer]: Math.max(0, prevPackages[engineer] - 1),
      };

      localStorage.setItem("packages", JSON.stringify(updatedPackages));

      setFormData((prevFormData) => ({
        ...prevFormData,
        packages: {
          ...prevFormData.packages,
          [engineer]: updatedPackages[engineer],
        },
      }));

      return updatedPackages;
    });
  };

  const targetRef = useRef(null);
  const directRef = useRef(null);
  const projectRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    toggleFullScreen();
  };

  const scrollToTarget = () => {
    if (targetRef.current) {
      const offsetTop = -100;
      const top =
        targetRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        offsetTop;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const scrollToDirect = () => {
    if (directRef.current) {
      const offsetTop = -75;
      const top =
        directRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        offsetTop;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const scrollToProject = () => {
    if (projectRef.current) {
      const offsetTop = -75;
      const top =
        projectRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        offsetTop;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
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

        localStorage.removeItem("companies");
        localStorage.removeItem("packages");

        setFormData({
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

        setCompanies([]);
        setPackages({
          projectManager: 0,
          softwareEngineer: 0,
          graphicDesigner: 0,
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
    setTheme(theme);
    if (window.screen.width < 1100) {
      setMobile(true);
    }

    const technologies = gsap.utils.toArray("#gsap");
    const tl = gsap.timeline({ repeat: -1 });
    const saved = localStorage.getItem("companies");
    const cachedPackages = localStorage.getItem("packages");

    socket.addEventListener("open", () => {
      console.log("connected to server");

      socket.send(
        JSON.stringify({
          action: "message",
          body: {
            message: "discord_num",
          },
        })
      );
    });

    socket.addEventListener("close", () => {
      console.log("disconnected from server");
    });

    socket.addEventListener("message", async (event) => {
      let body = JSON.parse(event.data).body;
      console.log("message from server:", body);

      if (body.message === "discord_num") {
        return;
      }

      if (body.message === "discord_count") {
        let memberCount = await body.memberCount;
        let activeCount = await body.activeCount;
        let appliedCount = await body.appliedCount;
        let interviewedCount = await body.interviewedCount;
        let interviewedRate = (await interviewedCount) / appliedCount;

        let meta = await body.metaCount;
        let apple = await body.appleCount;
        let google = await body.googleCount;
        let netflix = await body.netflixCount;
        let tesla = await body.teslaCount;
        let microsoft = await body.microsoftCount;
        let amazon = await body.amazonCount;
        let paypal = await body.paypalCount;
        let ibm = await body.ibmCount;

        console.log(
          memberCount,
          activeCount,
          interviewedRate,
          meta,
          apple,
          google,
          netflix,
          tesla,
          microsoft,
          amazon,
          paypal,
          ibm
        );

        setMemberCount(memberCount);
        setActiveCount(activeCount);
        setInterviewedRateCount(interviewedRate * 100);

        // setMetaCount(meta);
        // setAppleCount(apple);
        // setGoogleCount(google);
        // setNetflixCount(netflix);
        // setTeslaCount(tesla);
        // setMicrosoftCount(microsoft);
        // setAmazonCount(amazon);
        // setPaypalCount(paypal);
        // setIbmCount(ibm);
      }
    });

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

    if (cachedPackages) {
      setPackages(() => {
        const updatedPackages = JSON.parse(cachedPackages);
        return updatedPackages;
      });
      setFormData({ ...formData, packages: JSON.parse(cachedPackages) });
    }

    if (saved) {
      setCompanies([]);
      JSON.parse(saved).forEach((company) => {
        let name = localStorage.getItem(company.name);
        setCompanies((prevCompanies) => [...prevCompanies, JSON.parse(name)]);
      });
    }

    setTimeout(() => setLoaded(true), 800);

    return () => tl.kill();
  }, [loaded, theme]);

  return (
    <div className="main">
      {/* intro */}
      <div className="box">
        <div className="vertical-content">
          <h1 className="h1">
            Hire a big tech
            {loaded ? (
              <div className="span">
                {loaded ? (
                  <>
                    <h2 className="h1" id="gsap">
                      full-stack developer
                    </h2>
                    <h2 className="h1" id="gsap">
                      back-end developer
                    </h2>
                    <h2 className="h1" id="gsap">
                      systems engineer
                    </h2>
                    <h2 className="h1" id="gsap">
                      software architect
                    </h2>
                    <h2 className="h1" id="gsap">
                      regression engineer
                    </h2>
                    <h2 className="h1" id="gsap">
                      cloud engineer
                    </h2>
                    <h2 className="h1" id="gsap">
                      blockchain engineer
                    </h2>
                    <h2 className="h1" id="gsap">
                      devops engineer
                    </h2>
                    <h2 className="h1" id="gsap">
                      database engineer
                    </h2>
                    <h2 className="h1" id="gsap">
                      data engineer
                    </h2>
                    <h2 className="h1" id="gsap">
                      project manager
                    </h2>
                    <h2 className="h1" id="gsap">
                      ui/ux designer
                    </h2>
                    <h2 className="h1" id="gsap">
                      graphic designer
                    </h2>
                    <h2 className="h1" id="gsap">
                      animation engineer
                    </h2>
                    <h2 className="h1" id="gsap">
                      product manager
                    </h2>
                    <h2 className="h1" id="gsap">
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
              <div className="span"></div>
            )}
            for your startup
          </h1>
          <h2 className="h2">
            we source tech talent from tech giants and unicorns
          </h2>
          {loaded && (
            <div
              className={`icons ${mobile ? "mobile" : ""}`}
              style={{
                marginBottom: "2rem",
                height: "5rem",
              }}
            >
              <SiCashapp id="cashapp" className="icon" />
              <FaMeta id="meta" className="icon" />
              <RiTwitterXFill id="X" className="icon" />
              <TbBrandAirbnb id="airbnb" className="icon" />
              {!mobile && (
                <>
                  <FaUber id="uber" className="icon" />
                  <FaStripeS id="stripe" className="icon" />
                  <FaDiscord id="discord" className="icon" />
                </>
              )}
            </div>
          )}
          {!loaded && (
            <div
              className={`icons ${mobile ? "mobile" : ""}`}
              style={{ marginBottom: "2rem", height: "5rem" }}
            >
              <img src={logo} id="icon" />
            </div>
          )}
          <h2 className="h2">and place them at your startup company</h2>
          <Link onClick={scrollToTop} to="/hire">
            <h5 className="h5">
              <button className="emoji-container">book a demo</button>
            </h5>
          </Link>
        </div>
      </div>
      {/* sourcing */}
      <div className="box">
        <div className="vertical-content">
          <div
            style={{
              width: "100%",
            }}
          >
            <h1 className="h1">Hire big tech talent</h1>
            <div className="stats-content">
              <div className="vertical-content">
                <h6 className="number">
                  <Number n={memberCount} />
                </h6>
                <h5 className="h5">Members joined 👋</h5>
              </div>
              <div className="vertical-content">
                <h6 className="number">
                  <Number n={activeCount} />
                </h6>
                <h5 className="h5">Looking for work 💸</h5>
              </div>
              <div className="vertical-content">
                <h6 className="number">
                  <Percent n={interviewedRateCount} />
                </h6>
                <h5 className="h5">Interviewed rate 📊</h5>
              </div>
            </div>
          </div>
          {/* scrum package */}
          <div
            className="vertical-content"
            ref={projectRef}
            style={{ width: "100%" }}
          >
            <div className="sourcing-content">
              <h2 className="h2">Scrum Package</h2>
              <Lottie animationData={group} style={{ width: "15rem" }} />
              <div
                className="sourcing-info"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                  textAlign: "center",
                }}
              >
                <h3 className="h1">Build your team</h3>
                {mobile ? null : (
                  <div className="due-diligence-content">
                    <div
                      className="horizontal-content"
                      style={{
                        justifyContent: "space-evenly",
                        width: "100%",
                        padding: "1rem",
                      }}
                    >
                      <div
                        className="vertical-content"
                        style={{
                          width: "75%",
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
                              <h5 className="h5" key={company.name}>
                                <button
                                  className="emoji-container"
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
                                </button>
                              </h5>
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
                            <h5 className="h5">
                              <button
                                className="emoji-container"
                                id="github-container"
                                style={{
                                  padding: "1rem",
                                }}
                              >
                                <img src={logo} className="emoji-2" />
                                learnmutiny.io
                              </button>
                            </h5>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                {mobile ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      width: "100%",
                      padding: "0.5rem",
                    }}
                  >
                    <div
                      className="horizontal-content"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <div
                        className="due-diligence-content"
                        style={{
                          width: "100%",
                          marginBottom: "1rem",
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
                              <h5 className="h5" key={company.name}>
                                <button
                                  className="emoji-container"
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
                                </button>
                              </h5>
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
                            <h5 className="h5">
                              <button
                                className="emoji-container"
                                id="github-container"
                                style={{
                                  padding: "1rem",
                                }}
                              >
                                <img src={logo} className="emoji-2" />
                                learnmutiny.io
                              </button>
                            </h5>
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      className="vertical-content"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "0.5rem",
                        width: "100%",
                      }}
                    >
                      <div
                        className="horizontal-content"
                        style={{
                          display: "flex",
                          width: "100%",
                          marginBottom: "1rem",
                        }}
                      >
                        <div className="vertical-content">
                          <h5 className="h5">
                            <button className="emoji-container">
                              Managers: {packages.projectManager}
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
                              onClick={() =>
                                removeFromPackages("projectManager")
                              }
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
                          marginBottom: "1rem",
                        }}
                      >
                        <div className="vertical-content">
                          <h5 className="h5">
                            <button className="emoji-container">
                              Engineers: {packages.softwareEngineer}
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
                              onClick={() =>
                                removeFromPackages("softwareEngineer")
                              }
                            >
                              <FaMinus className="operator" />
                            </button>
                            <button
                              className="buttons"
                              onClick={() => addToPackages("softwareEngineer")}
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
                          width: "100%",
                          marginBottom: "1rem",
                        }}
                      >
                        <div className="vertical-content">
                          <h5 className="h5">
                            <button className="emoji-container">
                              Designers: {packages.graphicDesigner}
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
                              onClick={() =>
                                removeFromPackages("graphicDesigner")
                              }
                            >
                              <FaMinus className="operator" />
                            </button>
                            <button
                              className="buttons"
                              onClick={() => addToPackages("graphicDesigner")}
                            >
                              <FaPlus className="operator" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="due-diligence-content"
                      style={{
                        width: "100%",
                      }}
                    >
                      <div
                        className="vertical-content"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                          alignItems: "start",
                          justifyContent: "center",
                          gap: "0.5rem",
                          width: "100%",
                        }}
                      >
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() => addCompany({ name: "EA", logo: ea })}
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img src={ea} className="emoji-2" alt="calendar" />
                            EA
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "Uber", logo: uber })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={uber}
                              className="emoji-2"
                              alt="calendar"
                            />
                            Uber
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "Tesla", logo: tesla })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={tesla}
                              className="emoji-2"
                              alt="calendar"
                            />
                            Tesla
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "Snapchat", logo: snap })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={snap}
                              className="emoji-2"
                              alt="calendar"
                            />
                            Snapchat
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "Spotify", logo: spotify })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={spotify}
                              className="emoji-2"
                              alt="calendar"
                            />
                            Spotify
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "Netflix", logo: netflix })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={netflix}
                              className="emoji-2"
                              alt="calendar"
                            />
                            Netflix
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "Microsoft", logo: microsoft })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={microsoft}
                              className="emoji-2"
                              alt="calendar"
                            />
                            Microsoft
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "Twitch", logo: twitch })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={twitch}
                              className="emoji-2"
                              alt="calendar"
                            />
                            Twitch
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
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
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "Paypal", logo: paypal })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={paypal}
                              className="emoji-2"
                              alt="calendar"
                            />
                            Paypal
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "Meta", logo: meta })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={meta}
                              className="emoji-2"
                              alt="calendar"
                            />
                            Meta
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
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
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
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
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
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
                          </button>
                        </h5>
                        {/* <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <button
                              style={{
                                marginRight: "0.5rem",
                              }}
                            >
                              <FaPlusCircle className="operator" />
                            </button>
                            add a company
                          </button>
                        </h5> */}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="due-diligence-content"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      width: "100%",
                      padding: "1rem",
                    }}
                  >
                    <div
                      className="vertical-content"
                      style={{
                        width: "35%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div
                        className="vertical-content"
                        style={{
                          display: "flex",
                          width: "100%",
                          marginBottom: "1rem",
                        }}
                      >
                        <h5 className="h5">
                          <button className="emoji-container">
                            Managers: {packages.projectManager}
                          </button>
                        </h5>
                        <div
                          className="horizontal-content"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "2rem",
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
                      <div
                        className="vertical-content"
                        style={{
                          display: "flex",
                          width: "100%",
                          marginBottom: "1rem",
                        }}
                      >
                        <h5 className="h5">
                          <button className="emoji-container">
                            Engineers: {packages.softwareEngineer}
                          </button>
                        </h5>
                        <div
                          className="horizontal-content"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "2rem",
                            width: "100%",
                          }}
                        >
                          <button
                            className="buttons"
                            onClick={() =>
                              removeFromPackages("softwareEngineer")
                            }
                          >
                            <FaMinus className="operator" />
                          </button>
                          <button
                            className="buttons"
                            onClick={() => addToPackages("softwareEngineer")}
                          >
                            <FaPlus className="operator" />
                          </button>
                        </div>
                      </div>
                      <div
                        className="vertical-content"
                        style={{
                          display: "flex",
                          width: "100%",
                          marginBottom: "1rem",
                        }}
                      >
                        <h5 className="h5">
                          <button className="emoji-container">
                            Designers: {packages.graphicDesigner}
                          </button>
                        </h5>
                        <div
                          className="horizontal-content"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "2rem",
                            width: "100%",
                          }}
                        >
                          <button
                            className="buttons"
                            onClick={() =>
                              removeFromPackages("graphicDesigner")
                            }
                          >
                            <FaMinus className="operator" />
                          </button>
                          <button
                            className="buttons"
                            onClick={() => addToPackages("graphicDesigner")}
                          >
                            <FaPlus className="operator" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="vertical-content"
                      style={{
                        width: "100%",
                      }}
                    >
                      <div
                        className="vertical-content"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                          alignItems: "start",
                          justifyContent: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "StockX", logo: stock })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={stock}
                              className="emoji-2"
                              alt="calendar"
                            />
                            StockX
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() => addCompany({ name: "EA", logo: ea })}
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img src={ea} className="emoji-2" alt="calendar" />
                            EA
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "Tesla", logo: tesla })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={tesla}
                              className="emoji-2"
                              alt="calendar"
                            />
                            Tesla
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "Netflix", logo: netflix })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={netflix}
                              className="emoji-2"
                              alt="calendar"
                            />
                            Netflix
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "Microsoft", logo: microsoft })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={microsoft}
                              className="emoji-2"
                              alt="calendar"
                            />
                            Microsoft
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "Discord", logo: discord })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={discord}
                              className="emoji-2"
                              alt="calendar"
                            />
                            Discord
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "Uber", logo: uber })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={uber}
                              className="emoji-2"
                              alt="calendar"
                            />
                            Uber
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "Airbnb", logo: airbnb })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={airbnb}
                              className="emoji-2"
                              alt="calendar"
                            />
                            Airbnb
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "Spotify", logo: spotify })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={spotify}
                              className="emoji-2"
                              alt="calendar"
                            />
                            Spotify
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "Twitch", logo: twitch })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={twitch}
                              className="emoji-2"
                              alt="calendar"
                            />
                            Twitch
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "Ebay", logo: ebay })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={ebay}
                              className="emoji-2"
                              alt="calendar"
                            />
                            Ebay
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "Paypal", logo: paypal })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={paypal}
                              className="emoji-2"
                              alt="calendar"
                            />
                            Paypal
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "Facebook", logo: facebook })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={facebook}
                              className="emoji-2"
                              alt="calendar"
                            />
                            Facebook
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "X", logo: twitter })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={twitter}
                              className="emoji-2"
                              alt="calendar"
                            />
                            X
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "Pinterest", logo: pinterest })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={pinterest}
                              className="emoji-2"
                              alt="calendar"
                            />
                            Pinterest
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "TikTok", logo: tiktok })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={tiktok}
                              className="emoji-2"
                              alt="calendar"
                            />
                            TikTok
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "Apple", logo: apple })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={apple}
                              className="emoji-2"
                              alt="calendar"
                            />
                            Apple
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "LinkedIn", logo: linkedin })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={linkedin}
                              className="emoji-2"
                              alt="calendar"
                            />
                            Linkedin
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
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
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
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
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "Zoom", logo: zoom })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={zoom}
                              className="emoji-2"
                              alt="calendar"
                            />
                            Zoom
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "Meta", logo: meta })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={meta}
                              className="emoji-2"
                              alt="calendar"
                            />
                            Meta
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
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
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
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
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "Toast", logo: toast })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={toast}
                              className="emoji-2"
                              alt="calendar"
                            />
                            Toast
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
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
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
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
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
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
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
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
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
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
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
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
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            onClick={() =>
                              addCompany({ name: "Snapchat", logo: snap })
                            }
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <img
                              src={snap}
                              className="emoji-2"
                              alt="calendar"
                            />
                            Snapchat
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
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
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
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
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
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
                          </button>
                        </h5>
                        <h5 className="h5">
                          <button
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
                          </button>
                        </h5>
                        {/* <h5 className="h5">
                          <button
                            className="emoji-container"
                            id="github-container"
                            style={{
                              padding: "1rem",
                            }}
                          >
                            <button
                              style={{
                                marginRight: "0.5rem",
                              }}
                            >
                              <FaPlusCircle className="operator" />
                            </button>
                            add a company
                          </button>
                        </h5> */}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <a
                href="https://app.eraser.io/workspace/WWEnxOiYsAFp622GpW9M?origin=share"
                target="_blank"
                rel="noreferrer"
              >
                <h5 className="h5">
                  <button className="emoji-container">view full process</button>
                </h5>
              </a>

              <h5 className="h5">
                <button className="emoji-container" onClick={scrollToTarget}>
                  hire team
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
            <div className="sourcing-content">
              <h2 className="h2">Direct-to-Hire Placements</h2>
              <div className="sourcing-info">
                <Lottie animationData={developer} style={{ width: "10rem" }} />
              </div>
              <a
                href="https://app.eraser.io/workspace/hnBS71Or5zh5z26MQ4r1?origin=share"
                target="_blank"
                rel="noreferrer"
              >
                <h5 className="h5">
                  <button className="emoji-container">view full process</button>
                </h5>
              </a>

              <h5 className="h5">
                <button className="emoji-container" onClick={scrollToTarget}>
                  book a demo
                </button>
              </h5>
            </div>
          </div>
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
            <h1 className="h1">Got it. 👍</h1>
          ) : (
            <h1 className="h1">Looking to hire?</h1>
          )}
          {submitted && submissionStatus === "success" && (
            <>
              <p>We have received your submission!</p>
              <p> Our consultation team will reach out shortly.</p>
            </>
          )}
          {loading ? (
            <div>
              <img src={logo} style={{ width: "10rem" }} alt="logo" />
              <p>Submitting...</p>
            </div>
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
                type="url"
                placeholder="Company website"
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
                <option value="Scrum Package">Scrum Package</option>
                <option value="Direct-to-hire">Direct-to-Hire</option>
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
                    Select a position
                  </option>
                  <option value="Staff Engineer">Product Manager</option>
                  <option value="Staff Engineer">UI/UX Engineer</option>
                  <option value="Staff Engineer">Staff Engineer</option>
                  <option value="Senior Engineer">Senior Engineer</option>
                  <option value="Principal Engineer">Principal Engineer</option>
                  <option value="Engineering Director">
                    Engineering Director
                  </option>
                  <option value="Graphic Designer">Graphic Designer</option>
                  <option value="Animator">Animator</option>
                  <option value="Vice President">Vice President</option>
                  <option value="Officer">Officer</option>
                  <option value="Co-Founder">Co-Founder</option>
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
                className="emoji-container"
                type="submit"
                style={{
                  marginBottom: "1rem",
                }}
                onClick={scrollToTarget}
              >
                <h4 className="h4" style={{ margin: 0 }}>
                  Submit
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
          <h2 className="h1">Let&apos;s get started</h2>
          <div className="pricing-content">
            <Lottie animationData={rocket} style={{ width: "10rem" }} />
            <h2 className="h2">Scrum Package</h2>
            <h5 className="h5">
              <button
                className="emoji-container"
                onClick={scrollToProject}
                style={{ marginBottom: "1rem" }}
              >
                build package
              </button>
            </h5>
            <h5 className="h5">lifetime guarantee</h5>
          </div>
          <div className="pricing-content">
            <Lottie animationData={team} style={{ width: "10rem" }} />
            <h2 className="h2">Direct-to-Hire</h2>
            <h5 className="h5">
              <button
                className="emoji-container"
                onClick={scrollToDirect}
                style={{ marginBottom: "1rem" }}
              >
                get started
              </button>
            </h5>
            <h5 className="h5">replacement guarantee</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
