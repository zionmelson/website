import {
  FaReact,
  FaPython,
  FaRust,
  FaJs,
  FaDocker,
  FaEthereum,
  FaNode,
} from "react-icons/fa";
import { TbBrandGolang } from "react-icons/tb";

import { useState } from "react";

import Liang from "./devs/62328c";
import Queen from "./devs/2e31c0";
import Murdock from "./devs/3f7099";
import Lucas from "./devs/8a6ca5";
import Grimm from "./devs/27ff01";
import Richards from "./devs/0459bb";
import Spencer from "./devs/1270f5";
import Douglas from "./devs/5adff2";
import Rogers from "./devs/601892";
import Blaze from "./devs/672957";
import Wilson from "./devs/c29e3b";
import Savage from "./devs/dcb916";
import Barton from "./devs/8f112e";
import Banner from "./devs/ae6248";
import Secord from "./devs/0c04a5";
import Parker from "./devs/9f15b7";
import Javert from "./devs/7b81ce";
import Barnes from "./devs/5f84d3";

import "../App.css";

export default function Developers() {
  const [active, setActive] = useState("python");

  return (
    <div className="main">
      {/* developers desktop */}
      <div className="box">
        <div className="vertical-content" style={{ marginTop: "3rem" }}>
          <h1 className="h1" style={{ marginBottom: "2rem" }}>
            active developers
          </h1>
          <div
            className="dev-content"
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem",
              width: "100%",
              marginBottom: "2rem",
            }}
          >
            <h2 className="h2">filter by language</h2>
            <div className="icons" style={{ marginBottom: "1rem" }}>
              <FaPython
                id={active === "python" ? "python-active" : "python"}
                className={active === "python" ? "icon-active" : "icon"}
                style={{ cursor: "pointer" }}
                onClick={() => setActive("python")}
              />
              <TbBrandGolang
                id={active === "go" ? "go-active" : "go"}
                className={active === "go" ? "icon-active" : "icon"}
                style={{ cursor: "pointer" }}
                onClick={() => setActive("go")}
              />
              <FaRust
                id={active === "rust" ? "rust-active" : "rust"}
                className={active === "rust" ? "icon-active" : "icon"}
                style={{ cursor: "pointer" }}
                onClick={() => setActive("rust")}
              />
              <FaJs
                id={active === "js" ? "js-active" : "js"}
                className={active === "js" ? "icon-active" : "icon"}
                style={{ cursor: "pointer" }}
                onClick={() => setActive("js")}
              />
              <FaReact
                id={active === "react" ? "react-active" : "react"}
                className={active === "react" ? "icon-active" : "icon"}
                style={{ cursor: "pointer" }}
                onClick={() => setActive("react")}
              />
              <FaDocker
                id={active === "docker" ? "docker-active" : "docker"}
                className={active === "docker" ? "icon-active" : "icon"}
                style={{ cursor: "pointer" }}
                onClick={() => setActive("docker")}
              />
              <FaEthereum
                id={active === "solidity" ? "solidity-active" : "solidity"}
                className={active === "solidity" ? "icon-active" : "icon"}
                style={{ cursor: "pointer" }}
                onClick={() => setActive("solidity")}
              />
              <FaNode
                id={active === "node" ? "node-active" : "node"}
                className={active === "node" ? "icon-active" : "icon"}
                style={{ cursor: "pointer" }}
                onClick={() => setActive("node")}
              />
            </div>
          </div>
          <div className={active === "python" ? "python-devs" : "hide"}>
            <Liang />
            <Richards />
            <Rogers />
            <Barnes />
            <Murdock />
          </div>
          <div className={active === "go" ? "go-devs" : "hide"}>
            <Savage />
            <Spencer />
            <Queen />
            <Barnes />
          </div>
          <div className={active === "rust" ? "rust-devs" : "hide"}>
            <Savage />
            <Spencer />
            <Banner />
            <Javert />
          </div>
          <div className={active === "js" ? "js-devs" : "hide"}>
            <Richards />
            <Liang />
            <Parker />
            <Grimm />
            <Secord />
          </div>
          <div className={active === "react" ? "react-devs" : "hide"}>
            <Wilson />
            <Blaze />
            <Lucas />
            <Barton />
          </div>
          <div className={active === "docker" ? "docker-devs" : "hide"}>
            <Javert />
            <Wilson />
            <Rogers />
            <Douglas />
            <Queen />
          </div>
          <div className={active === "solidity" ? "solidity-devs" : "hide"}>
            <Liang />
          </div>
          <div className={active === "node" ? "node-devs" : "hide"}>
            <Savage />
            <Liang />
            <Spencer />
            <Lucas />
          </div>
        </div>
      </div>
      {/* developers mobile */}
      <div className="box-mobile">
        <div className="vertical-content">
          <h1 className="h1" style={{ marginBottom: "2rem" }}>
            active developers
          </h1>
          <div
            className="dev-content"
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem",
              width: "100%",
              marginBottom: "2rem",
            }}
          >
            <h2 className="h2" style={{ marginBottom: "1rem" }}>
              filter by language
            </h2>
            <select
              onChange={(e) => setActive(e.target.value)}
              className="select"
            >
              <option value="python">Python</option>
              <option value="go">Go</option>
              <option value="rust">Rust</option>
              <option value="js">Javascript</option>
              <option value="react">React</option>
              <option value="docker">Docker</option>
              <option value="solidity">Solidity</option>
              <option value="node">Node</option>
            </select>
          </div>
          <div className={active === "python" ? "python-devs" : "hide"}>
            <Liang />
            <Richards />
            <Rogers />
            <Barnes />
            <Murdock />
          </div>
          <div className={active === "go" ? "go-devs" : "hide"}>
            <Savage />
            <Spencer />
            <Queen />
            <Barnes />
          </div>
          <div className={active === "rust" ? "rust-devs" : "hide"}>
            <Savage />
            <Spencer />
            <Banner />
            <Javert />
          </div>
          <div className={active === "js" ? "js-devs" : "hide"}>
            <Richards />
            <Liang />
            <Parker />
            <Grimm />
            <Secord />
          </div>
          <div className={active === "react" ? "react-devs" : "hide"}>
            <Wilson />
            <Blaze />
            <Lucas />
            <Barton />
          </div>
          <div className={active === "docker" ? "docker-devs" : "hide"}>
            <Javert />
            <Wilson />
            <Rogers />
            <Douglas />
            <Queen />
          </div>
          <div className={active === "solidity" ? "solidity-devs" : "hide"}>
            <Liang />
          </div>
          <div className={active === "node" ? "node-devs" : "hide"}>
            <Savage />
            <Liang />
            <Spencer />
            <Lucas />
          </div>
        </div>
      </div>
    </div>
  );
}
