"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "RolePermissions",
      [
        {
          // id: "7ba76c3b-e7f1-4c74-96ff-e0fe38ca0ed5",
          permissionId: "9b751965-1952-4521-8dc4-541335b92f45",
          roleId: "7ba76c3b-e7f1-4c74-96ff-e0fe38ca0ec8",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: "8f8bd248-b31c-4edb-81ce-ed5c79c5a14e",
          permissionId: "090c892f-757f-408c-92ca-78bf29e9f4dd",
          roleId: "15a7a9b7-417c-45af-a58a-612d57031f03",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete("RolePermissions", null, {});
  },
};
