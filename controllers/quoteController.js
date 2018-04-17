const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Quote = mongoose.model('Quote');


exports.getQuote = async(req, res) => {
  const mood = req.params.mood;
  const quote = await Quote.aggregate(
    [
      {$match: { mood }},
      {$sample: { size: 1 }}
    ]
  );
  // todo квот должен быть не массивом сука
  res.render('quotePage', { quote: quote[0].text.split('\n') })
};
