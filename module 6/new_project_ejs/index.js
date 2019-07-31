const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render(__dirname + "/index.ejs", {
    cars: ["Toyota", "Honda", "Ford", "GMC"],
    models: [
      { manu: "Toyota", model: "Camry" },
      { manu: "Honda", model: "CRV" }
    ]
  });
});

app.listen(8081, "0.0.0.0", () => {
  console.log("Server is running");
});