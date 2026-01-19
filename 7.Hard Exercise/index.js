const express = require("express");
require("dotenv").config();
const departmentRoutes = require("./department/department.routes");
const projectsRoutes = require("./projects/projects.routes");
const authRoutes = require("./auth/auth.routes");
const authMiddleware = require("./Middlewares/auth.middleware");
const authorizeRoles = require("./Middlewares/role.middleware");
const rateLimit = require("express-rate-limit");

const app = express();
const PORT = process.env.PORT;

//Rate Limiter
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: "Too many onboarding attempts. Try later.",
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Ok from Home Page" });
});

app.use("/api/department", departmentRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/auth", authRoutes);

//RBAC
//Create User
app.post(
  "/employee/",
  authMiddleware,
  authorizeRoles("ADMIN", "HR"),
  (req, res) => {
    console.log("ready to add user");
    res.status(200).json({ message: "Add user" });
  }
);

//Delete Employee
app.delete(
  "/employee/:id",
  authMiddleware,
  authorizeRoles("ADMIN"),
  (req, res) => {
    console.log("Authenticated for Delete");
    res.status(200).json({ message: "delete user" });
  }
);

//Get employee Salary
app.get(
  "/employee/salary",
  authMiddleware,
  authorizeRoles("AMDIN", "HR"),
  (req, res) => {
    console.log("inside salary route");
    res.status(200).json({ message: "salary route" });
  }
);

//get self Data
app.get(
  "/employee/:id",
  authMiddleware,
  authorizeRoles("EMPLOYEE"),
  (req, res) => {
    console.log("inside self ");
    res.status(200).json({ message: "self emplooyee route" });
  }
);

console.log(typeof limiter, typeof authMiddleware, typeof authorizeRoles);

//Rate limiting a /api/employees/onboard
app.post(
  "/api/employee/onboard",
  limiter,
  authMiddleware,
  authorizeRoles("ADMIN", "HR"),
  (req, res) => {
    console.log("On onboard api");
    res.status(200).json({ message: "Ok to Onboard" });
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
