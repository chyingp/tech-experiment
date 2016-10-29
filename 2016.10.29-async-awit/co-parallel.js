var co = require('co');
var thunkify = require('thunkify');

var gen = function*(){
	var r1 = yield [
		Promise.resolve(1),
		Promise.resolve(2)
	];
	console.log(r1);

	var r2 = yield Promise.resolve(3);
	console.log(r2);

	return 'finished';
};

co(gen).then(function(str){
	console.log(str);
	console.log('执行完成');
});