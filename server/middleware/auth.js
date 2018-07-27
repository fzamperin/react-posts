const jwt = require('jsonwebtoken');
const jwtsecret = require('../config/secret')[process.env.NODE_ENV];
const db = require('../models');

module.exports = async (req, res, next) => {
  try {
    let token = req.headers.authorization.split(' ')[1];
    if (token) {
      jwt.verify(token, jwtsecret);

      let User = await db.User.findOne({})

      if(!User)
        throw Error('Session does not exist');

      req.User = User;
    }

    next();

  } catch (err) {
    res.status(401).send({});
  }
};
