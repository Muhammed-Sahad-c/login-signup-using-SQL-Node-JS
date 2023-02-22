
const db = require('../connection/connection')
module.exports = {



    signupDataHandling: (mail, password, repassword) => {
        return new Promise((resolve, reject) => {
            if (password == repassword) {
                db.connection.query(`SELECT * FROM user_data WHERE email = '${mail}'`, (err, data, field) => {
                    if (err) {
                        console.log(err)
                    } else {
                        if (data.length == 0) {
                            db.connection.query(`INSERT INTO user_data(email , password , re_password) VALUE ('${mail}','${password}','${repassword}')`, (err, data, field) => {
                                if (err) {
                                    console.log(err)
                                } else {
                                    resolve(true)
                                }
                            })
                        } else {
                            resolve(false)
                        }
                    }
                })
            } else {
                resolve(false)
            }
        })
    },

    loginValidation: (mail, password) => {
        return new Promise((resolve, reject) => {
            db.connection.query(`SELECT * FROM user_data WHERE email = '${mail}' AND password = '${password}'`, (err, data, field) => {
                if (!err) {
                    if (data.length == 0) {
                        resolve(false)
                    } else {
                        resolve(true)
                    }
                } else {
                   resolve(false)
                }
                
            })
        })
    },


}