const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quoteController');

router.get('/', (req, res) => res.render('homePage'));
router.get('/quote/new', (req, res) => res.render('newQuote'));

router.get('/quote/:mood', quoteController.getQuote);
router.post('/quote', quoteController.postQuote);

module.exports = router;
