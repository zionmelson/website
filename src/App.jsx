import bear from "./assets/bear.svg";
import filter from "./assets/filter.svg";
import Navbar from "./components/Navbar";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import { FaReact } from "react-icons/fa";

// import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="intro">
          <img src={bear} className="logo" alt="bear" />

          <div className="content-text">
            {" "}
            <h1 className="h1">
              we source and vet qualified tech talent for your{" "}
              <span className="span">startup</span>
            </h1>
            <h2 className="h2">
              we are a team based in the atlanta and our priority is to help aid
              startups by providing them talented web developers.
            </h2>
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
        <div className="focus">
          <div className="context-text-focus">
            <h1 className="h1">we take a different approach</h1>
            <h2 className="h2">
              our focus is not to just place you with a developer, but to take
              the extra step and personalize the entire hiring process.
            </h2>
          </div>
          <div className="context-text-focus-two">
            {" "}
            <img src={filter} className="logo" alt="bear" />
            <div className="">
              <h1 className="h1">our matching model</h1>
              <h2 className="h2">
                we know that early stage startups have the difficult task of
                finding the perfect team to help them grow, because of this we
                crafted our sourcing strategy around on key metric,{" "}
                <span className="span">data</span>.
              </h2>
              <h2 className="h2">
                not only are we taking that extra step to understand the exact
                needs of your startup, it is a requirement that all developers
                that we source go through a both qualative and quantative
                assessment to ensure that they are a good fit for your startup.
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
