const { data } = require("react-router-dom");
const { createOrder } = require("../services/order.service");

exports.placeOrder = async (req, res) => {
  console.log("Placing Order");
  const { items } = req.body;
  console.log(req.user.id, items);
  const order = await createOrder(req.user.id, items);

  res.status(200).json({ success: true, data: order });
};
