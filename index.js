// Add Express
const express = require("express");
const bodyParser = require("body-parser");
// Initialize Express
const app = express();

//Hardcoded documents references
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const ferranFile = require("./data/ferran.json");
const carlosFile = require("./data/carlos.json");
const minor = require("./data/minor.json");

//Object with all Ferran grades
const ferranMarks = require("./data/ferranMarks.json");

//Object with all Ferran enrollment
const enrollments = require("./data/enrollments.json");

app.get("/", function (req, res) {
  response = {
    error: true,
    code: 200,
    message: "API REST working.",
  };
  res.send(response);
});

//Ferran File
app.route("/file/ferran").get(function (req, res) {
  response = {
    error: false,
    code: 200,
    message: "Ferran - File",
    data: ferranFile,
  };

  res.header("Access-Control-Allow-Origin", "*");
  res.send(response);
});

//Ferran - Minor File
app.route("/file/minor").get(function (req, res) {
  response = {
    error: false,
    code: 200,
    message: "Ferran - Minor file",
    data: minor,
  };

  res.header("Access-Control-Allow-Origin", "*");
  res.send(response);
});

//Returns Ferran enrollments
app.route("/enrollments").get(function (req, res) {
  response = {
    error: false,
    code: 200,
    message: "Ferran enrollments",
    data: enrollments,
  };

  res.header("Access-Control-Allow-Origin", "*");
  res.send(response);
});

//Returns Ferran grades
app.route("/grades").get(function (req, res) {
  response = {
    error: false,
    code: 200,
    message: "All Ferran grades",
    data: ferranMarks,
  };

  res.header("Access-Control-Allow-Origin", "*");
  res.send(response);
});

//Return the convos of a particular subject
app.route("/subject/").get(function (req, res) {
  if (!req.query.codAsignatura) {
    const response = {
      error: true,
      code: 400,
      message: "Please specify a subject",
    };
    return res.status(400).send(response);
  }

  const subject = ferranMarks.find(
    (obj) => obj.O[0].P.codAsignatura === req.query.codAsignatura
  );

  if (!subject) {
    const response = {
      error: true,
      code: 404,
      message: "Subject not found",
    };
    return res.status(404).send(response);
  }

  const subjectConvos = subject.O.map((item) => item.P);

  const response = {
    error: false,
    code: 200,
    message: "Information of the convos of a student of a particular subject",
    asignatura: subjectConvos,
  };
  res.header("Access-Control-Allow-Origin", "*");
  res.status(200).send(response);
});

//Carlos File
app.route("/file/carlos").get(function (req, res) {
  response = {
    error: false,
    code: 200,
    message: "Carlos - File",
    data: carlosFile,
  };

  res.header("Access-Control-Allow-Origin", "*");
  res.send(response);
});
// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
