var express = require('express');
var app = express();
var morgan = require('morgan');
var timers = 0;

app.use(morgan('combined'));
app.use(function(req, res, next){
	// timers++;
	next();
});

app.get('/no-cache', function(req, res, next) {
	var headers = {
		'Cache-Control': 'no-cache'
	};
	res.set(headers);
	res.send('no-cache: ' + timers);
});

app.get('/must-revalidate', function(req, res, next) {
	var maxAge = req.query['max-age'] || 0;
	var headers = {
		'Cache-Control': 'max-age='+ maxAge +', must-revalidate'		
	};
	res.set(headers);
	res.send('must-validate: ' + timers);
});

app.listen(3000);