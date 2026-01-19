const pool = require("../db/db");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;
  let connection;

  try {
    connection = await pool.getConnection();

    const [rows] = await connection.query(
      "SELECT id, email, password, role FROM users WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const user = rows[0];
    const isPasswordValid =String(password) === String(user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "User logged in successfully",
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Login failed" });
  } finally {
    if (connection) connection.release();
  }
};


const register = async (req, res) => {
  const { name, email, password } = req.body;
  let connection;

  try {
    connection = await pool.getConnection();

    await connection.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, password]
    );

    return res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ message: "Email already exists" });
    }

    console.error(error);
    return res.status(500).json({ message: "Registration failed" });
  } finally {
    if (connection) connection.release();
  }
};

module.exports = { register, login };
