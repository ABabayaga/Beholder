'use strict';
require('dotenv').config();
const bcrypt = require('bcryptjs');
const crypto = require('../src/utils/crypto');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const defaultEmail = 'contato@alefdevops.com.br';
    const settingsId = await queryInterface.rawSelect('Settings', { where: {}, limit: 1 }, ['id']);
    if (!settingsId) {

      return queryInterface.bulkInsert('settings', [{
        email: defaultEmail,
        password: bcrypt.hashSync('123456'),
        apiUrl: 'https://testnet.binance.vision/api',
        streamUrl: 'wss://stream.testnet.binance.vision/ws',
        accessKey: 'Y61HpOJHNxVU5frmhoLtLhlJz8RVcbCySky7szEGwvIIAcfk94TTKHqmgVVtKyx7',
        secretKey: crypto.encrypt('JzN0oRSH1ooYIGNjIpgmC9tNVVflafUwjzMrCGIiS1yBv8rxI0HS7SQEb0Umydk1'),
        createdAt: new Date(),
        updatedAt: new Date()
      }])
    }
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('settings', null, {});
  }
};
