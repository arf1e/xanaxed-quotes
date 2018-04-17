const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quoteController');

router.get('/quote/:mood', quoteController.getQuote);

module.exports = router;