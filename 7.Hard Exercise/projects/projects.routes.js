const express = require("express");
const { addProject, bulkAssign } = require("./projects.controller");
const router = express.Router();

router.post("/", addProject);
router.post("/bulk-assign",bulkAssign)

module.exports = router;
