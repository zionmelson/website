import "./Components.css";

export default function Footer() {
  return (
    <div className="footer">
      <h5 className="h5" style={{ marginBottom: "0.5rem" }}>
        © 2024 learnmutiny. All rights reserved.
      </h5>
      <a href="/terms">
        <h5 className="h5" style={{ marginBottom: "0.5rem" }}>
          Terms of Service
        </h5>
      </a>
      <a href="/privacy">
        <h5 className="h5" style={{ marginBottom: "0.5rem" }}>
          Privacy Policy
        </h5>
      </a>
    </div>
  );
}
