const express = require("express");
require("dotenv").config();
const authRouter = require("./auth/auth");
const authMiddlware = require("./middlewares/auth.middlewase");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("req received");
});
//auth routes
app.use("/auth", authRouter);

//protected Route
app.get("/protected", authMiddlware, (req, res) => {
  console.log("got into protected Route");
  res.status(200).json({ message: "Authenticated User" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
