import express from "express";
import type { Request, Response } from "express";
import dotenv from "dotenv";
import taskRoutes from "./routes/task.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
  console.log(req.path);
  res.status(200).json({ status: "ok" });
});

// Custom routes
app.use("/api/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
