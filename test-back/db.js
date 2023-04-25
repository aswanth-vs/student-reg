const mongoose = require("mongoose");

//defining connection between MongoDB and Express
//localhost will not work in Node v18
mongoose.connect("mongodb://127.0.0.1:27017/test").then(() => {
  console.log("Connected to the Database");
});

//Create a model/schema to store data
const User = mongoose.model("User", {
  firstName: String,
  lastName: String,
  address: String,
  email: String,
  mobile: Number,
  dob: String,
  course: String,
  gender: String,
});

//export collection
module.exports = {
  User,
};
