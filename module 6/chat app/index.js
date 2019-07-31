const express = require("express");
const app = express();

const bodyparser = require("body-parser");
const moment = require("moment");

let messages = [];

app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.put("/send", (req, res) => {
  messages.push({
    name: req.body.name,
    message: req.body.message,
    timestamp: new Date()
  });

  console.log(messages);

  res.send({ status: "ok" });
});

app.get("/receive", (req, res) => {
  res.send({ messages: messages });
});

app.listen( 8081, "127.0.0.1" , ()=>{
  console.log("Server is running");
});
