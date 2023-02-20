
const db = require('../connection/connection')
module.exports = {
    signupDataHandling:(mail,password,repassword) =>{
        return new Promise((resolve,reject)=>{
            if(password == repassword){
                db.connection.query(`INSERT INTO user_data(email , password , re_passwordconsole.log(mail,password,repassword)) VALUE ('${mail}','${password}','${repassword}')`,(err,data,field)=>{
                    if(err){
                        console.log(err)
                    }else{
                        console.log(data)
                    }
                })
            }else{
                resolve(false)
            }
        })
    }
}