var connection = require('./../config');



module.exports.previous_reports=function(req,res){
  
    var report_technician_id=req.body.report_technician_id;
    connection.query('SELECT * FROM test_reports WHERE report_technician_id=?',[report_technician_id], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            });
      }else{

console.log(results);

        
          res.json({

            previous_reports:results,
              status:true,    
            message:"Success"
          });
        
      }
    });
}