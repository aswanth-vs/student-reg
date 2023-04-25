//import db.js
const db = require("./db");

//register
const register = (firstName, lastName, address, email, mobile, dob, course, gender) => {
  //logic to solve register(acno,uname,psswd)
  console.log("Inside register logic");
  return db.User.findOne({
    firstName,
    lastName,
  }).then((response) => {
    console.log(response);
    if (response) {
      return {
        statusCode: 401,
        message: "Account already exists",
      };
    } else {
      const newUser = new db.User({
        firstName,
        lastName,
        address,
        email,
        mobile,
        dob,
        course,
        gender,
      });

      newUser.save();
      return {
        statusCode: 200,
        message: "Registration Successfull",
      };
    }
  });
};

const displayAll = () => {
  return db.User.find().then((result) => {
    if (result) {
      return {
        statusCode: 200,
        message: "Success...",
        data: result,
      };
    } else {
      return {
        statusCode: 404,
        message: "Invalid account",
        //sending username to client
      };
    }
  });
};

module.exports = { register, displayAll };
