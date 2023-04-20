// Add Express
const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config();

console.log("TEST MESSAGE");
import mongoose from "mongoose";

// Initialize Express
const app = express();

//mongodb

const uri = process.env.MONGODB_URI;
const port = 5001;

/*
try {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Conexión exitosa a la base de datos");
    })
    .catch((error) => {
      console.log("Error al conectarse a la base de datos - ", error);
    });
} catch (error) {
  console.error(error);
}

const testSchema = new mongoose.Schema({
  properties: {
    S: {
      type: Boolean,
    },
    O: {
      type: Object,
    },
    I: {
      type: Object,
    },
  },
});
*/

//Hardcoded documents references
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  response = {
    error: false,
    code: 200,
    message: "API REST working: " + process.env.MONGODB_URI,
  };
  res.send(response);
});

// Export the Express API
module.exports = app;
