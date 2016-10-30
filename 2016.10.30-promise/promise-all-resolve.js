var p1 = new Promise(function(resolve, reject){
	resolve('p1 resolved');
});

var p2 = new Promise(function(resolve, reject){
	resolve('p2 resolved');
});

Promise.all([p1, p2]).then(function(result){
	console.log(JSON.stringify(result));
});