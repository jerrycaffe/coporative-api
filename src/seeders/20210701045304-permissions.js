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
      "Permissions",
      [
        {
          id: "0a096f14-13e5-4545-8bcd-6a4734931c62",
          name: "CAN_CREATE",
          description: "Enables role to create data",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "be47161d-6636-4974-af83-a5a3a91a4135",
          name: "CAN_EDIT",
          description: "Enables role to modify existing data",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "090c892f-757f-408c-92ca-78bf29e9f4dd",
          name: "CAN_VIEW",
          description: "Enables role to view contents",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "9b751965-1952-4521-8dc4-541335b92f45",
          name: "CAN_DELETE",
          description: "Enables role to perform delete action",
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
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Permissions", null, {});
  },
};
