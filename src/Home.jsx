import bear from "./assets/bear.svg";
import zion from "./assets/zion.svg";
import max from "./assets/max.svg";
import mu from "./assets/mu.svg";
import money from "./assets/money.svg";
import link from "./assets/link.svg";
import git from "./assets/git.svg";
// import filter from "./assets/filter.svg";
// import { AiFillApple, AiFillAndroid } from "react-icons/ai";
// import { FaReact } from "react-icons/fa";

import "./App.css";

function Home() {
  return (
    <div className="App">
      <div className="main">
        <div className="box">
          <div className="horizontal-content">
            <div className="vertical-content">
              <h1 className="h1" style={{ margin: "1rem" }}>
                curious devs recruit for startups with learnmutiny
              </h1>{" "}
              <h2 className="h2">developers on learnmutiny are paid</h2>
            </div>
            <img src={bear} className="logo" alt="bear" />
          </div>
        </div>
        <div className="box">
          <div className="horizontal-content-small">
            <div className="vertical-content">
              {" "}
              <img src={mu} className="logo" alt="mu" />
              <img src={money} className="logo" alt="money" />
            </div>
            <div className="vertical-content">
              <h1 className="h1" style={{ margin: "1rem" }}>
                build up your mu profile
              </h1>
              <h2
                className="h2"
                style={{
                  gap: 0,
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  marginBottom: "0.8rem",
                }}
              >
                <span
                  style={{
                    gap: 0,
                  }}
                  className="horizontal-content"
                >
                  {" "}
                  connect your mu with
                  <a href="https://github.com" target="_blank" rel="noreferrer">
                    <span className="emoji-container">
                      <img src={git} className="emoji" alt="mu" /> Github
                    </span>{" "}
                  </a>
                  <p className="and">and</p>{" "}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="emoji-container">
                      {" "}
                      <img src={link} className="emoji" alt="mu" /> LinkedIn
                    </span>
                  </a>
                </span>
              </h2>
              <h2 className="h2-para">
                each mu tracks and guages your technical skills and displays
                them to top startups in the atlanta area.
              </h2>
              <div className="vertical-content">
                <h1 className="h1" style={{ margin: "1rem" }}>
                  earn with your mu profile
                </h1>
                <h2 className="h2-para">
                  each mu tracks and guages your technical skills and displays
                  them to top startups in the atlanta area.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="vertical-content">
            <h1 className="h1">meet the founders</h1>
            <div className="headshot-content">
              <div className="headshot">
                <img src={zion} className="headshots" alt="zion" />
                <h2 className="h2">zion</h2>
              </div>
              <div className="headshot">
                <img src={max} className="headshots" alt="max" />
                <h2 className="h2">max</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

// <div className="intro">
//
//           <div className="content-text">
//             {" "}
//             <h1 className="h1">join the future of startups</h1>
//             <h2 className="h2">
//               we are a team based in the atlanta and our priority is to help aid
//               startups by providing them talented web developers.
//             </h2>
//             <div className="icons">
//               <AiFillAndroid className="icon" />
//               <AiFillApple className="icon" />
//               <FaReact className="icon" />
//             </div>
//             <h2 className="h2">
//               we target the best college student talent from the top
//               universities in the metro atlanta area.
//             </h2>
//           </div>
//         </div>
//         <div className="focus">
//           <div className="context-text-focus">
//             <h1 className="h1">we take a different approach</h1>
//             <h2 className="h2">
//               our focus is not to just place you with a developer, but to take
//               the extra step and personalize the entire hiring process.
//             </h2>
//           </div>
//           <div className="context-text-focus-two">
//             {" "}
//             <img src={filter} className="logo" alt="bear" />
//             <div className="">
//               <h1 className="h1">our matching model</h1>
//               <h2 className="h2">
//                 we know that early stage startups have the difficult task of
//                 finding the perfect team to help them grow, because of this we
//                 crafted our sourcing strategy around on key metric,{" "}
//                 <span className="span">data</span>.
//               </h2>
//               <h2 className="h2">
//                 not only are we taking that extra step to understand the exact
//                 needs of your startup, it is a requirement that all developers
//                 that we source go through a both qualative and quantative
//                 assessment to ensure that they are a good fit for your startup.
//               </h2>
//             </div>
//           </div>
//         </div>

{
  /* */
}
