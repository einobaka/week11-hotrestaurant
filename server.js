const express = require("express");
const path = require("path"); // Require new file
const tables = require("./data/tables");
const waitlist = require("./data/waitlist");

const PORT = 3000;

// Set up the Express App
const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add a root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'views', "home.html"));
});
app.get("/reserve", (req, res) => {
  res.sendFile(path.join(__dirname, 'views', "reserve.html"));
});
app.get("/tables", (req, res) => {
  res.sendFile(path.join(__dirname, 'views', "tables.html"));
});
app.get("/api/tables", (req, res) => {
  return res.json(reservations);
});
app.get("/api/waitlist", (req, res) => {
  return res.json(waitlist);
});

// POST
app.post("/", function (req, res) {
  // if tablesLeft = 0 - waitlist
  const newReservation = req.body;
  if (tablesLeft === 0) {
    waitlist.push(newReservation);
  } else {
    tables.push(newReservation);
  }
  console.log(`Tables: \n${tables}`);
  console.log(`Wait List: \n${waitlist}`);
});

// Create our listener
app.listen(PORT, () => console.log("Listening at PORT 3000"));


