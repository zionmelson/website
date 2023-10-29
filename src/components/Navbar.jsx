import "./Components.css";
import learnmutiny from "../assets/learnmutiny.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul className="text">
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/startup">startups</a>
        </li>
        <a href="/about">about</a>
        <li>
          {" "}
          <a href="/contact">contact</a>
        </li>
      </ul>
      <div className="logo-background">
        <a href="/">
          <img src={learnmutiny} className="nav-logo" alt="logo" />
        </a>
      </div>
    </div>
  );
}
