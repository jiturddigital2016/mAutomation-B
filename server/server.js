'use strict';
let app = require('express')();
let bodyParser = require('body-parser');
let http = require('http').Server(app);
let io = require('socket.io')(http);

let usbDetect = require('usb-detection');
var authenticateController=require('./controllers/authenticate-controller');
var RegisterController=require('./controllers/Register-controller');
var editpasswordController=require('./controllers/edit_password-controller');
var clientdetailsController=require('./controllers/client_details-controller');
var techniciandetailsController=require('./controllers/technicians_details-controller');

var sitedetailsController=require('./controllers/site_details-controller');
var testsuitesController=require('./controllers/testsuites-controller');

var deviceimagesController=require('./controllers/device_images-controller');

var previousReportsController=require('./controllers/previous_report-controller');


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

app.post('/api/authenticate', authenticateController.authenticate);

app.post('/api/authenticate123', authenticateController.authenticate123);

app.get('/api/authenticate1234', RegisterController.authenticate1234);

app.post('/api/editpassword', editpasswordController.editpassword);

app.get('/api/client_details', clientdetailsController.client_details);

app.get('/api/technician_details', techniciandetailsController.technician_details);

app.get('/api/site_details', sitedetailsController.site_details);

app.post('/api/site_register', sitedetailsController.site_register);

app.post('/api/client_register', clientdetailsController.client_register);

app.post('/api/technician_register', techniciandetailsController.technician_register);

app.post('/api/edit_client', clientdetailsController.edit_client);
app.post('/api/edit_site', sitedetailsController.edit_site);

app.post('/api/edit_technician', techniciandetailsController.edit_technician);

app.post('/api/testsuites_register', testsuitesController.testsuites_register);

app.post('/api/testsuites_details', testsuitesController.testsuites_details);

app.get('/api/device_images_details', deviceimagesController.device_images_details);

app.post('/api/previous_reports', previousReportsController.previous_reports);



http.listen(3000, () => {
  console.log('started on port 3000');
});
