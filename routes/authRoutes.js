const express = require("express");
const {
  loginOrRegister,
  logoutUser
} = require("../controllers/authController");

const router = express.Router();


router.post("/login", loginOrRegister);
router.post("/logout", logoutUser);

module.exports = router;
