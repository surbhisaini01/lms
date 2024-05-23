const User = require("../models/user-model");

// Signup controller for registration users.
exports.signUp = async (req, res) => {
  try {
    // Destructure fields from the request body
    const { fullName, email, password } = req.body;

    const user = await User.create({ fullName, email, password });

    return res
      .status(200)
      .json({ success: true, message: "User created successfully", user });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
    });
  }
};
