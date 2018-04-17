const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const quoteSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: 'Нужен ксанакс'
  },
  tag: {
    type: String
  }
});

module.exports = mongoose.model('Quote', quoteSchema);