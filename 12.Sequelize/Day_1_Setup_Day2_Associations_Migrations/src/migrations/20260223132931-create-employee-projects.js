"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("employee_projects", {
      emp_id: {
        type: Sequelize.INTEGER,
        primaryKey: true, // Composite Primary Key Part 1
        references: { model: "employees", key: "id" },
        onDelete: "CASCADE",
      },
      project_id: {
        type: Sequelize.INTEGER,
        primaryKey: true, // Composite Primary Key Part 2
        references: { model: "projects", key: "project_id" },
        onDelete: "CASCADE",
      },
      hours_worked: { type: Sequelize.INTEGER, defaultValue: 0 },
      role: { type: Sequelize.STRING },
      created_at: { allowNull: false, type: Sequelize.DATE },
      updated_at: { allowNull: false, type: Sequelize.DATE },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("employee_projects");
  },
};
