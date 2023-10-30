

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Вася',
      password: '261',
      email: "fdgdfg@mail.ru",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Дима',
      password: '558',
      email: "fdg43w3@mail.ru",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Катя',
      password: '223',
      email: "dfdfgd@mail.ru",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
