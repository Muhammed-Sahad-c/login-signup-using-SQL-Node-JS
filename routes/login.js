const express = require('express');
const router = express.Router();

const db = require('../connection/connection')
const helper = require('../model/helper');



// getting login page
router.get('/', (req, res, next) => {
  res.render('../views/login.hbs', { title: 'Login' })
})


router.post('/login',async (req, res, next) => {
  
  res.json(true)
  // const loggin = await helper.loginValidation(email,password);
})


 

 
module.exports = router;
