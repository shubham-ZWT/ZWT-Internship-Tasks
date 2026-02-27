const users = await User.findAll({
  attributes: {
    include: [
      [sequelize.fn("COUNT", sequelize.col("Orders.id")), "orderCount"],
    ],
  },
  include: [{ model: Order, attributes: [] }], // Attributes [] prevents fetching every order column
  group: ["User.id"],
});

const products = await Product.findAll({
  include: [{ model: Category, attributes: ["name"] }], // Only get the name
});
