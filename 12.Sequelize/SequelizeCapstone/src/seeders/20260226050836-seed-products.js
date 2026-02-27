"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Smartphone",
          price: 10000,
          stock: 50,
          category_id: 1,
          average_rating: 4.5,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          name: "Gaming Laptop",
          price: 1500.0,
          stock: 3,
          category_id: 1,
          average_rating: 4.8,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          name: "Leather Jacket",
          price: 120.0,
          stock: 15,
          category_id: 2,
          average_rating: 4.2,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          name: "Coffee Maker",
          price: 45.5,
          stock: 0,
          category_id: 3,
          average_rating: 3.9,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          name: "Sequelize Masterclass",
          price: 29.99,
          stock: 100,
          category_id: 4,
          average_rating: 5.0,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
