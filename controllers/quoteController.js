const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Quote = mongoose.model('Quote');


exports.getQuote = async(req, res) => {
  const mood = req.params.mood;
  const aggregate = await Quote.aggregate(
    [
      {$match: { mood }},
      {$sample: { size: 1 }}
    ]
  );
  const quote = aggregate[0];
  res.redirect(`/quote/view/${quote._id}`);
};

exports.renderQuotePage = async (req, res) => {
  const quote = await Quote.findOne({ _id: req.params.id });
  res.render('quotePage', { quote: quote.text.split('\n') });
}

// /quote/:id

exports.postQuote = async(req, res) => {
  const {mood, text} = req.body;
  const newQuote = new Quote({ mood, text });

  await newQuote.save();

  res.json('С нами Крым ебты!')
};
