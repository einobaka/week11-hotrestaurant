const express = require("express");
const path = require("path"); // Require new file
const reservations = require("./reservations");
const waitlist = require("./waitlist");

const PORT = 3000;

// Set up the Express App
const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add a root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'html', "home.html"));
});
app.get("/reserve", (req, res) => {
  res.sendFile(path.join(__dirname, 'html', "reserve.html"));
});
app.get("/tables", (req, res) => {
  res.sendFile(path.join(__dirname, 'html', "tables.html"));
});
app.get("/api/tables", (req, res) => {
  return res.json(reservations);
});
app.get("/api/waitlist", (req, res) => {
  return res.json(waitlist);
});

// Create our listener
app.listen(PORT, () => console.log("Listening at PORT 3000"));

