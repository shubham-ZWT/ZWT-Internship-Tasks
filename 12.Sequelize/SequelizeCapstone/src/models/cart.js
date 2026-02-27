const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Cart extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId", as: "user" });
      this.belongsTo(models.Product, {
        foreignKey: "productId",
        as: "product",
      });
    }
  }

  Cart.init(
    {
      quantity: { type: DataTypes.INTEGER, defaultValue: 1, allowNull: false },
    },
    {
      sequelize,
      modelName: "Cart",
      tableName: "carts",
      underscored: true,
    },
  );

  return Cart;
};
