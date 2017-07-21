var express = require('express'),
	app     = express(),
	bodyParser = require('body-parser');
var usbDetect = require('usb-detection');


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/devicesList', function(req, res) {
	usbDetect.find(function(err, devices) {
		if (err) {
			return res.json(err);
		}
		console.log(devices);
		res.json(devices);	
	});
});

app.listen(3000, function(){
	console.log('I\'m Listening on port - 3000...');
})