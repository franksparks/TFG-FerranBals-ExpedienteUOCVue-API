// Add Express
const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config();

const port = 5001;

// Initialize Express
const app = express();

//Hardcoded documents references
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  response = {
    error: false,
    code: 200,
    message: "API REST working.",
  };
  res.send(response);
});

// Export the Express API
module.exports = app;
