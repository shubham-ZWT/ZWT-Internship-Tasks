const express = require("express");
const hrController = require("../controllers/hr.controller");

const router = express.Router();

router.get("/", hrController.getHrDashboardData);

router.post("/:userId", hrController.updateUser);

module.exports = router;
