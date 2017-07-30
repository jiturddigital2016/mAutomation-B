'use strict';
let app = require('express')();
let bodyParser = require('body-parser');
let http = require('http').Server(app);
let io = require('socket.io')(http);

let usbDetect = require('usb-detection');

var authenticateController=require('./controllers/authenticate-controller');

var fs = require('fs');
var adb = require('adbkit');
var client = adb.createClient();
var Promise = require('bluebird');
var readline = require('readline');
 
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());


var apk = 'Clara3scr.apk';
app.get('/devicesList', (req, res) => {
	
	client.listDevices().then(function(devices) { 
		console.log(devices);
		res.json(devices);
	})


 // client.listDevices()
 //      .then(function(devices) {
 //        return Promise.map(devices, function() {
 //          console.log(devices)
 //          return devices;
 //        })
 //      })
 //      .then(function(id) {
 //        if((JSON.stringify(id)) == '[]')
 //        {
 //            console.log("Please enable Usb Debugging option from your Android device");
 //        }
 //      })
 //      .catch(function(err) {
 //        console.error('Something went wrong:', err.stack)
 //      });


});



// socket program to add / remove devices
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



/* route to handle login */
app.post('/api/authenticate', authenticateController.authenticate);

app.get('/installApk', (req, res) => {
	var status = false;
	client.listDevices()
	  .then(function(devices) {
	    return Promise.map(devices, function(device) {
	      return client.install(device.id, apk)
	    })
	  })
	  .then(function() {
	    status = true;
	    res.json(status);
	  })
	  .catch(function(err) {
	    res.json(status);
	  })
})




http.listen(3000, () => {
  console.log('started on port 3000');
});
