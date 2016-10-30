var p1 = new Promise(function(resolve, reject){
	resolve('p1 resolved');
});

var p2 = 'p2 not promise';

Promise.all([p1, p2]).then(function(result){
	console.log(JSON.stringify(result));
});