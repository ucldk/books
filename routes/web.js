const express = require('express');

const Default = require('../controllers/DefaultController');
const Books = require('../controllers/BooksController');

const router = express.Router();

module.exports = () => {
  router.get('/', Default.index);
  router.get('/books', Books.index);
  router.get('/books/create', Books.createForm);
  router.post('/books/create', Books.create);
  router.get('/books/:bookId', Books.single);
  router.get('/status', (req, res) => res.sendStatus(200));
  return router;
};

