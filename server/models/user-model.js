const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  // Add timestamps for when the document is created and last modified
  { timestamps: true }
);
// Export the Mongoose model for the user schema, using the name "User"
module.exports = mongoose.model("User", userSchema);
