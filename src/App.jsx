import bear from "./assets/bear.png";
import Footer from "./components/Footer";
import Alert from "./components/Alert";
import Profile from "./components/Profile";

import "./App.css";

function testAlerts() {}
function testProfile() {}
function testExpProfile() {}

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={bear} className="bear-logo" alt="logo" />
      </div>
      <div className="content"></div>
      <div className="footer-content">
        <Footer />
      </div>
    </div>
  );
}

export default App;
