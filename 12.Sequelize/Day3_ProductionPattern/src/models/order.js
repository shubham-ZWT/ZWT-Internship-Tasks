const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Order extends Model {
    static associate(models) {
      // Order belongs to a User
      this.belongsTo(models.User, { foreignKey: "userId", as: "customer" });
      // Order has many OrderItems
      this.hasMany(models.OrderItem, { foreignKey: "orderId", as: "items" });
    }
  }

  Order.init(
    {
      totalAmount: { type: DataTypes.DECIMAL(10, 2), field: "total_amount" },
      status: {
        type: DataTypes.ENUM("pending", "completed", "cancelled"),
        defaultValue: "pending",
      },
    },
    {
      sequelize,
      modelName: "Order",
      tableName: "orders",
      underscored: true,
    },
  );

  return Order;
};
