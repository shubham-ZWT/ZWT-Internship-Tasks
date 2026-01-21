const express = require("express");
const router = express.Router();
const conn = require("../db/db.config");
const { getStockforWarehouses } = require("./warehouses.controller");

router.post("/:id/stock", getStockforWarehouses);

module.exports = router;
