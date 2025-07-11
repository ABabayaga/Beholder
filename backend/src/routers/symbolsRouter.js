const express = require('express');
const router = express.Router();
const symbolsController = require('../controllers/symbolsController');

router.patch('/:symbol', symbolsController.updateSymbol);

router.get('/:symbol', symbolsController.getSymbol);

router.get('/', symbolsController.getSymbols);

router.post('/sync', symbolsController.syncSymbols);

module.exports = router;