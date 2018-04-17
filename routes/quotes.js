const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('homePage'));

router.get('/quote', (req, res) => res.render('quotePage', { quote: [
  'И рядом на коленях у Петра сыночек',
  'Такой близкий и родной (Родной)',
  'Близкий и родной!',
  'Близкий и родной (Ой-йо-йой)'
]}));

router.get('/about', function(req, res) {
  res.send('About us');
});


module.exports = router;
