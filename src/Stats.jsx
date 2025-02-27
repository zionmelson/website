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

function Money({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: isNaN(n) ? 0 : n,
    delay: 900,
    config: { mass: 10, tension: 15, friction: 25 },
  });

  return (
    <animated.div
      style={{ fontFamily: "Inter, sans-serif", fontWeight: "700" }}
    >
      {number.to((num) => {
        if (isNaN(num)) return "$588.52m";

        const billion = 1000000000;
        const million = 1000000;

        if (num >= billion) {
          return `$${(num / billion).toFixed(2)}b`;
        } else if (num >= million) {
          return `$${(num / million).toFixed(2)}m`;
        } else {
          return `$${num.toFixed(2)}`;
        }
      })}
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

  const [raisedAmount, setRaisedAmount] = useState(588525000);
  const [approvedCount, setApprovedCount] = useState(615);
  const [memberCount, setMemberCount] = useState(8142);

  const [paypalCount, setPaypalCount] = useState(8);
  const [spotifyCount, setSpotifyCount] = useState(13);
  const [appleCount, setAppleCount] = useState(25);
  const [googleCount, setGoogleCount] = useState(51);
  const [amazonCount, setAmazonCount] = useState(83);
  const [microsoftCount, setMicrosoftCount] = useState(56);
  const [teslaCount, setTeslaCount] = useState(40);
  const [metaCount, setMetaCount] = useState(50);
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
      let amountRaised = await body.raisedAmount;
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

      console.log(amountRaised);

      if (
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
      setRaisedAmount(amountRaised);
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
            <Money n={raisedAmount} />
          </h6>
          <h3 className="h3">raised by founders 💸</h3>
          <h6 className="number">
            <Number n={approvedCount} />
          </h6>
          <h3 className="h3">approved members 🚀</h3>
          <h6 className="number">
            <Number n={memberCount} />
          </h6>
          <h3 className="h3">members joined 👋</h3>
        </div>
        <div className="hbox" style={{ gap: "2.5rem" }}>
          <div className="vbox">
            <img src={paypal} className="emoji" alt="paypal" />
            <h6 className="number">
              <Number n={paypalCount} />
            </h6>
          </div>
          <div className="vbox">
            <img src={spotify} className="emoji" alt="spotify" />
            <h6 className="number">
              <Number n={spotifyCount} />
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
            <img src={amazon} className="emoji" alt="amazon" />
            <h6 className="number">
              <Number n={amazonCount} />
            </h6>
          </div>
          <div className="vbox">
            <img src={microsoft} className="emoji" alt="microsoft" />
            <h6 className="number">
              <Number n={microsoftCount} />
            </h6>
          </div>
          <div className="vbox">
            <img src={tesla} className="emoji" alt="tesla" />
            <h6 className="number">
              <Number n={teslaCount} />
            </h6>
          </div>
          <div className="vbox">
            <img src={meta} className="emoji" alt="meta" />
            <h6 className="number">
              <Number n={metaCount} />
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
