import "../App.css";

export default function Success() {
  return (
    <div className="main">
      <div className="vertical-content" style={{ marginTop: "3rem" }}>
        <h1 className="h1" style={{ width: "100%", marginBottom: "1rem" }}>
          Profile Request
        </h1>
        <h2>
          Your request has been received, please allow for 24-72 hours for an
          email confirmation with your live URL.
        </h2>
      </div>
    </div>
  );
}
