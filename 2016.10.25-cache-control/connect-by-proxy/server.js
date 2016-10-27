var express = require('express');
var app = express();
var morgan = require('morgan');
var port = process.env.PORT || 3000;
var timers = 0;
var oddVisitCount = 0;

app.use(morgan('combined'));
app.use(function(req, res, next){
	var change = req.query.change;
	var oddChange = req.query['odd-change'];

	if(change === '1'){
		timers++;
	}

	// 如果带了 odd-change=1，那么，奇数次访问时，资源是新的
	if(oddChange === '1' && (++oddVisitCount%2 === 1)){
		timers++;
	}

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

app.listen(port, function(){
	console.log('server started at port ' + port);
});