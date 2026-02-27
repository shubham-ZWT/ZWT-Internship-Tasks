"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Composite Index on (dep_id, salary)
    await queryInterface.addIndex("employees", ["dep_id", "salary"], {
      name: "emp_dept_salary_idx",
    });
  },
  down: async (queryInterface) => {
    await queryInterface.removeIndex("employees", "emp_dept_salary_idx");
  },
};
