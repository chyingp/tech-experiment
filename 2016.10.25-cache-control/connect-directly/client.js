var http = require('http');
var maxAge = 5;

function doRequest() {
	var address = 'http://localhost:3000/must-revalidate?max-age=' + maxAge; 
	address = 'http://www.cnblogs.com';
	http.get(address, function(res){
		res.pipe(process.stdout);
	});
}

doRequest();
