const mysql = require('mysql')


module.exports.connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
    insecureAuth: true
})