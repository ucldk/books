const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = 'myVerySecretKeyDontShare';

exports.isLoggedIn = async (req, res, next) => {
  try {
    if(!req.headers || !req.headers.authorization) {
      return res.status(401).json({
        status: 401,
        message: 'Missing Authorization',
      });
    }

    const token = req.headers.authorization.split(' ')[1];

    const tokenUnpacked = jwt.verify(token, secret);
    if(!tokenUnpacked.id || !tokenUnpacked.email) {
      throw('invalid-token');
    }

    const user = await User.findOne({ where: {
      id: tokenUnpacked.id,
      email: tokenUnpacked.email,
    }});

    if(!user || !user.id) {
      throw('user-not-found');
    }

    next();
  } catch (e) {
    console.error(e);
    return res.status(401).send({
      status: 401,
      message: 'You are not logged in',
    });
  }
};
