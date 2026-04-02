"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("posts", [
      {
        id: 1,
        title: "First Post",
        content: "Content for First Post",
        userId: 1,
        createdAt: "01:01:01",
        updatedAt: "01:01:01",
      },
      {
        id: 2,
        title: "Second Post",
        content: "Content for Second Post",
        userId: 2,
        createdAt: "01:01:01",
        updatedAt: "01:01:01",
      },
      {
        id: 3,
        title: "Third Post",
        content: "Content for Third Post",
        userId: 3,
        createdAt: "01:01:01",
        updatedAt: "01:01:01",
      },
      {
        id: 4,
        title: "Fourth Post",
        content: "Content for Fourth Post",
        userId: 1,
        createdAt: "01:01:01",
        updatedAt: "01:01:01",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("posts", null, {});
  },
};
