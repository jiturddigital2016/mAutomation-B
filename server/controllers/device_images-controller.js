var connection = require('./../config');
var fs = require("fs");


module.exports.device_images_details=function(req,res){
  
    
    connection.query('SELECT * FROM device_images', function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            });
      }else{

console.log(results);

        
          res.json({

            device_images_details:results,
              status:true,    
            message:"Successfully"
          });
        
      }
    });
}




// module.exports.device_images_register=function(req,res){

// var image=req.body.image_name;

//   var imag_name= fs.readFileSync(image);
  
    
//     connection.query('INSERT INTO image(image_name) VALUES(?)', [imag_name], function (error, results, fields) {
//       if (error) {
//           res.json({
//             status:false,
//             message:'there are some error with query'
//             });
//       }else{

// console.log(results);

        
//           res.json({

//             device_images_details:results,
//               status:true,    
//             message:"Successfully"
//           });
        
//       }
//     });
// }








module.exports.device_images_register=function(req,res){
  message = '';
  
      var post  = req.body;
      var device_name= post.device_name;
      var os_type= post.os_type;
      var os_version= post.os_version;
      var filters= post.filters;
      var image_enabled= post.image_enabled;
      var admin_id=post.admin_id;
      var technician_id=post.technician_id;

var crypto                          = require('crypto');
        var seed                            = crypto.randomBytes(5);
        var uniqueSHA1String                = crypto
                                               .createHash('sha1')
                                                .update(seed)
                                                 .digest('hex');


if (post.admin_id == undefined) {
if (!req.files)
       {
        //return res.status(400).send('No files were uploaded.');
res.json({

            
              status:false,    
            message:"No file is uploaded"
          });
return;
}
    var file = req.files.image_name;

    console.log(file);
    var img_name=new Date()+file.name;

       if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){
                                 
              file.mv('server/public/images/'+new Date()+file.name, function(err) {
                             
                if (err)

                  return res.status(500).send(err);

                
              //var sql = "INSERT INTO 'device_images'('device_name','os_type','os_version','filters' ,'image_name','image_enabled','admin_id') VALUES ('"+device_name+"','"+os_type+"','"+os_version+"','"+filters+"','"+img_name+"','"+image_enabled+"','"+admin_id+"')";


               connection.query('INSERT INTO device_images(device_name,os_type,os_version,filters ,image_name,image_enabled,technician_id) VALUES (?,?,?,?,?,?,?)',[device_name,os_type,os_version,filters,img_name,image_enabled,technician_id], function(err, result) {
                   //res.redirect('profile/'+result.insertId);


 res.json({

            
              status:true,    
            message:"device successfully register"
          });


                });
             });
          } else {
           
            res.json({

            
              status:false,    
             message:"This format is not allowed , please upload file with '.png','.gif','.jpg'"
          });
          }

}
else
{





    if (!req.files)
       {
        //return res.status(400).send('No files were uploaded.');
res.json({

            
              status:false,    
            message:"No file is uploaded"
          });
return;
}

    var file = req.files.image_name;

    console.log(file);
    var img_name=new Date()+file.name;

       if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){
                                 
              file.mv('server/public/images/'+new Date()+file.name, function(err) {
                             
                if (err)

                  return res.status(500).send(err);

                
              //var sql = "INSERT INTO 'device_images'('device_name','os_type','os_version','filters' ,'image_name','image_enabled','admin_id') VALUES ('"+device_name+"','"+os_type+"','"+os_version+"','"+filters+"','"+img_name+"','"+image_enabled+"','"+admin_id+"')";


               connection.query('INSERT INTO device_images(device_name,os_type,os_version,filters ,image_name,image_enabled,admin_id) VALUES (?,?,?,?,?,?,?)',[device_name,os_type,os_version,filters,img_name,image_enabled,admin_id], function(err, result) {
                   //res.redirect('profile/'+result.insertId);


 res.json({

            
              status:true,    
            message:"device successfully register"
          });


                });
             });
          } else {
           
            res.json({

            
              status:false,    
             message:"This format is not allowed , please upload file with '.png','.gif','.jpg'"
          });
          }
}
}






module.exports.device_images_edit=function(req,res){
  message = '';
  
      var post  = req.body;
      var device_name= post.device_name;
      var os_type= post.os_type;
      var os_version= post.os_version;
      var filters= post.filters;
      var image_enabled= post.image_enabled;
      var admin_id=post.admin_id;
      var technician_id=post.technician_id;
      var device_image_id=post.device_image_id;


if (!req.files)
{
        //return res.status(400).send('No files were uploaded.');
connection.query('UPDATE device_images SET device_name =?, os_type =?, os_version =?, filters =?,image_enabled=? WHERE device_image_id = ?',[device_name, os_type, os_version, filters, image_enabled,device_image_id], function(err, result) {
                   //res.redirect('profile/'+result.insertId);


 res.json({

            
              status:true,    
            message:"Successfully"
          });


                });
return;
}

    var file = req.files.image_name;

    console.log(file);
    var img_name=file.name;

       if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){
                                 
              file.mv('server/public/images/'+file.name, function(err) {
                             
                if (err)

                  return res.status(500).send(err);

                
              //var sql = "INSERT INTO 'device_images'('device_name','os_type','os_version','filters' ,'image_name','image_enabled','admin_id') VALUES ('"+device_name+"','"+os_type+"','"+os_version+"','"+filters+"','"+img_name+"','"+image_enabled+"','"+admin_id+"')";

                          
               connection.query('UPDATE device_images SET device_name =?, os_type =?, os_version =?, filters =?, image_name =?,image_enabled=? WHERE device_image_id = ?',[device_name, os_type, os_version, filters, img_name, image_enabled,device_image_id], function(err, result) {
                   //res.redirect('profile/'+result.insertId);


 res.json({

            
              status:true,    
            message:"Successfully"
          });


                });
             });
          } else {
           
            res.json({

            
              status:false,    
             message:"This format is not allowed , please upload file with '.png','.gif','.jpg'"
          });
          }



}



   

