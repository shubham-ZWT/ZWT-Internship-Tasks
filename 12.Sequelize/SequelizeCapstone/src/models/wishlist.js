const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Wishlist extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId", as: "user" });
      this.belongsTo(models.Product, {
        foreignKey: "productId",
        as: "product",
      });
    }
  }

  Wishlist.init(
    {},
    {
      sequelize,
      modelName: "Wishlist",
      tableName: "wishlists",
      underscored: true,
    },
  );

  return Wishlist;
};
