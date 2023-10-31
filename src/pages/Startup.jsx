import bear from "../assets/bear.svg";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import { FaReact } from "react-icons/fa";

import startup from "../assets/sProfile.svg";
import filter from "../assets/filter.svg";

import "../App.css";

function Startup() {
  return (
    <div className="main">
      <div className="startup-box">
        <div className="horizontal-content">
          <img src={bear} className="logo" alt="bear" />
          <div className="content-text">
            <h1 className="h1">
              we source and vet qualified and reputable developer talent for
              your <span className="span">tech startup</span>
            </h1>
            <h2 className="h2">
              we are a team based in the atlanta and our priority is to help aid
              startups by providing them talented web developers.
            </h2>{" "}
            <div className="icons">
              <AiFillAndroid className="icon" />
              <AiFillApple className="icon" />
              <FaReact className="icon" />
            </div>
            <h2 className="h2">
              we target the best college student talent from the top
              universities in the metro atlanta area.
            </h2>
          </div>
        </div>
      </div>
      <div className="startup-box-mobile">
        <div className="horizontal-content">
          <img src={bear} className="logo" alt="bear" />
          <div className="content-text">
            <h1 className="h1">
              we source and vet qualified and reputable tech talent for your{" "}
              <span className="span">startup</span>
            </h1>
            <h2 className="h2">
              we are a team based in the atlanta and our priority is to help aid
              startups by providing them talented web developers.
            </h2>{" "}
            <div className="icons">
              <AiFillAndroid className="icon" />
              <AiFillApple className="icon" />
              <FaReact className="icon" />
            </div>
            <h2 className="h2">
              we target the best college student talent from the top
              universities in the metro atlanta area.
            </h2>
          </div>
        </div>
      </div>
      <div className="startup-box">
        <div className="vertical-content">
          <h1 className="h1">create your startup profile</h1>
          <div className="horizontal-content-small">
            <img src={startup} className="logo" alt="startup" />
            <h2 className="h2-para">
              your startup profile will reflect your company
            </h2>
          </div>
        </div>
      </div>
      <div className="startup-box-mobile">
        <div className="vertical-content">
          <h1 className="h1">create your startup profile</h1>
          <div className="horizontal-content-small">
            <img src={startup} className="logo" alt="startup" />
            <h2 className="h2-para">
              your startup profile will reflect your company
            </h2>
          </div>
        </div>
      </div>
      <div className="startup-box">
        <div className="vertical-content">
          {" "}
          <h1 className="h1">our matching model</h1>
          <img src={filter} className="logo" alt="bear" />
          <h2 className="h2" style={{ width: "80%" }}>
            we know that early stage startups have the difficult task of finding
            the perfect team to help them grow, because of this we crafted our
            sourcing strategy around on key metric,{" "}
            <span className="span">data</span>.
          </h2>
        </div>
      </div>
      <div className="startup-box-mobile">
        <div className="vertical-content">
          {" "}
          <h1 className="h1">our matching model</h1>
          <img src={filter} className="logo" alt="bear" />
          <h2 className="h2" style={{ width: "80%" }}>
            we know that early stage startups have the difficult task of finding
            the perfect team to help them grow, because of this we crafted our
            sourcing strategy around on key metric,{" "}
            <span className="span">data</span>.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Startup;

// <div className="intro">
// <img src={bear} className="logo" alt="bear" />
// <div className="content-text">
//   {" "}
//   <h1 className="h1">
//     we source and vet qualified and reputable tech talent for your{" "}
//     <span className="span">startup</span>
//   </h1>
//   <h2 className="h2">
//     we are a team based in the atlanta and our priority is to help aid
//     startups by providing them talented web developers.
//   </h2>
//   <div className="icons">
//     <AiFillAndroid className="icon" />
//     <AiFillApple className="icon" />
//     <FaReact className="icon" />
//   </div>
// <h2 className="h2">
//   we target the best college student talent from the top
//   universities in the metro atlanta area.
// </h2>
// </div>
// </div>
// <div className="focus">
// <div className="context-text-focus">
//   <h1 className="h1">we take a different approach</h1>
//   <h2 className="h2">
//     our focus is not to just place you with a developer, but to take
//     the extra step and personalize the entire hiring process.
//   </h2>
// </div>
