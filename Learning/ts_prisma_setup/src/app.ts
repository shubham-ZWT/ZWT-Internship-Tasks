import "dotenv/config";
import express from "express";
import type { Request, Response } from "express";
import authRoutes from "./routes/auth.routes";
import passport from "./lib/passport";
import session from "express-session";
import path from "path";

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "default_secret",
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});

app.get("/dashboard", (req: Request, res: Response) => {
  console.log("Session ID:", req.session.id);
  res.sendFile(path.join(__dirname, "views", "dashboard.html"));
});

app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "ok" });
});

app.use("/auth", authRoutes);

export default app;
