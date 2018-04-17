const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const quoteSchema = new mongoose.Schema({
  mood: {
    type: String
  },
  text: {
    type: String,
    trim: true,
    required: 'Нужен ксанакс'
  }
});

module.exports = mongoose.model('Quote', quoteSchema);