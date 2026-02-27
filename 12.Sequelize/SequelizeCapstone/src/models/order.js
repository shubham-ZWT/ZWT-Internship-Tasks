const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Order extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId", as: "customer" });

      this.hasMany(models.OrderItem, { foreignKey: "orderId", as: "items" });
      this.hasOne(models.Payment, { foreignKey: "orderId", as: "payment" });
    }
  }

  Order.init(
    {
      totalAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        field: "total_amount",
      },
      status: {
        type: DataTypes.ENUM("pending", "paid", "shipped", "cancelled"),
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
