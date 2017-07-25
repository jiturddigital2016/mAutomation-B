
'use strict';
let app = require('express')();
let bodyParser = require('body-parser');
let http = require('http').Server(app);
let io = require('socket.io')(http);

let usbDetect = require('usb-detection');

let mysql = require('mysql');
 
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'clara_phone_tool'
});

connection.connect(function(err){
	if(!err) {
	    console.log("Database is connected ... nn");    
	} else {
	    console.log("Error connecting database ... nn");    
	}
});


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/devicesList', (req, res) => {
	usbDetect.find(function(err, devices) {
		if (err) {
			return res.json(err);
		}
		console.log(devices);
		res.json(devices);	
	});
});

app.get('/login', function(req, res) {
	connection.query('SELECT * from admin_login', function(err, rows, fields) {
	connection.end();
	  if (!err)
	    console.log('The solution is: ', rows);
	  else
	    console.log('Error while performing Query.');
	  });

});

io.on('connection', (socket) => {
  console.log('Connected');
  usbDetect.on('add', (device) => {
    console.log('addDevice'+device);
    io.emit('addDevice', device);   
  });

  usbDetect.on('remove', (device) => {
    console.log('Removed'+device);
    io.emit('removeDevice', device);   
  });

  socket.on('disconnect', function(){
    console.log('Disconnected');
  });
   
  
});


http.listen(3000, () => {
  console.log('started on port 3000');
});
