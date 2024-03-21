import { useState, useEffect, useRef } from "react";
import { FaPlus, FaMinus, FaMinusCircle } from "react-icons/fa";

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
import logo from "./assets/svg/logo.svg";

import gsap from "gsap";
import SplitText from "split-text-js";

import "./App.css";

export default function Hire() {
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
    softwareEngineer: 0,
    graphicDesigner: 0,
  });

  const [companies, setCompanies] = useState([]);

  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [error, setError] = useState(null);
  const [mobile, setMobile] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const [sourceType, setSourceType] = useState("");

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
    if (window.screen.width < 780) {
      setMobile(true);
    }
  }, []);

  const targetRef = useRef(null);

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

        setPackages({
          projectManager: 0,
          softwareEngineer: 0,
          graphicDesigner: 0,
        });

        setCompanies([]);
        setFormData({ ...formData, companies: [] });
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
    console.log("isLoaded", loaded);

    if (loaded) {
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
    }

    setLoaded(true);
  }, [loaded]);

  return (
    <div className="main">
      <div className="box">
        {submitted && submissionStatus === "success" ? (
          <h1 className="h1">Building your team 😉</h1>
        ) : (
          <>
            <h1 className="h1">Build your team</h1>
            <h3 className="h3">Here is where you can submit your</h3>
          </>
        )}
        <span className="emoji-container" style={{ marginBottom: "1rem" }}>
          <h5 className="h5" style={{ marginBottom: "0" }}>
            Scrum Package
          </h5>
        </span>

        {mobile ? null : (
          <div
            className="due-diligence-content"
            style={{
              width: "100%",
            }}
          >
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
                    Software Engineers: {packages.softwareEngineer}
                  </h3>
                  <h3 className="h3">
                    Graphic Designers: {packages.graphicDesigner}
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
        {mobile ? (
          <div
            className="due-diligence-content"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "100%",
              padding: "1rem",
            }}
          >
            <div
              className="vertical-content"
              style={{
                margin: "0.5rem",
              }}
            >
              <h5 className="h5">
                <button className="emoji-container">
                  {packages.projectManager} PMs
                </button>
              </h5>
              <h5 className="h5">
                <button className="emoji-container">
                  {packages.softwareEngineer} SEs
                </button>
              </h5>
              <h5 className="h5">
                <button className="emoji-container">
                  {packages.graphicDesigner} GDs
                </button>
              </h5>
            </div>
            <div
              className="vertical-content"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",

                margin: "0.5rem",
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
                    <button className="emoji-container">Project Manager</button>
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
                  width: "100%",
                  marginBottom: "1rem",
                }}
              >
                <div className="vertical-content">
                  <h5 className="h5">
                    <button className="emoji-container">
                      Software Engineer
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
                      onClick={() => removeFromPackages("softwareEngineer")}
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
                      Graphic Designer
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
                      onClick={() => removeFromPackages("graphicDesigner")}
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
              className="vertical-content"
              style={{
                width: "100%",
              }}
            >
              <h5 className="h5">from</h5>
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
                  onClick={() => addCompany({ name: "Uber", logo: uber })}
                  style={{
                    padding: "1rem",
                  }}
                >
                  <img src={uber} className="emoji-2" alt="calendar" />
                  Uber
                </span>
                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() => addCompany({ name: "Snapchat", logo: snap })}
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
                  onClick={() => addCompany({ name: "Spotify", logo: spotify })}
                  style={{
                    padding: "1rem",
                  }}
                >
                  <img src={spotify} className="emoji-2" alt="calendar" />
                  Spotify
                </span>

                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() => addCompany({ name: "Twitch", logo: twitch })}
                  style={{
                    padding: "1rem",
                  }}
                >
                  <img src={twitch} className="emoji-2" alt="calendar" />
                  Twitch
                </span>
                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() => addCompany({ name: "Google", logo: google })}
                  style={{
                    padding: "1rem",
                  }}
                >
                  <img src={google} className="emoji-2" alt="calendar" />
                  Google
                </span>
                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() => addCompany({ name: "Paypal", logo: paypal })}
                  style={{
                    padding: "1rem",
                  }}
                >
                  <img src={paypal} className="emoji-2" alt="calendar" />
                  Paypal
                </span>
                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() => addCompany({ name: "Meta", logo: meta })}
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
                    addCompany({ name: "Instacart", logo: instacart })
                  }
                  style={{
                    padding: "1rem",
                  }}
                >
                  <img src={instacart} className="emoji-2" alt="calendar" />
                  Instacart
                </span>
                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() => addCompany({ name: "Cashapp", logo: cashapp })}
                  style={{
                    padding: "1rem",
                  }}
                >
                  <img src={cashapp} className="emoji-2" alt="calendar" />
                  Cashapp
                </span>
                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() => addCompany({ name: "Mozilla", logo: mozilla })}
                  style={{
                    padding: "1rem",
                  }}
                >
                  <img src={mozilla} className="emoji-2" alt="calendar" />
                  Mozilla
                </span>
              </div>
            </div>
            <div
              className="vertical-content"
              style={{
                marginTop: "2rem",
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
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "30%",
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
                    <button className="emoji-container">Project Manager</button>
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
                  width: "100%",
                  marginBottom: "1rem",
                }}
              >
                <div className="vertical-content">
                  <h5 className="h5">
                    <button className="emoji-container">
                      Software Engineer
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
                      onClick={() => removeFromPackages("softwareEngineer")}
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
                      Graphic Designer
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
                      onClick={() => removeFromPackages("graphicDesigner")}
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
              className="vertical-content"
              style={{
                width: "100%",
              }}
            >
              <h5 className="h5">from</h5>
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
                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() => addCompany({ name: "StockX", logo: stock })}
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
                  onClick={() => addCompany({ name: "Discord", logo: discord })}
                  style={{
                    padding: "1rem",
                  }}
                >
                  <img src={discord} className="emoji-2" alt="calendar" />
                  Discord
                </span>

                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() => addCompany({ name: "Uber", logo: uber })}
                  style={{
                    padding: "1rem",
                  }}
                >
                  <img src={uber} className="emoji-2" alt="calendar" />
                  Uber
                </span>

                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() => addCompany({ name: "Airbnb", logo: airbnb })}
                  style={{
                    padding: "1rem",
                  }}
                >
                  <img src={airbnb} className="emoji-2" alt="calendar" />
                  Airbnb
                </span>

                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() => addCompany({ name: "Spotify", logo: spotify })}
                  style={{
                    padding: "1rem",
                  }}
                >
                  <img src={spotify} className="emoji-2" alt="calendar" />
                  Spotify
                </span>

                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() => addCompany({ name: "Twitch", logo: twitch })}
                  style={{
                    padding: "1rem",
                  }}
                >
                  <img src={twitch} className="emoji-2" alt="calendar" />
                  Twitch
                </span>

                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() => addCompany({ name: "Ebay", logo: ebay })}
                  style={{
                    padding: "1rem",
                  }}
                >
                  <img src={ebay} className="emoji-2" alt="calendar" />
                  Ebay
                </span>

                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() => addCompany({ name: "Paypal", logo: paypal })}
                  style={{
                    padding: "1rem",
                  }}
                >
                  <img src={paypal} className="emoji-2" alt="calendar" />
                  Paypal
                </span>

                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() =>
                    addCompany({ name: "Facebook", logo: facebook })
                  }
                  style={{
                    padding: "1rem",
                  }}
                >
                  <img src={facebook} className="emoji-2" alt="calendar" />
                  Facebook
                </span>

                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() => addCompany({ name: "X", logo: twitter })}
                  style={{
                    padding: "1rem",
                  }}
                >
                  <img src={twitter} className="emoji-2" alt="calendar" />X
                </span>

                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() =>
                    addCompany({ name: "Pinterest", logo: pinterest })
                  }
                  style={{
                    padding: "1rem",
                  }}
                >
                  <img src={pinterest} className="emoji-2" alt="calendar" />
                  Pinterest
                </span>
                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() => addCompany({ name: "TikTok", logo: tiktok })}
                  style={{
                    padding: "1rem",
                  }}
                >
                  <img src={tiktok} className="emoji-2" alt="calendar" />
                  TikTok
                </span>
                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() => addCompany({ name: "Apple", logo: apple })}
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
                    addCompany({ name: "LinkedIn", logo: linkedin })
                  }
                  style={{
                    padding: "1rem",
                  }}
                >
                  <img src={linkedin} className="emoji-2" alt="calendar" />
                  Linkedin
                </span>
                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() => addCompany({ name: "Amazon", logo: amazon })}
                  style={{
                    padding: "1rem",
                  }}
                >
                  <img src={amazon} className="emoji-2" alt="calendar" />
                  Amazon
                </span>
                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() => addCompany({ name: "Meetup", logo: meetup })}
                  style={{
                    padding: "1rem",
                  }}
                >
                  <img src={meetup} className="emoji-2" alt="calendar" />
                  Meetup
                </span>
                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() => addCompany({ name: "Zoom", logo: zoom })}
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
                  onClick={() => addCompany({ name: "Meta", logo: meta })}
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
                  <img src={docusign} className="emoji-2" alt="calendar" />
                  DocuSign
                </span>
                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() => addCompany({ name: "Expedia", logo: expedia })}
                  style={{
                    padding: "1rem",
                  }}
                >
                  <img src={expedia} className="emoji-2" alt="calendar" />
                  Expedia
                </span>
                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() => addCompany({ name: "Toast", logo: toast })}
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
                  <img src={instacart} className="emoji-2" alt="calendar" />
                  Instacart
                </span>
                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() => addCompany({ name: "Cashapp", logo: cashapp })}
                  style={{
                    padding: "1rem",
                  }}
                >
                  <img src={cashapp} className="emoji-2" alt="calendar" />
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
                  <img src={metamask} className="emoji-2" alt="calendar" />
                  Metamask
                </span>
                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() => addCompany({ name: "Bumble", logo: bumble })}
                  style={{
                    padding: "1rem",
                  }}
                >
                  <img src={bumble} className="emoji-2" alt="calendar" />
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
                  <img src={grammarly} className="emoji-2" alt="calendar" />
                  Grammarly
                </span>
                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() => addCompany({ name: "Google", logo: google })}
                  style={{
                    padding: "1rem",
                  }}
                >
                  <img src={google} className="emoji-2" alt="calendar" />
                  Google
                </span>
                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() => addCompany({ name: "Snapchat", logo: snap })}
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
                  onClick={() => addCompany({ name: "Affirm", logo: affirm })}
                  style={{
                    padding: "1rem",
                  }}
                >
                  <img src={affirm} className="emoji-2" alt="calendar" />
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
                  <img src={buzzfeed} className="emoji-2" alt="calendar" />
                  Buzzfeed
                </span>
                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() => addCompany({ name: "Rivian", logo: rivian })}
                  style={{
                    padding: "1rem",
                  }}
                >
                  <img src={rivian} className="emoji-2" alt="calendar" />
                  Rivian
                </span>
                <span
                  className="emoji-container"
                  id="github-container"
                  onClick={() => addCompany({ name: "Mozilla", logo: mozilla })}
                  style={{
                    padding: "1rem",
                  }}
                >
                  <img src={mozilla} className="emoji-2" alt="calendar" />
                  Mozilla
                </span>
              </div>
            </div>
          </div>
        )}
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
                  <option value="Co-Founder">
                    Co-Founder or Chief Officer
                  </option>
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
                  <option value="Scrum Package">Scrum Package</option>
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
                    <option value="Principal Engineer">
                      Principal Engineer
                    </option>
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
      </div>
    </div>
  );
}
