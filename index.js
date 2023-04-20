// Add Express
const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config();

console.log("TEST MESSAGE");
const mongoose = require("mongoose");

// Initialize Express
const app = express();

const uri = process.env.MONGODB_URI;
const port = 5001;

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

//Hardcoded documents references
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  response = {
    error: false,
    code: 200,
    message: "API REST working: " + process.env.MONGODB_URI + "success",
  };
  res.send(response);
});

//Alice File
app.get("/file/alice", async (req, res) => {
  // Add Mongoose model for "alice" collection

  const Test = mongoose.model("alice", testSchema, "alice");
  try {
    const testDocs = await Test.find(); // Find all documents in "alice" collection
    response = {
      error: false,
      code: 200,
      message: "Alice - File",
      data: testDocs[0], // Add the document found to the response
    };
    console.log("Conectado y obtenida info");
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response);
  } catch (error) {
    console.log("Error al obtener documentos de la colección alice", error);
    response = {
      error: true,
      code: 500,
      message: "Error al obtener documentos de la colección alice",
    };
    res.header("Access-Control-Allow-Origin", "*");
    res.status(500).send(response);
  }
});

//Alice - Minor File
app.get("/file/minor", async (req, res) => {
  // Add Mongoose model for "minor" collection

  const Test = mongoose.model("minor", testSchema, "minor");
  try {
    const testDocs = await Test.find(); // Find all documents in "alice" collection
    response = {
      error: false,
      code: 200,
      message: "Minor - File",
      data: testDocs[0], // Add the document found to the response
    };
    console.log("Conectado y obtenida info");
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response);
  } catch (error) {
    console.log("Error al obtener documentos de la colección minor", error);
    response = {
      error: true,
      code: 500,
      message: "Error al obtener documentos de la colección minor",
    };
    res.header("Access-Control-Allow-Origin", "*");
    res.status(500).send(response);
  }
});

//Bob File
app.get("/file/bob", async (req, res) => {
  // Add Mongoose model for "bob" collection

  const Test = mongoose.model("bob", testSchema, "bob");
  try {
    const testDocs = await Test.find(); // Find all documents in "bob" collection
    response = {
      error: false,
      code: 200,
      message: "API REST working.",
      data: testDocs[0], // Add the document found to the response
    };
    console.log("Conectado y obtenida info");
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response);
  } catch (error) {
    console.log("Error al obtener documentos de la colección bob", error);
    response = {
      error: true,
      code: 500,
      message: "Error al obtener documentos de la colección bob",
    };
    res.header("Access-Control-Allow-Origin", "*");
    res.status(500).send(response);
  }
});

//Returns Alice enrollments
app.get("/enrollments/alice", async (req, res) => {
  // Add Mongoose model for "aliceEnrollments" collection

  const Test = mongoose.model(
    "aliceEnrollments",
    testSchema,
    "aliceEnrollments"
  );
  try {
    const testDocs = await Test.find(); // Find all documents in "alice" collection
    response = {
      error: false,
      code: 200,
      message: "Alice - File",
      data: testDocs[0], // Add the document found to the response
    };
    console.log("Conectado y obtenida info");
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response);
  } catch (error) {
    console.log(
      "Error al obtener documentos de la colección aliceEnrollments",
      error
    );
    response = {
      error: true,
      code: 500,
      message: "Error al obtener documentos de la colección aliceEnrollments",
    };
    res.header("Access-Control-Allow-Origin", "*");
    res.status(500).send(response);
  }
});

//Returns Minor enrollments
app.get("/enrollments/minor", async (req, res) => {
  // Add Mongoose model for "minorEnrollments" collection

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
      message: "Alice - File",
      data: testDocs[0], // Add the document found to the response
    };
    console.log("Conectado y obtenida info");
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response);
  } catch (error) {
    console.log(
      "Error al obtener documentos de la colección minorEnrollments",
      error
    );
    response = {
      error: true,
      code: 500,
      message: "Error al obtener documentos de la colección minorEnrollments",
    };
    res.header("Access-Control-Allow-Origin", "*");
    res.status(500).send(response);
  }
});

//Returns Bob enrollments
app.get("/enrollments/bob", async (req, res) => {
  // Add Mongoose model for "bobEnrollments" collection

  const Test = mongoose.model("bobEnrollments", testSchema, "bobEnrollments");
  try {
    const testDocs = await Test.find(); // Find all documents in "bobEnrollments" collection
    response = {
      error: false,
      code: 200,
      message: "Alice - File",
      data: testDocs[0], // Add the document found to the response
    };
    console.log("Conectado y obtenida info");
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response);
  } catch (error) {
    console.log(
      "Error al obtener documentos de la colección bobEnrollments",
      error
    );
    response = {
      error: true,
      code: 500,
      message: "Error al obtener documentos de la colección bobEnrollments",
    };
    res.header("Access-Control-Allow-Origin", "*");
    res.status(500).send(response);
  }
});

//Returns Alice grades
app.get("/grades", async (req, res) => {
  // Add Mongoose model for "aliceMarks" collection

  const Test = mongoose.model("aliceMarks", testSchema, "aliceMarks");
  try {
    const testDocs = await Test.find({}); // Find all documents in "aliceMarks" collection
    response = {
      error: false,
      code: 200,
      message: "Alice - File",
      data: testDocs, // Add the document found to the response
    };
    console.log("Conectado y obtenida info");
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response);
  } catch (error) {
    console.log(
      "Error al obtener documentos de la colección aliceMarks",
      error
    );
    response = {
      error: true,
      code: 500,
      message: "Error al obtener documentos de la colección aliceMarks",
    };
    res.header("Access-Control-Allow-Origin", "*");
    res.status(500).send(response);
  }
});

//Return the convos of a particular subject
app.get("/subject/", async (req, res) => {
  // Add Mongoose model for "aliceMarks" collection

  const Test = mongoose.model("aliceMarks", testSchema, "aliceMarks");
  try {
    const subjects = await Test.find();

    const subject = subjects.find(
      (obj) => obj.O[0].P.codAsignatura === req.query.codAsignatura
    );

    const subjectConvos = subject.O.map((item) => item.P);

    response = {
      error: false,
      code: 200,
      message: "subject - convos",
      asignatura: subjectConvos, // Add the document found to the response
    };
    console.log("Conectado y obtenida info");
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response);
  } catch (error) {
    console.log(
      "Error al obtener documentos de la colección aliceMarks",
      error
    );
    response = {
      error: true,
      code: 500,
      message: "Error al obtener documentos de la colección aliceMarks",
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
