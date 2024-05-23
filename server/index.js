const express = require("express");
const cors = require("cors");

// import database connection (destruct function)
const { connectDB } = require("./config/db");

const app = express();
const port = 3000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// http://localhost:3000/
// Method : GET
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// localhost:3000/api/signup
// Method: POST
const userRoutes = require("./routes/user-route");
// prefix routes
app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`);
  // call the mongodb function
  connectDB();
});
