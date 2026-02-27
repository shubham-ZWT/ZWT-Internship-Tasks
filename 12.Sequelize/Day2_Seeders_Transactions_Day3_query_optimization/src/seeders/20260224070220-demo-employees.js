"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Employees", [
      {
        name: "Rahul",
        salary: 60000,
        departmentId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Priya",
        salary: 45000,
        departmentId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Employees", null, {});
  },
};
