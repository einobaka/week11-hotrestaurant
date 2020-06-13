const express = require("express");
const path = require("path"); // Require new file

const PORT = 3000;

// Set up the Express App
const app = express();

const reservations = [
  {
    name: "",
    number: 4,
    time: "cookies",
  },
  {
    name: "",
    number: 26,
    time: "Potato",
  },
  {
    name: "",
    number: 25,
    time: "Steak",
  },
  {
    name: "",
    number: 38,
    time: "cookies",
  },
  {
    name: "",
    number: 38,
    time: "cookies",
  },
];

// Add a root route
app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/api", (req, res) => {
  res.sendFile(path.join(_dirname, "views", "Hello")); // Require this new api file from api.html
});
app.get("/api/reservations", (req, res) => {
  const out = new Response(students);
  res.json(out);
  res.json(students); // Add a new path here for our students array and adding another endpoint
});
app.get("/api/reservations", (req, res) => {
  const { name } = req.query;
  res.send(reservations); // Query parameters here to get one specific name when we type that name in the url of the server
});
// Create our listener
app.listen(PORT, () => console.log("Listening at PORT 3000"));

// Install a dev dependency - npm i --save

// In package.JSON file, insert: "start": "nodemon index.js,"
// nodemon is cool because it is watching the server

// npm start

// npm run start

// Node mon is running node and setting a watcher on all files
