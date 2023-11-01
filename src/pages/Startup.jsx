import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import { FaReact } from "react-icons/fa";

import startup from "../assets/sProfile.svg";
import filter from "../assets/filter.svg";

import "../App.css";

function Startup() {
  return (
    <div className="main">
      {/* startup-intro desktop */}
      <div className="startup-box">
        <div className="vertical-content">
          <h1
            className="h1"
            style={{ marginBottom: "1rem", marginTop: "5rem" }}
          >
            we source and vet qualified and reputable developer talent for your{" "}
            <span className="span">tech startup</span>
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            we are a team based in the atlanta and our priority is to help aid
            startups by providing them talented web developers.
          </h2>{" "}
          <div className="icons">
            <AiFillAndroid className="icon" />
            <AiFillApple className="icon" />
            <FaReact className="icon" />
          </div>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            we target the best college student talent from the top universities
            in the metro atlanta area.
          </h2>
        </div>
      </div>
      {/* startup-intro phone */}
      <div className="startup-box-mobile">
        <div className="vertical-content">
          <h1
            className="h1"
            style={{ marginBottom: "1rem", marginTop: "2rem" }}
          >
            we source and vet qualified tech talent for your{" "}
            <span className="span">tech startup</span>
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            we are a team based in the atlanta and our priority is to help aid
            startups by providing them talented web developers.
          </h2>{" "}
          <div className="icons">
            <AiFillAndroid className="icon" />
            <AiFillApple className="icon" />
            <FaReact className="icon" />
          </div>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            we target the best college student talent from the top universities
            in the metro atlanta area.
          </h2>
        </div>
      </div>
      {/* startup-mu desktop */}
      <div className="startup-box">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            create your startup profile
          </h1>
          <div className="vertical-content">
            <img src={startup} className="logo" alt="startup" />
            <h2 className="h3" style={{ marginBottom: "1rem" }}>
              your startup profile will reflect your company
            </h2>
          </div>
        </div>
      </div>
      {/* startup-mu phone */}
      <div className="startup-box-mobile">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            create your startup mu
          </h1>
          <div className="vertical-content">
            <img src={startup} className="logo" alt="startup" />
            <h2 className="h3" style={{ marginBottom: "1rem" }}>
              your startup profile will reflect your company
            </h2>
          </div>
        </div>
      </div>
      {/* matching-algo desktop */}
      <div className="startup-box">
        <div className="vertical-content">
          {" "}
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            our matching model
          </h1>
          <img
            src={filter}
            className="large-logo"
            alt="bear"
            style={{ marginBottom: "1rem" }}
          />
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            we know that early stage startups have the difficult task of finding
            the perfect team to help them grow, because of this we crafted our
            sourcing strategy around on key metric,{" "}
            <span className="span">data</span>.
          </h2>
        </div>
      </div>
      {/* matching-algo phone */}
      <div className="startup-box-mobile">
        <div className="vertical-content">
          {" "}
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            our matching model
          </h1>
          <img
            src={filter}
            className="large-logo"
            alt="bear"
            style={{ marginBottom: "1rem" }}
          />
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            early stage startups have the difficult task of finding the perfect
            team, so we crafted our sourcing strategy around{" "}
            <span className="span">developer data</span> to find the best
            possible hire.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Startup;
