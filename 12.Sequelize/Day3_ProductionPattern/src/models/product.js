const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Product extends Model {
    static associate(models) {
      // Product belongs to a Category
      this.belongsTo(models.Category, {
        foreignKey: "categoryId",
        as: "category",
      });
      // Product can be in many OrderItems
      this.hasMany(models.OrderItem, {
        foreignKey: "productId",
        as: "orderItems",
      });
    }
  }

  Product.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
      stock: { type: DataTypes.INTEGER, defaultValue: 0 },
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "products",
      underscored: true,
    },
  );

  return Product;
};
