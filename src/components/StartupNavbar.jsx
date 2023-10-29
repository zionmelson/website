import "./Components.css";
import startup from "../assets/startup.svg";

export default function StartupNavbar() {
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
        <a href="/startup">
          <img src={startup} className="nav-logo" alt="logo" />
        </a>
      </div>
    </div>
  );
}
