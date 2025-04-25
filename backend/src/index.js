//Testes crypto.js cmd node ./src/index

require('dotenv').config();
const crypto = require('./utils/crypto');
const encryptedHex = crypto.encrypt('123456');
const text = crypto.decrypt(encryptedHex);