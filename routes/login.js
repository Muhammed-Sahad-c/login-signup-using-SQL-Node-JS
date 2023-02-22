const express = require('express');
const router = express.Router();

const db = require('../connection/connection')
const helper = require('../model/helper');



// getting login page
router.get('/', (req, res, next) => {
  res.render('../views/login.hbs', { title: 'Login' })
})


router.post('/login', async (req, res, next) => {
  const email = req.body.mail;
  const password = req.body.password;
  const loggin = await helper.loginValidation(email, password);
  console.log(loggin)
  if (loggin == true) {
    res.json(true)
  } else {
    res.json(false)
  }
})





module.exports = router;
