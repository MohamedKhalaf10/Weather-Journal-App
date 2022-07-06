// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Dependencies */
// Require Body Parser to use it as a Middleware
const bodyParser = require("body-parser");

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 8000;

const server = app.listen(port, () => {
  // Callback to debug
  console.log(`running on localhost: ${port}`);
});

// GET Route to send project end point
app.get("/getData", (req, res) => {
  res.send(projectData);
});

// POST Route to store data in the project end point
app.post("/postData", (req, res) => {
  projectData = {
    date: req.body.date,
    temp: req.body.temp,
    feelings: req.body.feelings,
  };
});
