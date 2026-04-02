const express = require("express");
require("dotenv").config();
const authRoutes = require("./routes/auth.routes");
const hrRoutes = require("./routes/hr.routes");

const {
  authMiddleware,
  authRoleMiddleware,
} = require("./middlewares/auth.middleware");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.get("/health", (req, res) => {
  console.log("ok health");

  res.status(200).json({ success: true, message: "ok from health !!" });
});

//auth routes
app.use("/api/auth", authRoutes);

app.get("/api/dashboard", authMiddleware, (req, res) => {
  console.log("Reached inside Protected Route");
  res
    .status(200)
    .json({ success: true, message: "Protected Route accessed!!" });
});

app.get(
  "/api/admin",
  authMiddleware,
  authRoleMiddleware("admin"),
  (req, res) => {
    console.log("Hello Admin");
    return res.status(200).json({ success: true, message: "Hello Admin " });
  },
);

app.use("/api/hr", hrRoutes);

app.get;

module.exports = app;
