const mongoose = require('mongoose');


require('dotenv').config({ path: 'variables.env' });

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(`Шаурма мясо ягненка я ебал в рот ${err.message}`);
});


require('./models/Quote');


const app = require('./app');
app.set('port', process.env.PORT || 80);
const server = app.listen(app.get('port'), () => {
  console.log(`Сервер запущен → чудо нахуй: порт ${server.address().port} `);
});