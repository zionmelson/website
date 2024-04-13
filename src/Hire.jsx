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
  const targetRef = useRef(null);

  const [mobile, setMobile] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
    setPackages((prevPackages) => ({
      ...prevPackages,
      [engineer]: Math.min(10, prevPackages[engineer] + 1),
    }));

    localStorage.setItem("packages", JSON.stringify(packages));

    setFormData({ ...formData, packages: { ...packages, [engineer]: 1 } });
  };

  const removeFromPackages = (engineer) => {
    setPackages((prevPackages) => ({
      ...prevPackages,
      [engineer]: Math.max(0, prevPackages[engineer] - 1),
    }));

    setFormData({ ...formData, packages: { ...packages, [engineer]: 0 } });
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
        });

        setPackages({
          projectManager: 0,
          softwareEngineer: 0,
          graphicDesigner: 0,
        });
        setCompanies([]);
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
    const saved = localStorage.getItem("companies");
    const cachedPackages = localStorage.getItem("packages");

    if (cachedPackages) {
      setPackages(JSON.parse(cachedPackages));
      setFormData({ ...formData, packages: JSON.parse(cachedPackages) });
    }

    if (saved) {
      setCompanies([]);
      JSON.parse(saved).forEach((company) => {
        let name = localStorage.getItem(company.name);
        console.log("name:", JSON.parse(name));
        setCompanies((prevCompanies) => [...prevCompanies, JSON.parse(name)]);
      });
    }

    if (window.screen.width < 1000) {
      setMobile(true);
    }
  }, []);

  return (
    <div className="main">
      <div
        className="box"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {submitted && submissionStatus === "success" ? (
          <h1 className="h1">Got it. 👍</h1>
        ) : (
          <>
            <h1 className="h1">Ready to hire?</h1>
          </>
        )}
        <div
          className="due-diligence-content"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
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
              className="vertical-content"
              style={{
                width: "100%",
                padding: "1rem",
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
                    onClick={() => addCompany({ name: "Uber", logo: uber })}
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <img src={uber} className="emoji-2" alt="calendar" />
                    Uber
                  </button>
                </h5>
                <h5 className="h5">
                  <button
                    className="emoji-container"
                    id="github-container"
                    onClick={() => addCompany({ name: "Snapchat", logo: snap })}
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <img src={snap} className="emoji-2" alt="calendar" />
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
                    <img src={spotify} className="emoji-2" alt="calendar" />
                    Spotify
                  </button>
                </h5>
                <h5 className="h5">
                  <button
                    className="emoji-container"
                    id="github-container"
                    onClick={() => addCompany({ name: "Twitch", logo: twitch })}
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <img src={twitch} className="emoji-2" alt="calendar" />
                    Twitch
                  </button>
                </h5>
                <h5 className="h5">
                  <button
                    className="emoji-container"
                    id="github-container"
                    onClick={() => addCompany({ name: "Google", logo: google })}
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <img src={google} className="emoji-2" alt="calendar" />
                    Google
                  </button>
                </h5>
                <h5 className="h5">
                  <button
                    className="emoji-container"
                    id="github-container"
                    onClick={() => addCompany({ name: "Paypal", logo: paypal })}
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <img src={paypal} className="emoji-2" alt="calendar" />
                    Paypal
                  </button>
                </h5>
                <h5 className="h5">
                  <button
                    className="emoji-container"
                    id="github-container"
                    onClick={() => addCompany({ name: "Meta", logo: meta })}
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <img src={meta} className="emoji-2" alt="calendar" />
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
                    <img src={instacart} className="emoji-2" alt="calendar" />
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
                    <img src={cashapp} className="emoji-2" alt="calendar" />
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
                    <img src={mozilla} className="emoji-2" alt="calendar" />
                    Mozilla
                  </button>
                </h5>
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
                <h5 className="h5">
                  <button
                    className="emoji-container"
                    id="github-container"
                    onClick={() => addCompany({ name: "StockX", logo: stock })}
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <img src={stock} className="emoji-2" alt="calendar" />
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
                      addCompany({ name: "Discord", logo: discord })
                    }
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <img src={discord} className="emoji-2" alt="calendar" />
                    Discord
                  </button>
                </h5>
                <h5 className="h5">
                  <button
                    className="emoji-container"
                    id="github-container"
                    onClick={() => addCompany({ name: "Uber", logo: uber })}
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <img src={uber} className="emoji-2" alt="calendar" />
                    Uber
                  </button>
                </h5>
                <h5 className="h5">
                  <button
                    className="emoji-container"
                    id="github-container"
                    onClick={() => addCompany({ name: "Airbnb", logo: airbnb })}
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <img src={airbnb} className="emoji-2" alt="calendar" />
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
                    <img src={spotify} className="emoji-2" alt="calendar" />
                    Spotify
                  </button>
                </h5>
                <h5 className="h5">
                  <button
                    className="emoji-container"
                    id="github-container"
                    onClick={() => addCompany({ name: "Twitch", logo: twitch })}
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <img src={twitch} className="emoji-2" alt="calendar" />
                    Twitch
                  </button>
                </h5>
                <h5 className="h5">
                  <button
                    className="emoji-container"
                    id="github-container"
                    onClick={() => addCompany({ name: "Ebay", logo: ebay })}
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <img src={ebay} className="emoji-2" alt="calendar" />
                    Ebay
                  </button>
                </h5>
                <h5 className="h5">
                  <button
                    className="emoji-container"
                    id="github-container"
                    onClick={() => addCompany({ name: "Paypal", logo: paypal })}
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <img src={paypal} className="emoji-2" alt="calendar" />
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
                    <img src={facebook} className="emoji-2" alt="calendar" />
                    Facebook
                  </button>
                </h5>
                <h5 className="h5">
                  <button
                    className="emoji-container"
                    id="github-container"
                    onClick={() => addCompany({ name: "X", logo: twitter })}
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <img src={twitter} className="emoji-2" alt="calendar" />X
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
                    <img src={pinterest} className="emoji-2" alt="calendar" />
                    Pinterest
                  </button>
                </h5>
                <h5 className="h5">
                  <button
                    className="emoji-container"
                    id="github-container"
                    onClick={() => addCompany({ name: "TikTok", logo: tiktok })}
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <img src={tiktok} className="emoji-2" alt="calendar" />
                    TikTok
                  </button>
                </h5>
                <h5 className="h5">
                  <button
                    className="emoji-container"
                    id="github-container"
                    onClick={() => addCompany({ name: "Apple", logo: apple })}
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <img src={apple} className="emoji-2" alt="calendar" />
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
                    <img src={linkedin} className="emoji-2" alt="calendar" />
                    Linkedin
                  </button>
                </h5>
                <h5 className="h5">
                  <button
                    className="emoji-container"
                    id="github-container"
                    onClick={() => addCompany({ name: "Amazon", logo: amazon })}
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <img src={amazon} className="emoji-2" alt="calendar" />
                    Amazon
                  </button>
                </h5>
                <h5 className="h5">
                  <button
                    className="emoji-container"
                    id="github-container"
                    onClick={() => addCompany({ name: "Meetup", logo: meetup })}
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <img src={meetup} className="emoji-2" alt="calendar" />
                    Meetup
                  </button>
                </h5>
                <h5 className="h5">
                  <button
                    className="emoji-container"
                    id="github-container"
                    onClick={() => addCompany({ name: "Zoom", logo: zoom })}
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <img src={zoom} className="emoji-2" alt="calendar" />
                    Zoom
                  </button>
                </h5>
                <h5 className="h5">
                  <button
                    className="emoji-container"
                    id="github-container"
                    onClick={() => addCompany({ name: "Meta", logo: meta })}
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <img src={meta} className="emoji-2" alt="calendar" />
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
                    <img src={docusign} className="emoji-2" alt="calendar" />
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
                    <img src={expedia} className="emoji-2" alt="calendar" />
                    Expedia
                  </button>
                </h5>
                <h5 className="h5">
                  <button
                    className="emoji-container"
                    id="github-container"
                    onClick={() => addCompany({ name: "Toast", logo: toast })}
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <img src={toast} className="emoji-2" alt="calendar" />
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
                    <img src={instacart} className="emoji-2" alt="calendar" />
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
                    <img src={cashapp} className="emoji-2" alt="calendar" />
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
                    <img src={metamask} className="emoji-2" alt="calendar" />
                    Metamask
                  </button>
                </h5>
                <h5 className="h5">
                  <button
                    className="emoji-container"
                    id="github-container"
                    onClick={() => addCompany({ name: "Bumble", logo: bumble })}
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <img src={bumble} className="emoji-2" alt="calendar" />
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
                    <img src={grammarly} className="emoji-2" alt="calendar" />
                    Grammarly
                  </button>
                </h5>
                <h5 className="h5">
                  <button
                    className="emoji-container"
                    id="github-container"
                    onClick={() => addCompany({ name: "Google", logo: google })}
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <img src={google} className="emoji-2" alt="calendar" />
                    Google
                  </button>
                </h5>
                <h5 className="h5">
                  <button
                    className="emoji-container"
                    id="github-container"
                    onClick={() => addCompany({ name: "Snapchat", logo: snap })}
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <img src={snap} className="emoji-2" alt="calendar" />
                    Snapchat
                  </button>
                </h5>
                <h5 className="h5">
                  <button
                    className="emoji-container"
                    id="github-container"
                    onClick={() => addCompany({ name: "Affirm", logo: affirm })}
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <img src={affirm} className="emoji-2" alt="calendar" />
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
                    <img src={buzzfeed} className="emoji-2" alt="calendar" />
                    Buzzfeed
                  </button>
                </h5>
                <h5 className="h5">
                  <button
                    className="emoji-container"
                    id="github-container"
                    onClick={() => addCompany({ name: "Rivian", logo: rivian })}
                    style={{
                      padding: "1rem",
                    }}
                  >
                    <img src={rivian} className="emoji-2" alt="calendar" />
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
                    <img src={mozilla} className="emoji-2" alt="calendar" />
                    Mozilla
                  </button>
                </h5>
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
                    <option value="Principal Engineer">
                      Principal Engineer
                    </option>
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
