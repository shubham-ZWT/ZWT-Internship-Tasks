"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("employees", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      first_name: { type: Sequelize.STRING(100), allowNull: false },
      last_name: { type: Sequelize.STRING(100), allowNull: false },
      email: { type: Sequelize.STRING, unique: true, allowNull: false },
      hire_date: { type: Sequelize.DATEONLY, allowNull: false },
      salary: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
      // Foreign Key to Department
      dep_id: {
        type: Sequelize.INTEGER,
        references: { model: "departments", key: "dep_id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      // Foreign Key for Manager (Self-reference)
      manager_id: {
        type: Sequelize.INTEGER,
        references: { model: "employees", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      created_at: { allowNull: false, type: Sequelize.DATE },
      updated_at: { allowNull: false, type: Sequelize.DATE },
      deleted_at: { type: Sequelize.DATE }, // Support for paranoid mode
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("employees");
  },
};
