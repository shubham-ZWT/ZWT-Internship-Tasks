"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [
      {
        name: "Laptop",
        price: 80000,
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Phone",
        price: 50000,
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Headphones",
        price: 3000,
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
