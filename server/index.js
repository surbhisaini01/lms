const express = require("express");

// import database connection (destruct function)
const { connectDB } = require("./config/db");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`);
  // call the mongodb function
  connectDB();
});
