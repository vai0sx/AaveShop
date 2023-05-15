const User = require("../models/user");

async function createUser(req, res) {
  try {
    const { email, password } = req.body;
    const user = new User({ email, password });
    await user.save();

    res.status(201).json({ message: "User created" });
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
}

module.exports = {
  createUser,
};
