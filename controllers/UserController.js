const { hashSync, compareSync } = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = 'myVerySecretKeyDontShare';

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email }});

    if(!user) throw('user-not-exists');
    if(!compareSync(password, user.password)) throw('user-password-incorrect');

    const token = jwt.sign({ id: user.id, email: user.email }, secret);

    return res.status(200).json({
      status: 200,
      message: 'Logged in',
      data: {
        id:       user.id,
        email:    user.email,
        fullname: user.fullname,
        token:    token,
      },
    });
  } catch (e) {
    console.error(e);
    return res.status(401).json({
      status: 401,
      message: 'Could not login',
    });
  }
};

exports.signup = async (req, res) => {
  try {
    const { email, password, fullname } = req.body;

    const user = await User.create({
      email,
      password: hashSync(password, 10),
      fullname,
    });

    return res.status(201).json({
        status: 201,
        message: 'User created',
        data: user,
      });
  } catch (e) {
    console.error(e);
    return res.status(400).json({
      status: 400,
      message: 'Could not create user',
    });
  }
};

exports.list = async (req, res) => {
  try {
    const users = await User.findAll();

    return res.status(200).json(users);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      status: 500,
      message: 'Could not list users',
    });
  }
};
