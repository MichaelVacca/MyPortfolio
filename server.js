// Load environment variables from .env file
require("dotenv").config();

// Import necessary libraries
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

// Initialize the express application
const app = express();

// Configure CORS options
const corsOptions = {
  origin: "http://localhost:3000", // Allow only your frontend to communicate with the backend
};

// Apply CORS with the specified options
app.use(cors(corsOptions));

// Body parser middleware to parse JSON bodies
app.use(express.json());

console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

// Router setup
const router = express.Router();

// Define your email transporter using nodemailer
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify connection configuration
contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

// Define the route for handling POST requests to "/contact"
router.post("/contact", (req, res) => {
  const name = req.body.firstName + " " + req.body.lastName; // Added a space between first and last name
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: process.env.EMAIL_USER, // Use your environment variable or directly place the recipient's email address
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ code: 500, status: "Error", error: error });
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

// Use the router
app.use("/", router);

// Start the server
app.listen(5000, () => console.log("Server Running"));
