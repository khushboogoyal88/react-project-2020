const express = require("express");
const app = express();
const letters = require("./db.json");

app.get("/", (req, res) => {
  res.send("Hello,world");
});

app.get("/letters", (req, res) => {
  res.send(letters);
});

app.listen(5000, function () {
  console.log(`App is listening to port 5000`);
});
