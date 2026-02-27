const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class OrderItem extends Model {
    static associate(models) {
      // OrderItem belongs to an Order
      this.belongsTo(models.Order, { foreignKey: "orderId" });
      // OrderItem points to a Product
      this.belongsTo(models.Product, {
        foreignKey: "productId",
        as: "product",
      });
    }
  }

  OrderItem.init(
    {
      quantity: { type: DataTypes.INTEGER, allowNull: false },
      priceAtPurchase: {
        type: DataTypes.DECIMAL(10, 2),
        field: "price_at_purchase",
      },
    },
    {
      sequelize,
      modelName: "OrderItem",
      tableName: "order_items",
      underscored: true,
    },
  );

  return OrderItem;
};
