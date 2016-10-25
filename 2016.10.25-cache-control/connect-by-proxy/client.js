var http = require('http');
var maxAge = 5;

function doRequest() {
	var address = 'http://127.0.0.1:3000/must-revalidate?max-age=' + maxAge; 
	http.get(address, function(res){
		// res.pipe(process.stdout);
		console.log( JSON.stringify(res.headers) );
	});
}

doRequest();