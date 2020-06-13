const express = require("express");
const path = require("path"); // Require new file

const PORT = 3000;

// Set up the Express App
const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [
  {
    name: "name",
    number: 4,
    email: "email@email.com",
    id: 123,
  },
];

const waitlist = [
  {
    name: "name",
    number: 4,
    email: "email@email.com",
    id: 123,
  },
];

// Add a root route
app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/api/tables", (req, res) => {
  return res.json(reservations);
});
app.get("/api/waitlist", (req, res) => {
  return res.json(waitlist);
});
// Create our listener
app.listen(PORT, () => console.log("Listening at PORT 3000"));

