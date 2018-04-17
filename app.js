const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// вью энжин
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

module.exports = app;