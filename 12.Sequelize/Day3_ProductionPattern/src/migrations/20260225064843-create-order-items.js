"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("order_items", {
      id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      order_id: {
        type: Sequelize.INTEGER,
        references: { model: "orders", key: "id" },
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: { model: "products", key: "id" },
      },
      quantity: { type: Sequelize.INTEGER, allowNotNull: false },
      price_at_purchase: { type: Sequelize.DECIMAL(10, 2) },
      created_at: { allowNull: false, type: Sequelize.DATE },
      updated_at: { allowNull: false, type: Sequelize.DATE },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("order_items");
  },
};
