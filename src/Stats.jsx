/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";

import meta from "./svg/meta.svg";
import apple from "./svg/apple.svg";
import google from "./svg/google.svg";
import spotify from "./svg/spotify.svg";
import tesla from "./svg/tesla.svg";
import microsoft from "./svg/microsoft.svg";
import amazon from "./svg/amazon.svg";
import paypal from "./svg/paypal.svg";
import online from "./svg/online.svg";
import offline from "./svg/offline.svg";

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
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showInitialMessage, setShowInitialMessage] = useState(true);

  const [memberCount, setMemberCount] = useState(437);
  const [activeCount, setActiveCount] = useState(392);
  const [interviewedRateCount, setInterviewedRateCount] = useState(14);

  const [metaCount, setMetaCount] = useState(13);
  const [appleCount, setAppleCount] = useState(10);
  const [googleCount, setGoogleCount] = useState(18);
  const [spotifyCount, setSpotifyCount] = useState(4);
  const [teslaCount, setTeslaCount] = useState(11);
  const [microsoftCount, setMicrosoftCount] = useState(19);
  const [amazonCount, setAmazonCount] = useState(21);
  const [paypalCount, setPaypalCount] = useState(4);

  const socketRef = useRef();

  const messages = [
    "I think you're in bad spot g 😅",
    "Get T-Mobile 😅",
    "Time to leave Boost mobile 🫣",
    "Really? Cricket Wirless? 😬",
    "Free McDonald's wifi is crazy 🍔",
    "If this clock is still running, upgrade your service 👇",
    "You're missing out on the good stuff 😅",
    "Did the counter stop? 🫤",
    "Maybe try a different carrier? 🤔",
  ];

  useEffect(() => {
    const date = new Date();

    setTime(formatDateTime(date));
    const interval = setInterval(() => {
      const date = new Date();
      setTime(formatDateTime(date));
    }, 1000);

    const displayRandomMessage = () => {
      const randomIndex = Math.floor(Math.random() * messages.length);
      const randomMessage = messages[randomIndex];
      setLoading(true);
      setMessage(randomMessage);

      const randomTimeout = Math.random() * (35000 - 9000) + 5000; // Random timeout between 5 and 30 seconds
      setTimeout(displayRandomMessage, randomTimeout);
    };

    const showInitialMessageTimeout = setTimeout(() => {
      setShowInitialMessage(false);
    }, 5000);

    const waitForInitialMessage = setTimeout(() => {
      displayRandomMessage();
    }, 7500);

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
      clearTimeout(showInitialMessageTimeout);
      clearTimeout(waitForInitialMessage);
    };
  }, []);

  const handleMessage = async (event) => {
    let body = JSON.parse(event.data).body;

    if (body.message === "discord_count") {
      let memberCount = await body.memberCount;
      let activeCount = await body.activeCount;
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

      setLoading(false);
      console.log(memberCount);

      if (
        activeCount === undefined ||
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
      setActiveCount(activeCount);
      setInterviewedRateCount(interviewedRate * 100);
      setMetaCount(meta);
      setAppleCount(apple);
      setGoogleCount(google);
      setSpotifyCount(spotify);
      setTeslaCount(tesla);
      setMicrosoftCount(microsoft);
      setAmazonCount(amazon);
      setPaypalCount(paypal);
    } else {
      return;
    }
  };

  return (
    //
    <div className="main">
      {showInitialMessage ? (
        <div className="vbox">
          <img
            src={online}
            onError={(e) => (e.target.style.display = "none")}
            className="emoji"
            alt="loading"
          />
        </div>
      ) : (
        <div className="vbox">
          <img
            src={offline}
            onError={(e) => (e.target.style.display = "none")}
            className="emoji"
            alt="loading"
          />
        </div>
      )}
      {loading ? (
        <div className="vbox">
          <h3 className="h3">{loading ? message : ""}</h3>
        </div>
      ) : null}
      <span className="span">
        <h3 className="h3">{time}</h3>
      </span>
      <div className="vbox" style={{ gap: "2.5rem" }}>
        <div className="vbox">
          <h6 className="number">
            <Number n={memberCount} />
          </h6>
          <h3 className="h3">Members joined 👋</h3>
          <h6 className="number">
            <Number n={activeCount} />
          </h6>
          <h3 className="h3">Looking for work 💸</h3>
          <h6 className="number">
            <Percent n={interviewedRateCount} />
          </h6>
          <h3 className="h3">Interviewed rate 📊</h3>
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
    </div>
  );
}

export default Stats;
