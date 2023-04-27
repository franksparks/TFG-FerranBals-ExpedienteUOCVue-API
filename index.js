const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

// Initialize Express
const app = express();
// Environment variable
const uri = process.env.MONGODB_URI;
// Port
const port = 5001;

// Connection to database
try {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successful connection to database");
    })
    .catch((error) => {
      console.log("Error connecting to database - ", error);
    });
} catch (error) {
  console.error(error);
}

// Mongoose schema
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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// API main page
app.get("/", function (req, res) {
  response = {
    error: false,
    code: 200,
    message: "API REST working",
  };
  res.send(response);
});

// Alice - File
app.get("/file/alice", async (req, res) => {
  const Test = mongoose.model("alice", testSchema, "alice");
  try {
    const testDocs = await Test.find(); // Find all documents in "alice" collection
    response = {
      error: false,
      code: 200,
      message: "Alice - File",
      data: testDocs[0], // Add the document found to the response
    };
    console.log("Connected, data granted");
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response);
  } catch (error) {
    console.log("Error getting data from alice collection", error);
    response = {
      error: true,
      code: 500,
      message: "Error getting data from alice collection",
    };
    res.header("Access-Control-Allow-Origin", "*");
    res.status(500).send(response);
  }
});

//Alice minor - File
app.get("/file/minor", async (req, res) => {
  const Test = mongoose.model("minor", testSchema, "minor");
  try {
    const testDocs = await Test.find(); // Find all documents in "minor" collection
    response = {
      error: false,
      code: 200,
      message: "Minor - File",
      data: testDocs[0], // Add the document found to the response
    };
    console.log("Connected, data granted");
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response);
  } catch (error) {
    console.log("Error getting data from minor collection", error);
    response = {
      error: true,
      code: 500,
      message: "Error getting data from minor collection",
    };
    res.header("Access-Control-Allow-Origin", "*");
    res.status(500).send(response);
  }
});

//Bob - File
app.get("/file/bob", async (req, res) => {
  const Test = mongoose.model("bob", testSchema, "bob");
  try {
    const testDocs = await Test.find(); // Find all documents in "bob" collection
    response = {
      error: false,
      code: 200,
      message: "Bob - File",
      data: testDocs[0], // Add the document found to the response
    };
    console.log("Connected, data granted");
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response);
  } catch (error) {
    console.log("Error getting data from bob collection", error);
    response = {
      error: true,
      code: 500,
      message: "Error getting data from bob collection",
    };
    res.header("Access-Control-Allow-Origin", "*");
    res.status(500).send(response);
  }
});

// Alice - Enrollments
app.get("/enrollments/alice", async (req, res) => {
  const Test = mongoose.model(
    "aliceEnrollments",
    testSchema,
    "aliceEnrollments"
  );
  try {
    const testDocs = await Test.find(); // Find all documents in "aliceEnrollments" collection
    response = {
      error: false,
      code: 200,
      message: "Alice - Enrollments",
      data: testDocs[0], // Add the document found to the response
    };
    console.log("Connected, data granted");
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response);
  } catch (error) {
    console.log("Error getting data from aliceEnrollments collection", error);
    response = {
      error: true,
      code: 500,
      message: "Error getting data from aliceEnrollments collection",
    };
    res.header("Access-Control-Allow-Origin", "*");
    res.status(500).send(response);
  }
});

// Alice minor - Enrollments
app.get("/enrollments/minor", async (req, res) => {
  const Test = mongoose.model(
    "minorEnrollments",
    testSchema,
    "minorEnrollments"
  );
  try {
    const testDocs = await Test.find(); // Find all documents in "minorEnrollments" collection
    response = {
      error: false,
      code: 200,
      message: "Alice minor - enrollments",
      data: testDocs[0], // Add the document found to the response
    };
    console.log("Connected, data granted");
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response);
  } catch (error) {
    console.log("Error getting data from minorEnrollments collection", error);
    response = {
      error: true,
      code: 500,
      message: "Error getting data from minorEnrollments collection",
    };
    res.header("Access-Control-Allow-Origin", "*");
    res.status(500).send(response);
  }
});

// Bob - Enrollments
app.get("/enrollments/bob", async (req, res) => {
  const Test = mongoose.model("bobEnrollments", testSchema, "bobEnrollments");
  try {
    const testDocs = await Test.find(); // Find all documents in "bobEnrollments" collection
    response = {
      error: false,
      code: 200,
      message: "Bob - Enrollments",
      data: testDocs[0], // Add the document found to the response
    };
    console.log("Connected, data granted");
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response);
  } catch (error) {
    console.log("Error getting data from bobEnrollments collection", error);
    response = {
      error: true,
      code: 500,
      message: "Error getting data from bobEnrollments collection",
    };
    res.header("Access-Control-Allow-Origin", "*");
    res.status(500).send(response);
  }
});

// Alice - Grades
app.get("/grades", async (req, res) => {
  const Test = mongoose.model("aliceMarks", testSchema, "aliceMarks");
  try {
    const testDocs = await Test.find({}); // Find all documents in "aliceMarks" collection
    response = {
      error: false,
      code: 200,
      message: "Alice - Grades",
      data: testDocs, // Add the document found to the response
    };
    console.log("Connected, data granted");
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response);
  } catch (error) {
    console.log("Error getting data from aliceMarks collection", error);
    response = {
      error: true,
      code: 500,
      message: "Error getting data from aliceMarks collection",
    };
    res.header("Access-Control-Allow-Origin", "*");
    res.status(500).send(response);
  }
});

// Returns a particular subject
app.get("/subject/", async (req, res) => {
  const Test = mongoose.model("aliceMarks", testSchema, "aliceMarks");
  try {
    const subjects = await Test.find({
      "O.P.codAsignatura": req.query.codAsignatura,
    });

    response = {
      error: false,
      code: 200,
      message: "Subject",
      subject: subjects[0], // Add the document found to the response
    };
    console.log("Conectado y obtenida info");
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response);
  } catch (error) {
    console.log("Error getting data from aliceMarks collection", error);
    response = {
      error: true,
      code: 500,
      message: "Error getting data from aliceMarks collection",
    };
    res.header("Access-Control-Allow-Origin", "*");
    res.status(500).send(response);
  }
});

// Initialize server
app.listen(port, () => {
  console.log("Running on port: " + port);
});

// Export the Express API
module.exports = app;
