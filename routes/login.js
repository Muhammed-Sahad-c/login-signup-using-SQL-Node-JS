const express = require('express');
const router = express.Router();

const db = require('../connection/connection')
// getting login page
router.get('/', (req, res, next) => {
  res.render('../views/login.hbs', { title: 'Login' })
  // db.connection.query(`select*from user_data `, (err, data, field) => {
  //   if (err) {
  //     throw err;
  //   } else {
  //     console.log(data[0].email);
  //   }
  // })
})


router.post('/login', (req, res, next) => {
  const email = req.body.login_email
  const password = req.body.login_password
  db.connection.query(`SELECT * FROM user_data WHERE email = '${email}'`,(err,data,field)=>{
    if (err) {
          console.log(err)
        } else {
          if(data.length = 0){
            res.redirect('/')
          }else{
            res.render("../views/home.hbs",{title:'welcome home'})
          }
        }
  })
})


module.exports = router;
