"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "userId",
      });

      this.hasMany(models.OrderItem, {
        foreignKey: "orderId",
        onDelete: "CASCADE",
      });

      this.hasOne(models.Payment, {
        foreignKey: "orderId",
        onDelete: "CASCADE",
      });

      this.hasOne(models.Refund, {
        foreignKey: "orderId",
        onDelete: "CASCADE",
      });
    }
  }
  Order.init(
    {
      userId: DataTypes.INTEGER,
      status: DataTypes.STRING,
      totalAmount: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "Order",

      defaultScope: {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      },
    },
  );
  return Order;
};
