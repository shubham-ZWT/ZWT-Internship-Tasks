"use strict";
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("departments", [
      {
        dept_name: "Engineering",
        location: "London",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        dept_name: "HR",
        location: "New YC",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        dept_name: "Marketing",
        location: "Delhi",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete("departments", null, {});
  },
};
