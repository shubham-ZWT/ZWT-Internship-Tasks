const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class OrderItem extends Model {
    static associate(models) {
      // Links back to the parent order
      this.belongsTo(models.Order, { foreignKey: "orderId" });

      // Links to the product being bought
      this.belongsTo(models.Product, {
        foreignKey: "productId",
        as: "product",
      });
    }
  }

  OrderItem.init(
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      priceAtPurchase: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
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
