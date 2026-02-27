"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add CHECK constraint
    await queryInterface.addConstraint("employees", {
      fields: ["salary"],
      type: "check",
      name: "salary_check_gt_zero",
      where: { salary: { [Sequelize.Op.gt]: 0 } },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.removeConstraint("employees", "salary_check_gt_zero");
    await queryInterface.renameColumn("employees", "first_name", "firstName");
  },
};
