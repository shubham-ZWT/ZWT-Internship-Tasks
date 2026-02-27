const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Category extends Model {
    static associate(models) {
      this.hasMany(models.Product, {
        foreignKey: "categoryId",
        as: "products",
      });
    }
  }

  Category.init(
    {
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Category",
      tableName: "categories",
      underscored: true,

      defaultScope: {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      },
    },
  );

  return Category;
};
