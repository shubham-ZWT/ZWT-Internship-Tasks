"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Electronics",
          description: "Gadgets and devices",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Fashion",
          description: "Clothing and accessories",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Home & Kitchen",
          description: "Appliances and decor",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Books",
          description: "Educational and fiction",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
