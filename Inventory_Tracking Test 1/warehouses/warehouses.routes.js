const express = require("express");
const router = express.Router();
const conn = require("../db/db.config");
const { getStockforWarehouses,getAllWarehouses } = require("./warehouses.controller");

router.get("/:id/stock", getStockforWarehouses);
router.get("/",getAllWarehouses)

module.exports = router;
