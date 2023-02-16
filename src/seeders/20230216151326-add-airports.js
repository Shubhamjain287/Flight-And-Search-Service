'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports',[
      {
        name : "Devi Ahiliya Bai Airport Indore",
        cityId: 1,
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        name : "Indira Gandhi Airport",
        cityId: 3,
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        name : "Shubham International Airport",
        cityId: 1,
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        name : "Manguluru International Airport",
        cityId: 1,
        createdAt : new Date(),
        updatedAt: new Date()
      },
      {
        name : "Jain International Airport",
        cityId: 6,
        createdAt : new Date(),
        updatedAt: new Date()
      }
    ],{});

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
