const express = require('express');

const User = require('../controllers/UserController');
const AuthMiddleware = require('../middlewares/AuthMiddleware.js');

const router = express.Router();

module.exports = () => {
  router.post('/signup', User.signup);
  router.post('/signin', User.signin);
  router.get('/users', AuthMiddleware.isLoggedIn, User.list);
  return router;
};
