const express = require("express");

//creating a server using Express
const server = express();

//import cors
const cors = require("cors");

//import logic.js
const logic = require("./logic");

//use cors
server.use(
  cors({
    origin: "http://localhost:4200",
  })
);

//parse json content
server.use(express.json());

//setup port
server.listen(3000, () => {
  console.log("server listening on port 3000");
});

//register POST
server.post("/register", (req, res) => {
  console.log("Inside register API");
  console.log(req.body);
  //logic to solve register(acno, username, password)
  logic.register(req.body.firstName, req.body.lastName, req.body.address, req.body.email, req.body.mobile, req.body.dob, req.body.course, req.body.gender).then((result) => {
    res.status(result.statusCode).json(result);
  });
});

//Get all data d
server.get("/displayAll", (req, res) => {
  console.log("Inside getAll API");

  logic.displayAll().then((result) => {
    res.status(result.statusCode).json(result);
    console.log(result.data);
  });
});
