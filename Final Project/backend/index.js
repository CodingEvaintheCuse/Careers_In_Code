const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const models = require("./models")();
const cors= require("cors");
models.init();

app.use(cors());

app.use(bodyParser.json());

app.get("/", (req,res) => {
    res.send ({ hello: "world"});
});
 
app.put("/user", async (req,res)=> {
    await models.User.create({ name: req.body.name})

    res.send({message: "user created"});
});

app.get("/users", async (req,res) =>{
    res.send({users: await models.User.findAll()})
})

app.listen(5000,() => {
console.log("Backend is running on port 5000")
})