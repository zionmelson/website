import "../App.css";

import { payWithStripe } from "../helper/stripePayment";

export default function Payment() {
  return (
    <div className="main">
      <div className="vertical-content" style={{ marginTop: "3rem" }}>
        <h1 className="h1" style={{ width: "100%", marginBottom: "1rem" }}>
          Profile Request
        </h1>
        <button className="emoji-container" onClick={payWithStripe}>
          payment
        </button>
      </div>
    </div>
  );
}
