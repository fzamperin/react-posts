const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtsecret = require('../config/secret')[process.env.NODE_ENV];
const authMid = require('../middleware/auth');

const db = require('../models');

router.post('/register', async (req, res) => {
  try {
    let User = db.User.build(req.body);
    let Session;

    await User.validate();

    User.password = await bcrypt.hash(User.password, 12);

    await db.sequelize.transaction(async t => {
      await User.save({ validate: false, transaction: t });

      Session = await db.Session.create({
        token: jwt.sign({ email: User.email }, jwtsecret, { issuer: 'Alumnet-Api' }),
        UserId: User.id
      }, { transaction: t });
    });

    User.password = undefined;

    res.status(200).send({
      User: User,
      Session: Session
    })
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
});

// Create login
router.post('/login', async (req, res) => {
  try {
    const loginBody = req.body;

    let User = await db.User.findOne({
      attributes: ['id', 'email', 'password', 'firstname', 'surname'],
      where: {
        email: loginBody.email
      }
    })

    console.log('oieee');

    if(!User)
      throw Error('User does not exist');

    await bcrypt.compare(loginBody.password, User.password);

    let Session = await db.Session.create({
      token: jwt.sign({ email: loginBody.email }, jwtsecret, { issuer: 'Alumnet-Api' }),
      UserId: User.id
    });

    User.password = undefined;

    res.status(200).send({
      User: User,
      Session: Session
    })
  }
  catch(err) {
    res.status(400).send({
      message: err.message
    })
  }
});

// Posts
router.get('/posts', async (req, res, next) => {
  try {

    let Posts = await db.Post.findAll({
      include: [
        {
          model: db.User,
          required: true,
          attributes: ['firstname', 'surname', 'email']
        }
      ]
    });

    res.status(200).send(Posts)
  }
  catch(err) {
    res.status(400).send({
      message: err.message
    })
  }
})

router.post('/create/post', authMid, async (req, res) => {
  try {
    const postBody = req.body;

    let Post = db.Post.build(postBody);

    Post.UserId = req.User.id;

    await Post.save();

    res.status(200).send(Post)
  }
  catch(err) {
    res.status(400).send({
      message: err.message
    })
  }
});

router.delete('/post/:id', authMid, async (req, res) => {
  try {
    let Post = await db.Post.findOne({
      attributes: ['id'],
      where: {
        id: req.params.id,
        UserId: req.User.id
      }
    });

    await Post.destroy();

    res.status(200).send({});
  }
  catch(err) {
    res.status(400).send({
      message: err.message
    })
  }
})


module.exports = router;
