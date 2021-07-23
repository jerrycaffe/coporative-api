"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:

    */
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          id: "7ba76c3b-e7f1-4c74-96ff-e0fe38ca0ec8",
          name: "ADMIN",
          description: "Enables role to create data",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "15a7a9b7-417c-45af-a58a-612d57031f03",
          name: "USER",
          description: "Enables role to create data",
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
     *
     */
    await queryInterface.bulkDelete("Roles", null, {});
  },
};
