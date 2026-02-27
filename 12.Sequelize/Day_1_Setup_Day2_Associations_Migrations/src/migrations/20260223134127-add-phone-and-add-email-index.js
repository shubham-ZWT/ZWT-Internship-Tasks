"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add Column
    await queryInterface.addColumn("employees", "phone_number", {
      type: Sequelize.STRING,
      allowNull: true,
    });
    // Add Index
    await queryInterface.addIndex("employees", ["email"], {
      name: "employees_email_idx",
      unique: true,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.removeIndex("employees", "employees_email_idx");
    await queryInterface.removeColumn("employees", "phone_number");
  },
};
