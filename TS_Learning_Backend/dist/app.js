import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.get("/health", (req, res) => {
  console.log(req.path);
  res.status(200).json({ status: "ok" });
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
