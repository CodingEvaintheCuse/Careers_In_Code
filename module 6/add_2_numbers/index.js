const express = require ("express");
const app = express ();

app.get("/", (req, res)=>{
    res.send({hello: "world"});
});


//add/:num1 (whole thing route, num1 & num2 route params)
app.get("/add/:num1/:num2", (req, res)=>{
    res.send({sum: parseInt(req.params.num1) 
      + parseInt(req.params.num2)});
 });

 app.listen(8080, "127.0.0.1", ()=>{
    
});
console.log("Server is running");