"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("AuditLogs", [
      {
        employeeId: 1,
        action: "CREATED",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employeeId: 1,
        action: "UPDATED",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("AuditLogs", null, {});
  },
};
