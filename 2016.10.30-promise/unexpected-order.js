var p = new Promise(function(resolve, reject){
	console.log('a');
	resolve('b');
});

console.log('c');

p.then(function(value){
	console.log(value);
});