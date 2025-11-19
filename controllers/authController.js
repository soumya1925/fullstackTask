const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


exports.loginOrRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

   
    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) {
      return res.status(500).json({ message: "JWT secret missing" });
    }

    let user = await User.findOne({ email });

   
    if (!user) {
      const hashedPassword = await bcrypt.hash(password, 10);

      user = await User.create({
        name,
        email,
        password: hashedPassword,
      });

      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });

      return res.status(201).json({
        message: "New user created & logged in",
        token,
        user: { id: user._id, name: user.name, email: user.email },
      });
    }

 
    if (user.name !== name) {
      return res.status(400).json({ message: "Name does not match" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Incorrect password" });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });

    return res.json({
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.logoutUser = (req, res) => {
  return res.json({ message: "Logout successful" });
};
