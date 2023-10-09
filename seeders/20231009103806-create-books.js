'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'The Hot Zone',
        author: 'Richard Preston',
        description: 'A Terrifying True Story is a best-selling 1994 nonfiction thriller by Richard Preston about the origins and incidents involving viral hemorrhagic fevers, particularly ebolaviruses and marburgviruses.[1][2] The basis of the book was Preston\'s 1992 New Yorker article "Crisis in the Hot Zone".',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
