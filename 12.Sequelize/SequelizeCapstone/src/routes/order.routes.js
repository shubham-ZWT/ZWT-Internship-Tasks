const express = require("express");
const orderController = require("../controllers/order.controller");
const router = express.Router();

router.post("/", orderController.placeOrder);

module.exports = router;
