// emailModel.js
const mongoose = require("mongoose");

const EmailSchema = new mongoose.Schema({
  from_name: String,
  phone_number: String,
  email: String,
  message: String,
});

module.exports = mongoose.model("Email", EmailSchema);
