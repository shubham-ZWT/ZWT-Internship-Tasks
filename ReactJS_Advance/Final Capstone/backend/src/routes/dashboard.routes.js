const express = require("express");
const dashboardController = require("../controllers/dashboard.controller");
const router = express.Router();

router.get("/", dashboardController.getDashboardStats);
router.get("/reports", dashboardController.getSalaryReports);

module.exports = router;
