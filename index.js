// Add Express
const express = require("express");
const bodyParser = require("body-parser");
// Initialize Express
const app = express();

//Hardcoded documents references
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const aliceFile = require("./data/alice.json");
const bobFile = require("./data/bob.json");
const minor = require("./data/minor.json");

//Object with all Alice grades
const aliceMarks = require("./data/aliceMarks.json");

//Object with all Alice enrollment
const aliceEnrollments = require("./data/aliceEnrollments.json");
const minorEnrollments = require("./data/minorEnrollments.json");
const bobEnrollments = require("./data/bobEnrollments.json");

app.get("/", function (req, res) {
  response = {
    error: true,
    code: 200,
    message: "API REST working.",
  };
  res.send(response);
});

//Alice File
app.route("/file/alice").get(function (req, res) {
  response = {
    error: false,
    code: 200,
    message: "Alice - File",
    data: aliceFile,
  };

  res.header("Access-Control-Allow-Origin", "*");
  res.send(response);
});

//Alice - Minor File
app.route("/file/minor").get(function (req, res) {
  response = {
    error: false,
    code: 200,
    message: "Alice - Minor file",
    data: minor,
  };

  res.header("Access-Control-Allow-Origin", "*");
  res.send(response);
});

//Returns Alice enrollments
app.route("/enrollments").get(function (req, res) {
  response = {
    error: false,
    code: 200,
    message: "Alice enrollments",
    data: aliceEnrollments,
  };

  res.header("Access-Control-Allow-Origin", "*");
  res.send(response);
});

//Returns Alice enrollments
app.route("/enrollments/alice").get(function (req, res) {
  response = {
    error: false,
    code: 200,
    message: "Alice enrollments",
    data: aliceEnrollments,
  };

  res.header("Access-Control-Allow-Origin", "*");
  res.send(response);
});

//Returns Bob enrollments
app.route("/enrollments/bob").get(function (req, res) {
  response = {
    error: false,
    code: 200,
    message: "Bob enrollments",
    data: bobEnrollments,
  };

  res.header("Access-Control-Allow-Origin", "*");
  res.send(response);
});

//Returns Minor enrollments
app.route("/enrollments/minor").get(function (req, res) {
  response = {
    error: false,
    code: 200,
    message: "Minor enrollments",
    data: minorEnrollments,
  };

  res.header("Access-Control-Allow-Origin", "*");
  res.send(response);
});

//Returns Alice grades
app.route("/grades").get(function (req, res) {
  response = {
    error: false,
    code: 200,
    message: "All alice grades",
    data: aliceMarks,
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

  const subject = aliceMarks.find(
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

//Bob File
app.route("/file/bob").get(function (req, res) {
  response = {
    error: false,
    code: 200,
    message: "Bob - File",
    data: bobFile,
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
