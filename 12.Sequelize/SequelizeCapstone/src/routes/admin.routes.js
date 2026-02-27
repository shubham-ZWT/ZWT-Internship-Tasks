const express = require("express");
const adminController = require("../controllers/admin.controller");
const { authorizeRoles } = require("../middlewares/auth.middleware");
const router = express.Router();

router.use(authorizeRoles("admin"));

router.get("/dashboard/inventory", adminController.inventoryData);
router.get("/dashboard/sales", adminController.salesData);

module.exports = router;
