var fs = require('fs');

var readFile = function(filename){
	return new Promise(function(resolve, reject){
		fs.readFile(filename, 'utf8', function(err, data){
			if(err){
				reject(err);
			}else{
				resolve(data);
			}			
		});
	});
};

var run = function(fn){
	var gen = fn();

	function next(data){
		var ret = gen.next(data);
		if(ret.done) return ret.value;
		ret.value.then(function(data){
			next(data);
		});
	};

	next();
};

var main = function*(){
	var r1 = yield readFile('./extra/hello.txt', 'utf8');
	console.log(r1);

	var r2 = yield readFile('./extra/world.txt', 'utf8');
	console.log(r2);
};

run(main);

