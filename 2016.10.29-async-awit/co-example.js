var co = require('co');
var thunkify = require('thunkify');
var fs = require('fs');
var readFile = thunkify(fs.readFile);

var gen = function*(){
	var r1 = yield readFile('./extra/hello.txt', 'utf8');
	console.log(r1);

	var r2 = yield readFile('./extra/world.txt', 'utf8');
	console.log(r2);

	return 'finished';
};

co(gen).then(function(str){
	console.log(str);
	console.log('执行完成');
});