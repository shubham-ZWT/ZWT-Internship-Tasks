const { Product, Category, Review, Sequelize } = require("../models");
const { Op } = Sequelize;

exports.getProducts = async (queryParams) => {
  const {
    search,
    categoryId,
    minPrice,
    maxPrice,
    page = 1,
    limit = 10,
    sortBy = "id",
    sortOrder = "DESC",
  } = queryParams;

  const offset = (page - 1) * limit;
  const where = {};

  if (search) where.name = { [Op.like]: `%${search}%` };
  if (categoryId) where.categoryId = categoryId;
  if (minPrice || maxPrice) {
    where.price = {};
    if (minPrice) where.price[Op.gte] = minPrice;
    if (maxPrice) where.price[Op.lte] = maxPrice;
  }

  const totalItems = await Product.count({ where });

  const rows = await Product.findAll({
    where,
    limit: parseInt(limit),
    offset: parseInt(offset),
    order: [[sortBy, sortOrder]],
    attributes: {
      include: [
        [
          Sequelize.literal(`(
            SELECT AVG(rating)
            FROM reviews AS review
            WHERE review.product_id = Product.id
          )`),
          "avgRating",
        ],
      ],
    },
    include: [
      {
        model: Category,
        as: "category",
        attributes: ["name"],
      },
    ],
  });

  return {
    totalItems,
    totalPages: Math.ceil(totalItems / limit),
    currentPage: parseInt(page),
    products: rows,
  };
};
