/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { useSpring, animated } from "react-spring";

import meta from "./assets/svg/meta.svg";
import apple from "./assets/svg/apple.svg";
import google from "./assets/svg/google.svg";
import spotify from "./assets/svg/spotify.svg";
import tesla from "./assets/svg/tesla.svg";
import microsoft from "./assets/svg/microsoft.svg";
import amazon from "./assets/svg/amazon.svg";
import paypal from "./assets/svg/paypal.svg";
import ibm from "./assets/svg/ibm.svg";

import zion from "./assets/webp/zion.webp";
import maxmillian from "./assets/webp/maxmillian.webp";
import atlanta from "./assets/svg/atlanta.svg";
import link from "./assets/svg/link.svg";

import "./App.css";

const socket = new WebSocket(
  "wss://23c8np7196.execute-api.us-east-1.amazonaws.com/production/"
);

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

socket.addEventListener("close", () => {});

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

function Find() {
  const [mobile, setMobile] = useState(false);

  const [memberCount, setMemberCount] = useState(443);
  const [activeCount, setActiveCount] = useState(391);
  const [interviewedRateCount, setInterviewedRateCount] = useState(14);

  const [metaCount, setMetaCount] = useState(12);
  const [appleCount, setAppleCount] = useState(10);
  const [googleCount, setGoogleCount] = useState(16);
  const [spotifyCount, setSpotifyCount] = useState(4);
  const [teslaCount, setTeslaCount] = useState(11);
  const [microsoftCount, setMicrosoftCount] = useState(16);
  const [amazonCount, setAmazonCount] = useState(21);
  const [paypalCount, setPaypalCount] = useState(4);
  const [ibmCount, setIbmCount] = useState(9);

  useEffect(() => {
    if (window.screen.width < 1100) {
      setMobile(true);
    }
    socket.addEventListener("message", async (event) => {
      let body = JSON.parse(event.data).body;

      if (body.message === "discord_count") {
        let memberCount = await body.memberCount;
        let activeCount = await body.activeCount;
        let appliedCount = await body.appliedCount;
        let interviewedCount = await body.interviewedCount;
        let interviewedRate = (await interviewedCount) / appliedCount;

        let meta = await body.metaCount;
        let apple = await body.appleCount;
        let google = await body.googleCount;
        let spotify = await body.spotifyCount;
        let tesla = await body.teslaCount;
        let microsoft = await body.microsoftCount;
        let amazon = await body.amazonCount;
        let paypal = await body.paypalCount;
        let ibm = await body.ibmCount;

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
        setIbmCount(ibm);
      }

      if (body.message === "discord_num") {
        return;
      }
    });
  }, []);

  return (
    //
    <div className="main">
      <div className="box">
        <div className="vertical">
          <h1 className="h1">Find work</h1>
          {mobile ? (
            <span
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "0.25rem",
                marginBottom: "1rem",
              }}
            >
              <FaRegDotCircle
                className="record"
                style={{ marginTop: "0.3rem" }}
              />
              <h3 className="h3" style={{ marginBottom: "0" }}>
                live positions are announced in our server
              </h3>
            </span>
          ) : (
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.25rem",
                marginBottom: "1rem",
              }}
            >
              <FaRegDotCircle className="record" />
              <h3 className="h3" style={{ marginBottom: "0" }}>
                live positions are announced in our server
              </h3>
            </span>
          )}
        </div>
        <div className="stats-content">
          <div className="vertical">
            <h6 className="number">
              <Number n={memberCount} />
            </h6>
            <h5 className="h5">Members joined 👋</h5>
          </div>
          <div className="vertical">
            <h6 className="number">
              <Number n={activeCount} />
            </h6>
            <h5 className="h5">Looking for work 💸</h5>
          </div>
          <div className="vertical">
            <h6 className="number">
              <Percent n={interviewedRateCount} />
            </h6>
            <h5 className="h5">Interviewed rate 📊</h5>
          </div>
        </div>
        <div className="stats-content-2">
          <div className="horizontal">
            <img src={meta} className="emoji-2" alt="meta" />
            <h6 className="number-2">
              <Number n={metaCount} />
            </h6>
          </div>
          <div className="horizontal">
            <img src={apple} className="emoji-2" alt="apple" />
            <h6 className="number-2">
              <Number n={appleCount} />
            </h6>
          </div>
          <div className="horizontal">
            <img src={google} className="emoji-2" alt="google" />
            <h6 className="number-2">
              <Number n={googleCount} />
            </h6>
          </div>
          <div className="horizontal">
            <img src={spotify} className="emoji-2" alt="spotify" />
            <h6 className="number-2">
              <Number n={spotifyCount} />
            </h6>
          </div>
          <div className="horizontal">
            <img src={tesla} className="emoji-2" alt="tesla" />
            <h6 className="number-2">
              <Number n={teslaCount} />
            </h6>
          </div>
          <div className="horizontal">
            <img src={microsoft} className="emoji-2" alt="microsoft" />
            <h6 className="number-2">
              <Number n={microsoftCount} />
            </h6>
          </div>
          <div className="horizontal">
            <img src={amazon} className="emoji-2" alt="amazon" />
            <h6 className="number-2">
              <Number n={amazonCount} />
            </h6>
          </div>
          <div className="horizontal">
            <img src={paypal} className="emoji-2" alt="paypal" />
            <h6 className="number-2">
              <Number n={paypalCount} />
            </h6>
          </div>
          <div className="horizontal">
            <img src={ibm} className="emoji-2" alt="ibm" />
            <h6 className="number-2">
              <Number n={ibmCount} />
            </h6>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="vertical">
          <h1 className="h1">Meet the team</h1>
          <div className="horizontal">
            <div className="headshot">
              <div>
                <img
                  src={zion}
                  loading="eagar"
                  decoding="async"
                  className="headshots"
                  alt="zion"
                />
              </div>
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h5 className="h5" style={{ margin: 0 }}>
                  zion | partner
                </h5>
                <a
                  href="https://linkedin.com/in/zionmelson"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={link} className="emoji" alt="mu" />
                </a>
              </span>
            </div>
            <div className="headshot">
              <div>
                <img
                  src={maxmillian}
                  loading="eagar"
                  decoding="async"
                  className="headshots"
                  alt="maxmillian"
                />
              </div>
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h5 className="h5" style={{ margin: 0 }}>
                  max | partner
                </h5>
                <a
                  href="https://www.linkedin.com/in/mxmilan/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={link} className="emoji" alt="mu" />
                </a>
              </span>
            </div>
          </div>
          <h5 className="h5" id="bio">
            focused on creating a more open conversation about the future of
            work
          </h5>
          <img src={atlanta} className="emoji" alt="mu" />
        </div>
      </div>
    </div>
  );
}

export default Find;
