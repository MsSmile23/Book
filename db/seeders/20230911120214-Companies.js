'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Companies', [{
      name: 'BSG',
      telephone: '7-982-565-28-95',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'AFK',
      telephone: '7-983-565-28-95',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'GDI',
      telephone: '7-985-565-28-95',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'NOD',
      telephone: '7-986-565-28-95',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Enclave-Stomp',
      telephone: '7-987-565-28-95',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'The Senate coop',
      telephone: '7-985-565-23-95',
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Umbrella',
      telephone: '7-986-565-24-95',
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Apocalypse.ink',
      telephone: '7-987-565-25-95',
      user_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Companies', null, {});
  },
};
