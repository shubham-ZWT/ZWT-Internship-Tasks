import express from "express";
import type { Request, Response } from "express";
import { configDotenv } from "dotenv";

import authRoutes from "./modules/auth/auth.routes";
import profileRoutes from "./modules/profile/profile.routes";
import batchRoutes from "./modules/batch/batch.routes";
import collegeRoutes from "./modules/college/college.routes";
import { errorHandler, notFoundHandler } from "./lib/errorHandler";

configDotenv();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/api/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/auth", authRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/batches", batchRoutes);
app.use("/api/colleges", collegeRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
