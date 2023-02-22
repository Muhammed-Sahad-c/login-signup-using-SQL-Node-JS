const express = require('express');
const router = express.Router();

const db = require('../connection/connection')
const helper = require('../model/helper')


router.get('/signup', (req, res, next) => {
  res.render('../views/signup.hbs', { title: 'Sign UP' })
})


router.post('/signupData', async (req, res, next) => {
  const mail = req.body.signup_email;
  const password = req.body.signup_password;
  const repassword = req.body.signupre_password;

  const data = await helper.signupDataHandling(mail, password, repassword);
   

})


router.get('/home',(req,res,next)=>{
  res.render('../views/home.hbs');
})
module.exports = router;
