require("dotenv").config();

const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${encodeURIComponent(
  process.env.DB_PASSWORD
)}@${process.env.DB_CLUSTER_URL}`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB Atlas");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to MongoDB Atlas", err);
});
