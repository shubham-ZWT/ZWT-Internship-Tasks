const express = require("express");
const { incrementSalary } = require("./department.controller");
const router = express.Router();

router.post("/:id/increment-salary", incrementSalary);

module.exports = router;
