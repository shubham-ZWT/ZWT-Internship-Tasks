const express = require("express");
const router = express.Router();
const { placeOrders, getOrders, cancelOrders } = require("./orders.controller");

router.get("/", getOrders);
router.post("/", placeOrders);
router.put("/:id/cancel", cancelOrders);

module.exports = router;
