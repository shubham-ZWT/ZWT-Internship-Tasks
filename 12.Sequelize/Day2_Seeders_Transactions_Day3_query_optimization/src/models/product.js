"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.CartItem, {
        foreignKey: "productId",
        onDelete: "CASCADE",
      });

      this.hasMany(models.OrderItem, {
        foreignKey: "productId",
        onDelete: "CASCADE",
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      stock: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
      hooks: {
        beforeCreate: (product) => {
          console.log(product.name.toLowerCase());
        },
      },
    },
  );
  return Product;
};
