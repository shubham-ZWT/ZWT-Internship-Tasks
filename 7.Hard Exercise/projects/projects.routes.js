const express = require("express");
const { addProject } = require("./projects.controller");
const router = express.Router();

router.post("/", addProject);

module.exports = router;
