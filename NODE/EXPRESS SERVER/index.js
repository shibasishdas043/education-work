const express = require("express");
//create an express app by calling the express function
const app = express();
const PORT = 3000;

app.get("/", function (request, response) {
  response.send("Welcome to get ");
});

app.post("/home", function (request, response) {
  response.send("Welcome to home ");
});

app.listen(PORT, function exec() {
  console.log("Started");
});
