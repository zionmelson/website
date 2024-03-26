import { useRef, useState } from "react";

import zion from "./assets/png/zion.png";
import zionBlurry from "./assets/png/zionBlurry.png";
import maxmillian from "./assets/png/maxmillian.png";
import maxmillianBlurry from "./assets/png/maxmillianBlurry.png";
import atlanta from "./assets/svg/atlanta.svg";
import link from "./assets/svg/link.svg";
import logo from "./assets/svg/logo.svg";

import "./App.css";
import { useEffect } from "react";

function Find() {
  const blurredImageDivRef = useRef(null);
  const imgRef = useRef(null);

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
    setDiscord();
    if (isLoaded) {
      console.log("img loaded");
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
          <h1 className="h1">We take a different approach</h1>
          <h3 className="h3">
            all of our positions are remote and are announced on our server.
          </h3>
          <span
            className="emoji-container"
            style={{
              marginBottom: "1rem",
            }}
          >
            <img src={logo} className="emoji" alt="mu" />
            learnmutiny.io
          </span>
          <iframe
            src="https://discord.com/widget?id=984461709806804992&theme=dark"
            width="350"
            height="500"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
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
              <h5 className="h5">zion | partner</h5>
              <a
                href="https://linkedin.com/in/zionmelson"
                target="_blank"
                rel="noreferrer"
              >
                <span className="emoji-container">
                  <img src={link} className="emoji" alt="mu" />
                </span>
              </a>
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
              <h5 className="h5">maxmillian | partner</h5>
              <a
                href="https://www.linkedin.com/in/mxmilan/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="emoji-container">
                  <img src={link} className="emoji" alt="mu" />
                </span>
              </a>
            </div>
          </div>
          <h5 className="h5" id="bio">
            our team is invested in uplifting the startup ecosystem in the
            southeast.
          </h5>
          <img src={atlanta} className="emoji" alt="mu" />
        </div>
      </div>
      {/* contact */}
      <div className="box">
        <div className="vertical-content" style={{ padding: "2rem" }}>
          <h1 className="h1">Contact</h1>
          <span className="emoji-container" style={{ marginBottom: "1rem" }}>
            support@learnmutiny.io
          </span>
        </div>
      </div>
    </div>
  );
}

export default Find;