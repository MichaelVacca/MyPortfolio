// index.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const cors = require("cors");
const app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: "https://my-portfolio-gamma-smoky.vercel.app",
  })
);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const Email = require("./emailModel");

app.get("/", (req, res) => {
  res.send("Hello World! ");
});

app.post("/save-email", async (req, res) => {
  try {
    const { from_name, phone_number, email, message } = req.body;
    if (!from_name || !email) {
      // Basic validation example
      return res.status(400).json({ message: "Missing required fields" });
    }
    const newEmail = new Email({ from_name, phone_number, email, message });
    await newEmail.save();
    res.status(201).json({ message: "Email saved to database." });
  } catch (error) {
    console.error("Save email error:", error);
    res.status(500).json({
      message: "Error saving email to database.",
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
