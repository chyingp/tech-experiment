var p = new Promise(function(resolve, reject){
	resolve(1);
});

p.then(function(value){
	console.log('a: ' + value);
	return value + 1;
}).then(function(value){
	console.log('b: ' + value);
});

p.then(function(value){
	console.log('c: ' + value);
});


var p1 = new Promise(function(resolve, reject){
	resolve(1);
});
var p2;

var p3 = p1.then(function(value){
	console.log(value);

	p2 = new Promise(function(resolve, reject){
		resolve(2);
	});
	return p2;
}).then(function(value){
	console.log(value);
	console.log('p3 === p2: ' + (p3 === p2));
});