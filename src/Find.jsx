import { useRef, useState } from "react";

import zion from "./assets/webp/zion.webp";
import zionBlurry from "./assets/webp/zionBlurry.webp";
import maxmillian from "./assets/webp/maxmillian.webp";
import maxmillianBlurry from "./assets/webp/maxmillianBlurry.webp";
import atlanta from "./assets/svg/atlanta.svg";
import link from "./assets/svg/link.svg";

import { FaRegDotCircle } from "react-icons/fa";

import "./App.css";
import { useEffect } from "react";

function Find() {
  const blurredImageDivRef = useRef(null);
  const imgRef = useRef(null);

  const [mobile, setMobile] = useState(false);

  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const setDiscord = async () => {
    const data = await fetch(
      "https://discord.com/api/guilds/984461709806804992/widget.json"
    );
    const json = await data.json();

    console.log(json);
  };

  useEffect(() => {
    if (window.screen.width < 1100) {
      setMobile(true);
    }

    setDiscord();
    if (isLoaded) {
      const blurredImageDiv = blurredImageDivRef.current;
      const img = imgRef.current;

      const loaded = () => {
        if (blurredImageDiv) {
          console.log("blurredImageDiv loaded");
        }
      };

      if (isLoaded) {
        console.log("img loaded");
        loaded();
      } else {
        console.log("img not loaded");
        img.addEventListener("load", loaded);
      }
    }
  }, [isLoaded]);

  return (
    //
    <div className="main">
      {/* value */}
      <div className="box">
        <div className="vertical-content">
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
                live positions are announced in our server.
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
                live positions are announced in our server.
              </h3>
            </span>
          )}
          {mobile ? (
            <iframe
              src="https://discord.com/widget?id=984461709806804992&theme=dark"
              width="350"
              height="500"
              allowtransparency="true"
              frameborder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          ) : (
            <iframe
              src="https://discord.com/widget?id=984461709806804992&theme=dark"
              width="500"
              height="500"
              allowtransparency="true"
              frameborder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          )}
          <a
            href="https://discord.gg/gbq3YTBS6B"
            target="_blank"
            rel="noreferrer"
            className="emoji-container"
            style={{
              margin: "0.5rem",
            }}
          >
            <h5 className="h5" style={{ marginBottom: 0 }}>
              join our discord
            </h5>
          </a>
        </div>
      </div>
      {/* partners */}
      <div className="box">
        <div className="vertical-content">
          <h1 className="h1">Meet the team</h1>
          <div className="horizontal-content">
            <div className="headshot">
              {isLoaded ? (
                <div>
                  <img
                    src={zion}
                    loading="eagar"
                    decoding="async"
                    className="headshots"
                    alt="zion"
                  />
                </div>
              ) : (
                <div
                  ref={blurredImageDivRef}
                  className="blurred-image"
                  style={{
                    backgroundImage: `url(${zionBlurry})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    animation: "pulse 2.5s infinite",
                    filter: "blur(10px)",
                    borderRadius: "0.5rem",
                    border: "2px solid #fff",
                    height: "100%",
                  }}
                >
                  <img
                    onLoad={handleImageLoad}
                    src={zion}
                    loading="eagar"
                    decoding="async"
                    className="headshots"
                    alt="zion"
                    ref={imgRef}
                  />
                </div>
              )}
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
              {isLoaded ? (
                <div>
                  <img
                    src={maxmillian}
                    loading="eagar"
                    decoding="async"
                    className="headshots"
                    alt="maxmillian"
                  />
                </div>
              ) : (
                <div
                  ref={blurredImageDivRef}
                  className="blurred-image"
                  style={{
                    backgroundImage: `url(${maxmillianBlurry})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    animation: "pulse 2.5s infinite",
                    filter: "blur(10px)",
                    borderRadius: "0.5rem",
                    border: "2px solid #fff",
                    height: "100%",
                  }}
                >
                  <img
                    onLoad={handleImageLoad}
                    src={maxmillian}
                    loading="eagar"
                    decoding="async"
                    className="headshots"
                    alt="maxmillian"
                    ref={imgRef}
                  />
                </div>
              )}
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
            our team is focused on creating a more open conversation about the
            future of work.
          </h5>
          <img src={atlanta} className="emoji" alt="mu" />
        </div>
      </div>
      {/* contact */}
      <div className="box">
        <div className="vertical-content" style={{ padding: "2rem" }}>
          <p style={{ marginBottom: "1rem" }}>Questions?</p>
          <h5 className="h5">
            <button
              className="emoji-container"
              style={{ marginBottom: "1rem" }}
            >
              support@learnmutiny.io
            </button>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Find;
