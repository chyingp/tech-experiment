var p1 = new Promise(function(resolve, reject) {
  resolve('Success');
});

p1.then(function(value) {
	console.log(value); // "Success!"
	throw 'oh, no!';
}).catch(function(e) {
	console.log(e); // "oh, no!"
}).then(function(){
	console.log('after a catch the chain is restored');
}, function () {
	console.log('Not fired due to the catch');
});

var p2 = new Promise(function(resolve, reject){
	resolve('p2 resolved');
});

p2.then(function(value){
	console.log(value);
	throw 'p2 error';
}, function(){
	console.log('it will not be triggered at all');
}).catch(function(error){
	console.log(error);
});