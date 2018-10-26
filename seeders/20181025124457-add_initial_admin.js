'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const crypto = require('crypto')
    const salt = crypto.randomBytes(256).toString('hex')
    const hash = crypto.createHmac('sha256', salt)
      .update('Admin')
      .digest('hex')
    return queryInterface.bulkInsert('Users', [{
      name: 'Admin',
      password: hash,
      role: 'Admin',
      Email: 'admin@mail.com',
      salt: salt,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Users', null, {});
  }
};