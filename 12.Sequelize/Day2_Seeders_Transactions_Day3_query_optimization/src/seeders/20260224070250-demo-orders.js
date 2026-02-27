"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Orders", [
      {
        userId: 1,
        status: "PLACED",
        totalAmount: 83000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        status: "PLACED",
        totalAmount: 50000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Orders", null, {});
  },
};
