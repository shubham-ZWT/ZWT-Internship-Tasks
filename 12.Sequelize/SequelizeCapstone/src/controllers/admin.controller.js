const { getInventoryData, getSalesData } = require("../services/admin.service");

exports.inventoryData = async (req, res) => {
  console.log("admin//inventory route");

  const data = await getInventoryData();
  res.status(200).json({ success: true, data: data });
};

exports.salesData = async (req, res) => {
  console.log("sales Data");
  const salesData = await getSalesData();
  res.status(200).json({ success: true, data: salesData });
};
