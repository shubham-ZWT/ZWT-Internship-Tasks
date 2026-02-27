"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Refund extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Order, {
        foreignKey: "orderId",
      });
    }
  }
  Refund.init(
    {
      orderId: DataTypes.INTEGER,
      amount: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "Refund",
    },
  );
  return Refund;
};
