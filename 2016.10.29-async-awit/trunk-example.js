var fs = require('fs');
var thunk = require('./thunk');
var readFile = thunk(fs.readFile);

readFile('./extra/hello.txt', 'utf8')(function(err, data){
	console.log(data);
});