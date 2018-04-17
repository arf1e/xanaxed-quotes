const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quoteController');

router.get('/', (req, res) => res.render('homePage'));

router.get('/quote/:mood', quoteController.getQuote);

module.exports = router;
