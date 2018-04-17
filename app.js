const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

// вью энжин
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/', routes);


module.exports = app;