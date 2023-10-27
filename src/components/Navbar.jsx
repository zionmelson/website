import "./Components.css";
import bear from "../assets/bear.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul className="text">
        <li>home</li>
        <li>startups</li>
        <li>about</li>
        <li>contact</li>
      </ul>
      <div className="logo-circle">
        <img src={bear} className="nav-logo" alt="logo" />
      </div>
    </div>
  );
}
