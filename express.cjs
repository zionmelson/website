const express = require("express");
const sgMail = require("@sendgrid/mail");
const bodyParser = require("body-parser");
require("dotenv").config();

const cors = require("cors");

//Express Server
const app = express();
app.use(bodyParser.json());
app.use(cors());

//SendGrid API key
const api_key = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(api_key);

//server listening port
const port = process.env.PORT || 80;

// Route handler for /signup endpoint
app.post("/signup", (req, res) => {
  const { email, selectedUserType } = req.body;

  const msg = {
    to: email,
    from: "admin@learnmutiny.io",
    subject: "Welcome to LearnMutiny",
    text: `Thank you for signing up as a ${selectedUserType}! We have received your request to access the beta version of learnmutiny. Our team will review your request and follow up with further instructions on how to access the platform.\n\nThank you for your interest!`,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Confirmation email sent");
      res.sendStatus(200); // Send a success response to the client
    })
    .catch((error) => {
      console.error("Error sending confirmation email:", error);
      res.sendStatus(500); // Send an error response to the client
    });
});

// Start the server
app.listen(port, () => {
  console.log("Server is listening on port 80");
});
