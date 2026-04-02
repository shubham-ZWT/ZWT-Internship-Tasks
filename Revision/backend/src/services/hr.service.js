const { Op, where } = require("sequelize");
const { User, Post } = require("../../models");

exports.getUserdata = async (q, page = 1, limit = 2) => {
  const whereCondition = {};

  const offSet = (parseInt(page) - 1) * parseInt(limit);
  console.log("Offset is ", offSet);

  if (q) {
    whereCondition[Op.or] = [
      { name: { [Op.like]: `%${q}%` } },
      { email: { [Op.like]: `%${q}%` } },
    ];
  }

  const { count, rows } = await User.findAndCountAll({
    where: whereCondition,
    attributes: {
      exclude: ["deletedAt"],
    },
    include: [
      {
        model: Post,
        as: "posts",

        attributes: {
          exclude: ["deletedAt"],
        },
      },
    ],
    limit: parseInt(limit),
    offset: offSet,
    distinct: true,
  });

  console.log(count, rows);
  const totalPages = Math.ceil(count / parseInt(limit));
  console.log(totalPages);
  return {
    totalrecords: count,
    totalPages: totalPages,
    currentPage: parseInt(page),
    rows,
  };
};

exports.updateUserdata = async (userData) => {
  console.log(userData);
  const id = userData.id;
  console.log(id);

  const user = await User.update(userData, {
    where: {
      id: userData.id,
    },
  });
  console.log(user);

  return user;
};
