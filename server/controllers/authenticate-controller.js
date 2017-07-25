var connection = require('./../config');
var bcrypt = require('bcrypt');

module.exports.authenticate=function(req,res){
    var username=req.body.username;
    var password=req.body.password;
    console.log(username);
    connection.query('SELECT * FROM admin_login WHERE username = ?',[username], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
         if(results.length >0){
            bcrypt.compare(password, results[0].password, function(err, ress) {
              console.log(ress);
                if(!ress){
                    res.json({
                      status:false,                  
                      message:"Email and password does not match"
                    });
                }else{                    
                    res.json({
                        status:true,
                        message:"Successfully Login"
                    })
                }
            });         
        }
        else{
          res.json({
              status:false,    
            message:"Email does not exits"
          });
        }
      }
    });
}