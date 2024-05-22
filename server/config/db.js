const mongoose = require("mongoose");

exports.connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://785338sm:SCkc7zxgxslishra@cluster0.wfhmgtx.mongodb.net/lms"
    )
    .then(() => console.log("Database connected successfully!"))
    .catch((error) => {
      console.log("Database connection failed!");
      console.log(error);
      process.exit(1);
    });
};
