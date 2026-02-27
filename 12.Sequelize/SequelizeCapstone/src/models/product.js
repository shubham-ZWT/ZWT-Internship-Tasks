const { Model, DataTypes, Op } = require("sequelize");

module.exports = (sequelize) => {
  class Product extends Model {
    static associate(models) {
      this.belongsTo(models.Category, {
        foreignKey: "categoryId",
        as: "category",
      });

      this.hasMany(models.Review, { foreignKey: "productId", as: "review" });
      this.hasMany(models.OrderItem, { foreignKey: "orderId", as: "items" });
    }
  }

  Product.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
      stock: { type: DataTypes.INTEGER, defaultValue: 0 },
      averageRating: {
        type: DataTypes.DECIMAL(3, 2),
        defaultValue: 0,
        field: "average_rating",
      },
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "products",
      underscored: true,
      scopes: {
        inStock: { where: { stock: { [Op.gt]: 0 } } },
        byCategory(catId) {
          return { where: { categoryId: catId } };
        },
        priceRange(min, max) {
          return { where: { price: { [Op.between]: [min, max] } } };
        },
        search(term) {
          return { where: { name: { [Op.like]: `%${term}%` } } };
        },
      },
    },
  );

  return Product;
};
