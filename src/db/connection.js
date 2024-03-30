const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/webMessage")
  .then(() => {
    console.log("MongoDB Connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });
