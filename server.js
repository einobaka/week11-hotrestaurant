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

// POST
app.post("/", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  let reservations = req.body;
  reservations.name = parseInt(reservations.name);

  let waitlist = req.body;
  waitlist.name = parseInt(waitlist.name);

  console.log(reservations);

  // We then add the json the user sent to the character array
  reservations.push(reservations);
  waitlist.push(waitlist);

  // We then display the JSON to the users
  res.json(reservations);
  res.json(waitlist);
});
