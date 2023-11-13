const { Book } = require('../models');

exports.index = async (req, res) => {
  try {
    const books = await Book.findAll();
    return res.render('pages/books', { books: books });
  } catch (e) {
    console.log(e);
    return res.send('Error');
  }
};

exports.single = async (req, res) => {
  try {
    const book = await Book.findOne({ where: { id: Number(req.params.bookId) }});
    return res.render('pages/bookSingle', {
      book: book,
    });
  } catch (e) {
    console.log(e);
    return res.send('Error');
  }
};

exports.createForm = (req, res) => {
  return res.render('pages/bookCreate');
};

exports.create = async (req, res) => {
  try {
    const { title, author, description } = req.body;
    const book = await Book.create({ title, author, description });
    return res.render('pages/bookCreate');
  } catch (e) {
    console.log(e);
    return res.send('Error');
  }
};
