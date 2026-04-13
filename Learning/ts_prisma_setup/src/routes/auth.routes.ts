import { Router } from "express";
import passport from "../lib/passport";

const router = Router();

// Google OAuth routes
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

// Google OAuth callback route -- handles the response from Google after authentication
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/auth/failure" }),
  (req, res) => {
    res.redirect("/dashboard");
  },
);

router.get("/failure", (_req, res) => {
  res.status(401).json({ message: "Authentication failed" });
});

router.get("/logout", (req, res) => {
  req.logout(() => res.redirect("/"));
});

export default router;
