const { Model, DataTypes, fn, col } = require("sequelize");

module.exports = (sequelize) => {
  class Review extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId", as: "reviewer" });
      this.belongsTo(models.Product, {
        foreignKey: "productId",
        as: "product",
      });
    }
  }

  Review.init(
    {
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 1, max: 5 },
      },
      comment: { type: DataTypes.TEXT },
    },
    {
      sequelize,
      modelName: "Review",
      tableName: "reviews",
      underscored: true,

      // Review System implementation - Optimization so that svg is not always calculated while fetching products -- Performacne Improvement
      hooks: {
        afterCreate: async (review) => {
          const { Product, Review } = require("./index");
          const stats = await Review.findAll({
            where: { productId: review.productId },
            attributes: [[fn("AVG", col("rating")), "avgRating"]],
            raw: true,
          });

          await Product.update(
            { averageRating: stats[0].avgRating },
            { where: { id: review.productId } },
          );
        },
      },
    },
  );

  return Review;
};
