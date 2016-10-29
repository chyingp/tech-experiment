var fs = require('fs');
var thunk = require('./thunk');
var readFile = thunk(fs.readFile);

var run = function(fn){

	var gen = fn();

	function next(err, data) {
		var ret = gen.next(data);
		if(ret.done) return;
		ret.value(next);
	};
	
	next();
};

function *read (){
	var r1 = yield readFile('./extra/hello.txt', 'utf8');
	console.log(r1);

	var r2 = yield readFile('./extra/world.txt', 'utf8');
	console.log(r2);
}

run(read);

