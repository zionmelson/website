/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";

import meta from "./images/meta.svg";
import apple from "./images/apple.svg";
import google from "./images/google.svg";
import spotify from "./images/spotify.svg";
import tesla from "./images/tesla.svg";
import microsoft from "./images/microsoft.svg";
import amazon from "./images/amazon.svg";
import paypal from "./images/paypal.svg";

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
      {number.to((n) => `${n.toFixed(0)}`)}
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

function formatDateTime(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${month} ${day}, ${year} ${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
}

function Stats() {
  const [time, setTime] = useState(0);

  const [memberCount, setMemberCount] = useState(636);
  const [approvedCount, setApprovedCount] = useState(235);
  const [interviewedRateCount, setInterviewedRateCount] = useState(24);

  const [metaCount, setMetaCount] = useState(25);
  const [appleCount, setAppleCount] = useState(17);
  const [googleCount, setGoogleCount] = useState(33);
  const [spotifyCount, setSpotifyCount] = useState(4);
  const [teslaCount, setTeslaCount] = useState(19);
  const [microsoftCount, setMicrosoftCount] = useState(28);
  const [amazonCount, setAmazonCount] = useState(40);
  const [paypalCount, setPaypalCount] = useState(5);

  // not used yet
  // const [xStartupCount, setXStartupCount] = useState(62);

  const socketRef = useRef();

  useEffect(() => {
    const date = new Date();

    setTime(formatDateTime(date));
    const interval = setInterval(() => {
      const date = new Date();
      setTime(formatDateTime(date));
    }, 1000);

    socketRef.current = new WebSocket(
      "wss://23c8np7196.execute-api.us-east-1.amazonaws.com/production/"
    );
    const socket = socketRef.current;

    socket.addEventListener("open", () => {
      socket.send(
        JSON.stringify({
          action: "message",
          body: {
            message: "discord_num",
          },
        })
      );
    });

    socket.addEventListener("message", handleMessage);

    return () => {
      socket.removeEventListener("message", handleMessage);
      clearInterval(interval);
    };
  }, []);

  const handleMessage = async (event) => {
    let body = JSON.parse(event.data).body;

    if (body.message === "discord_count") {
      let memberCount = await body.memberCount;
      let appliedCount = await body.appliedCount;
      let interviewedCount = await body.interviewedCount;
      let interviewedRate = interviewedCount / appliedCount;
      let meta = await body.metaCount;
      let apple = await body.appleCount;
      let google = await body.googleCount;
      let spotify = await body.spotifyCount;
      let tesla = await body.teslaCount;
      let microsoft = await body.microsoftCount;
      let amazon = await body.amazonCount;
      let paypal = await body.paypalCount;
      let xStartup = await body.xStartupCount;

      let approved =
        meta +
        apple +
        google +
        spotify +
        tesla +
        microsoft +
        amazon +
        paypal +
        xStartup;

      console.log(memberCount);

      if (
        appliedCount === undefined ||
        interviewedCount === undefined ||
        interviewedRate === undefined ||
        meta === undefined ||
        apple === undefined ||
        google === undefined ||
        spotify === undefined ||
        tesla === undefined ||
        microsoft === undefined ||
        amazon === undefined ||
        paypal === undefined
      ) {
        setMemberCount(memberCount);
        return;
      }

      setMemberCount(memberCount);
      setInterviewedRateCount(interviewedRate * 100);
      setMetaCount(meta);
      setAppleCount(apple);
      setGoogleCount(google);
      setSpotifyCount(spotify);
      setTeslaCount(tesla);
      setMicrosoftCount(microsoft);
      setAmazonCount(amazon);
      setPaypalCount(paypal);
      // setXStartupCount(xStartup);
      setApprovedCount(approved);
    } else {
      return;
    }
  };

  return (
    //
    <div className="main">
      <span className="span">
        <h3 className="h3">{time}</h3>
      </span>
      <div className="vbox" style={{ gap: "2.5rem" }}>
        <div className="vbox">
          <h6 className="number">
            <Percent n={interviewedRateCount} />
          </h6>
          <h3 className="h3">Interviewed rate 📊</h3>
          <h6 className="number">
            <Number n={approvedCount} />
          </h6>
          <h3 className="h3">Approved for work 💸</h3>
          <h6 className="number">
            <Number n={memberCount} />
          </h6>
          <h3 className="h3">Members joined 👋</h3>
        </div>
        <div className="hbox" style={{ gap: "2.5rem" }}>
          <div className="vbox">
            <img src={meta} className="emoji" alt="meta" />
            <h6 className="number">
              <Number n={metaCount} />
            </h6>
          </div>
          <div className="vbox">
            <img src={apple} className="emoji" alt="apple" />
            <h6 className="number">
              <Number n={appleCount} />
            </h6>
          </div>
          <div className="vbox">
            <img src={google} className="emoji" alt="google" />
            <h6 className="number">
              <Number n={googleCount} />
            </h6>
          </div>
          <div className="vbox">
            <img src={spotify} className="emoji" alt="spotify" />
            <h6 className="number">
              <Number n={spotifyCount} />
            </h6>
          </div>
          <div className="vbox">
            <img src={tesla} className="emoji" alt="tesla" />
            <h6 className="number">
              <Number n={teslaCount} />
            </h6>
          </div>
          <div className="vbox">
            <img src={microsoft} className="emoji" alt="microsoft" />
            <h6 className="number">
              <Number n={microsoftCount} />
            </h6>
          </div>
          <div className="vbox">
            <img src={amazon} className="emoji" alt="amazon" />
            <h6 className="number">
              <Number n={amazonCount} />
            </h6>
          </div>
          <div className="vbox">
            <img src={paypal} className="emoji" alt="paypal" />
            <h6 className="number">
              <Number n={paypalCount} />
            </h6>
          </div>
        </div>
      </div>
      <a
        href="https://www.producthunt.com/posts/hire-learnmutiny-io?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-hire&#0045;learnmutiny&#0045;io"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=463297"
          alt="hire&#0032;learnmutiny&#0046;io - Hire&#0032;tech&#0032;people&#0032;without&#0032;a&#0032;Recruiter&#0032;🤯 | Product Hunt"
          style={{ width: "250px", height: "54px", marginTop: "1rem" }}
          width="250"
          height="54"
        />
      </a>
    </div>
  );
}

export default Stats;
