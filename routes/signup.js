const express = require('express');
const router = express.Router();

const db = require('../connection/connection')



router.get('/signup',(req,res,next)=>{
  console.log('sahad');
  res.render('../views/signup.hbs',{title:'Sign UP'})
})

module.exports = router;
