'use strict';
let app = require('express')();
let bodyParser = require('body-parser');
let http = require('http').Server(app);
let io = require('socket.io')(http);

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
	
	var devicesDetailArr = [];

	client.listDevices()
	  .then(function(devices) {
	    return Promise.filter(devices, function(device) {
	      return client.getProperties(device.id)
	        .then(function(features) {
	          let deviceDetail = {};
	          
	          deviceDetail["model"] = features["ro.product.model"];
	          deviceDetail["manufacturer"] = features["ro.product.manufacturer"];
	          deviceDetail["serialNo"] = features["ro.boot.serialno"];
	          deviceDetail["model"] = features["ro.product.model"];
	          if( features["gsm.ril.imei1"] != null ) {
	            deviceDetail["imei"] = features["gsm.ril.imei1"];  
	          }
	          
	          deviceDetail["osName"] = features["ro.com.google.clientidbase.yt"];
	          deviceDetail["version"] = features["ro.com.google.gmsversion"];
	          devicesDetailArr.push(deviceDetail);
	          
	        })
	    })
	  })
	  .then(function() {
	    res.json(devicesDetailArr);
	  })
	  .catch(function(err) {
	    console.error('Something went wrong:', err.stack)
	  })


});



// socket program to add / remove devices
io.on('connection', (socket) => {
  console.log('Connected');

  client.trackDevices()
  .then(function(tracker) {
    tracker.on('add', function(device) {
       return client.getProperties(device.id)
	        .then(function(features) {
	          let deviceDetail = {};
	          
	          deviceDetail["model"] = features["ro.product.model"];
	          deviceDetail["manufacturer"] = features["ro.product.manufacturer"];
	          deviceDetail["serialNo"] = features["ro.boot.serialno"];
	          deviceDetail["model"] = features["ro.product.model"];
	          if( features["gsm.ril.imei1"] != null ) {
	            deviceDetail["imei"] = features["gsm.ril.imei1"];  
	          }
	          
	          deviceDetail["osName"] = features["ro.com.google.clientidbase.yt"];
	          deviceDetail["version"] = features["ro.com.google.gmsversion"];
	     
	  		  io.emit('addDevice', deviceDetail);         
	        })
        
    })

     tracker.on('remove', function(device) {
      io.emit('removeDevice', device.id);         
    })


  })
  .catch(function(err) {
    console.error('Something went wrong:', err.stack)
  })


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
