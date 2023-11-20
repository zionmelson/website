import bear from "./assets/bear.svg";
import inverse from "./assets/inverse.svg";
import zion from "./assets/zion.svg";
import max from "./assets/max.svg";

import Lottie from "lottie-react";
import animation from "./assets/animate.json";

// import black from "./assets/black.svg";
// import blackmoney from "./assets/blackmoney.svg";
// import attributes from "./assets/attributes.svg";

// import white from "./assets/white.svg";
// import whitemoney from "./assets/whitemoney.svg";
import link from "./assets/link.svg";
import calen from "./assets/calen.svg";

import "./App.css";

function Home() {
  return (
    //
    <div className="main">
      {/* logo desktop */}
      <div className="box">
        <div className="vertical-content">
          <div className="vertical-content">
            <img src={bear} className="logo" id="logo" alt="bear" />
            <img src={inverse} className="logo" id="light-logo" alt="inverse" />
          </div>
        </div>
      </div>
      {/* intro desktop */}
      <div className="box">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem", width: "70%" }}>
            find your next full-time position with learnmutiny
          </h1>
          <h2 className="h2">we place technical leads and CTOs at startups</h2>
          <Lottie
            animationData={animation}
            style={{
              width: "20%",
            }}
          />
          <h3 className="h3" style={{ marginBottom: "1rem", width: "70%" }}>
            we target startups who have raised pre-seed to series B funding
            rounds and are looking to hire a technical lead to amplify their
            internal development processes.
          </h3>
        </div>
      </div>
      {/* value desktop*/}
      <div className="box">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            more about learnmutiny
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem", width: "70%" }}>
            we take a different approach to recruiting
          </h2>
          <h3 className="h3" style={{ marginBottom: "1rem", width: "75%" }}>
            at learnmutiny our mission is to match you with companies that align
            with your career goals. <br />
            we look to place intillegent technical leaders at startups that are
            working in up and coming areas of technology.
          </h3>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            currently looking for your next position?
          </h2>
          <a
            href="https://calendly.com/learnmutiny/showcase"
            target="_blank"
            rel="noreferrer"
          >
            <span className="emoji-container">
              <img src={calen} className="emoji" alt="mu" />
              Calendly
            </span>
          </a>
        </div>
      </div>
      {/* logo phone */}
      <div className="box-mobile">
        <div className="vertical-content">
          <div className="vertical-content">
            <img src={bear} className="logo" id="logo" alt="bear" />
            <img
              src={inverse}
              className="logo"
              id="light-logo"
              alt="inverse"
            />{" "}
          </div>
        </div>
      </div>
      {/* intro phone */}
      <div className="box-mobile">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            find your next <br /> full-time position with learnmutiny
          </h1>
          <h2 className="h2">we place technical leads and CTOs at startups</h2>
          <Lottie
            animationData={animation}
            style={{
              marginBottom: "1rem",
              width: "60%",
            }}
          />
          <h3 className="h3" style={{ marginBottom: "1rem" }}>
            we target startups who have raised pre-seed to series B funding
            rounds and are looking to hire a technical lead to amplify their
            internal development processes.
          </h3>
        </div>
      </div>
      {/* value phone*/}
      <div className="box-mobile">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            more about us
          </h1>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            we take a different approach to recruiting
          </h2>
          <h3 className="h3" style={{ marginBottom: "1rem", width: "85%" }}>
            at learnmutiny our mission is to place intillegent technical leaders
            at startups that are working in up and coming areas of technology.
          </h3>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            looking for your next position?
          </h2>
          <a
            href="https://calendly.com/learnmutiny/showcase"
            target="_blank"
            rel="noreferrer"
          >
            <span className="emoji-container">
              <img src={calen} className="emoji" alt="mu" />
              Calendly
            </span>
          </a>
        </div>
      </div>
      {/* mu desktop */}
      {/* <div className="box">
        <div className="vertical-content" style={{ marginBottom: "1rem" }}>
          <h1 className="h1" style={{ margin: "1rem" }}>
            build up your mu profile
          </h1>
          <img src={black} className="logo" alt="mu" />
        </div>
        <div className="vertical-content">
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            <span className="horizontal-content-small">
              connect your mu with{" "}
              <a
                href="https://github.com/learnmutiny-io"
                target="_blank"
                rel="noreferrer"
              >
                <span className="emoji-container">
                  <img src={git} className="emoji" alt="mu" /> Github
                </span>{" "}
              </a>
              <p className="and">and</p>{" "}
              <a
                href="https://linkedin.com/company/learnmutiny"
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
          <h2 className="h3" style={{ marginBottom: "1rem" }}>
            you simply sign up by creating a mu profile. you connect your
            LinkedIn and Github so we can use that data to pair you with
            startups and to get you paid!
          </h2>
        </div>
      </div> */}
      {/* money desktop */}
      {/* <div className="box">
        <div className="vertical-content">
          <h1 className="h1" style={{ margin: "1rem" }}>
            earn with your mu profile
          </h1>
          <img
            src={blackmoney}
            className="logo"
            alt="mu"
            style={{ marginBottom: "1rem" }}
          />
          <h2 className="h3" style={{ marginBottom: "1rem" }}>
            as you continue to learn and improve, startups will reach out and
            look at your information. for every look you get, we pay you.
          </h2>
        </div>
      </div> */}
      {/* attributes desktop */}
      {/* <div className="box">
        <div className="vertical-content">
          <h1 className="h1" style={{ margin: "1rem" }}>
            rack up attributes
          </h1>
          <img
            src={attributes}
            className="logo"
            style={{ marginBottom: "1rem" }}
            alt="attributes"
          />
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            attributes are gifted to you from founders
          </h2>
          <h3 className="h3" style={{ marginBottom: "1rem" }}></h3>
        </div>
      </div> */}
      {/* mu phone */}
      {/* <div className="box-mobile">
        <div className="horizontal-content-small">
          <div className="vertical-content">
            <h1 className="h1" style={{ margin: "1rem" }}>
              build up your mu
            </h1>
            <img src={black} className="logo" alt="mu" />
          </div>
          <div className="vertical-content" style={{ marginBottom: "1rem" }}>
            <span
              className="horizontal-content-small"
              style={{ marginBottom: "1rem" }}
            >
              {" "}
              connect your mu with
              <a
                href="https://github.com/learnmutiny-io"
                target="_blank"
                rel="noreferrer"
              >
                <span className="emoji-container">
                  <img src={git} className="emoji" alt="mu" /> Github
                </span>{" "}
              </a>
              <p className="and">and</p>{" "}
              <a
                href="https://linkedin.com/company/learnmutiny"
                target="_blank"
                rel="noreferrer"
              >
                <span className="emoji-container">
                  {" "}
                  <img src={link} className="emoji" alt="mu" /> LinkedIn
                </span>
              </a>
            </span>

            <h2 className="h3">
              you simply sign up by creating a mu profile. you connect your
              LinkedIn and Github so we can use that data to pair you with
              startups and to get you paid!
            </h2>
          </div>
        </div>
      </div> */}
      {/* money phone */}
      {/* <div className="box-mobile">
        <div className="vertical-content">
          <h1 className="h1" style={{ margin: "1rem" }}>
            earn with your mu
          </h1>
          <img
            src={blackmoney}
            className="logo"
            alt="mu"
            style={{ marginBottom: "1rem" }}
          />
          <h2 className="h3" style={{ marginBottom: "1rem" }}>
            as you continue to learn and improve, startups will reach out and
            look at your information. for every look you get, we pay you.
          </h2>
        </div>
      </div> */}
      {/* attributes phone */}
      {/* <div className="box-mobile">
        <div className="vertical-content">
          <h1 className="h1" style={{ margin: "1rem" }}>
            rack up attributes
          </h1>
          <img
            src={attributes}
            className="logo"
            style={{ marginBottom: "1rem" }}
            alt="attributes"
          />
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            attributes are gifted to you from founders
          </h2>
          <h3 className="h3" style={{ marginBottom: "1rem" }}></h3>
        </div>
      </div> */}
      {/* founders desktop */}
      <div className="box">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            meet the founders
          </h1>
          <div className="horizontal-content">
            <div className="headshot">
              <img src={zion} className="headshots" alt="zion" />
              <h2
                className="h2"
                style={{ marginBottom: "1rem", marginTop: "1rem" }}
              >
                <span className="horizontal-content-small">
                  zion
                  <a
                    href="https://linkedin.com/in/zionmelson"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="emoji-container" style={{ padding: 0 }}>
                      {" "}
                      <img src={link} className="emoji" alt="mu" />
                    </span>
                  </a>
                </span>
              </h2>
            </div>
            <div className="horizontal-content">
              <div className="headshot">
                <img src={max} className="headshots" alt="max" />
                <h2
                  className="h2"
                  style={{ marginBottom: "1rem", marginTop: "1rem" }}
                >
                  <span className="horizontal-content-small">
                    maxmillian
                    <a
                      href="https://www.linkedin.com/in/mxmilan/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="emoji-container" style={{ padding: 0 }}>
                        {" "}
                        <img src={link} className="emoji" alt="mu" />
                      </span>
                    </a>
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            zion and max are atlanta natives who are invested in the uplifting
            the startup ecosystem by sourcing high caliber tech talent for
            innovative startups
          </h2>
          <h3 className="h3" style={{ marginBottom: "1rem" }}>
            learnmutiny is our way of giving back to the startup community and
            turning ATL into the tech hub of the southeast (represent).
          </h3>
        </div>
      </div>
      {/* founders phone */}
      <div className="box-mobile">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "1rem" }}>
            meet the founders
          </h1>
          <div className="vertical-content">
            <div className="headshot">
              <img src={zion} className="headshots" alt="zion" />
              <h2
                className="h2"
                style={{ marginBottom: "1rem", marginTop: "1rem" }}
              >
                <span className="horizontal-content-small">
                  zion
                  <a
                    href="https://linkedin.com/in/zionmelson"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="emoji-container" style={{ padding: 0 }}>
                      {" "}
                      <img src={link} className="emoji" alt="mu" />
                    </span>
                  </a>
                </span>
              </h2>
            </div>
            <div className="headshot">
              <img src={max} className="headshots" alt="max" />
              <h2
                className="h2"
                style={{ marginBottom: "1rem", marginTop: "1rem" }}
              >
                <span className="horizontal-content-small">
                  maxmillian
                  <a
                    href="https://linkedin.com/in/mxmilan"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="emoji-container" style={{ padding: 0 }}>
                      {" "}
                      <img src={link} className="emoji" alt="mu" />
                    </span>
                  </a>
                </span>
              </h2>
            </div>
          </div>
          <h2 className="h2" style={{ marginBottom: "1rem", width: "80%" }}>
            zion and max are atlanta natives and are invested in the uplifting
            the startup ecosystem.
          </h2>
          <h3 className="h3" style={{ marginBottom: "1rem" }}>
            learnmutiny is our way of turning ATL into the southeast tech hub
            (represent).
          </h3>
        </div>
      </div>
    </div>
    // </div>
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
