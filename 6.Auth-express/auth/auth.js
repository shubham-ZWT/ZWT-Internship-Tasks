const express = require("express");
const { conn } = require("../db/db.config");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

conn.connect((err) => {
  if (err) {
    console.log("Failed to connect");
  } else {
    console.log("DB Connected !!");
  }
});

router.post("/register", async (req, res) => {
  console.log("req received");
  const { name, email, password } = req.body;
  console.log("data received ", name, email, password);
  const hasedPassword = await bcrypt.hash(password, 10);
  console.log("hashed password : ", hasedPassword);

  let sql = "INSERT INTO users (name,email,password) VALUES (?,?,?)";
  conn.query(sql, [name, email, hasedPassword], (err) => {
    if (err) {
      res.status(400).json({ message: "Failed to register a user" });
      console.error(err);
    } else {
      res.status(200).json({ message: "User Registered Successfully" });
    }
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let sql = "SELECT id,email,password from users where email = ?";
  conn.query(sql, [email], async (err, data) => {
    if (err) {
      res.status(400).json({ message: "Failed to log in" });
      console.error(err);
    }
    const user = [...data][0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log(isPasswordValid, "id of user ", user.id);
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    const refresh_token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    let sql = "INSERT INTO token_refresh (user_id,refresh_token) VALUES(?,?)";
    console.log(refresh_token)

    conn.query(sql, [user.id, refresh_token], (err) => {
      if (err) {
        console.error(err);
      }
    });
    console.log("Token generated : ", token);
    if (isPasswordValid) {
      res
        .status(200)
        .json({ message: "user logged in successfully", token: token });
    } else {
      res.status(400).json({ message: "Incorrect Password" });
    }
  });
});

module.exports = router;
