import "../App.css";

import { payWithStripe } from "../helper/stripePayment";

export default function Failure() {
  return (
    <div className="main">
      <div className="vertical-content" style={{ marginTop: "3rem" }}>
        <h1 className="h1" style={{ width: "100%", marginBottom: "1rem" }}>
          Profile Request
        </h1>
        <h2 style={{ marginBottom: "1rem" }}>
          There was an error with your request, please try again.
        </h2>
        <button className="emoji-container" onClick={payWithStripe}>
          payment
        </button>
      </div>
    </div>
  );
}
