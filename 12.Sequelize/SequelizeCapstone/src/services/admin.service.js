const { fn, col, Model } = require("sequelize");
const { Product, Category, Order, User, OrderItem } = require("../models");

exports.getInventoryData = async () => {
  const data = await Product.findAll({
    include: [
      {
        model: Category,
        as: "category",
        attributes: ["id", "name", "description"],
      },
    ],
  });
  console.log(data);

  return data;
};

exports.getSalesData = async () => {
  const data = await Order.findAll({
    include: [
      {
        model: User,
        as: "customer",
        attributes: ["name"],
      },
      {
        model: OrderItem,
        as: "items",
        attributes: ["quantity"],
        include: [
          {
            model: Product,
            as: "product",
            attributes: ["name"],
          },
        ],
      },
    ],
  });

  return data;
};
