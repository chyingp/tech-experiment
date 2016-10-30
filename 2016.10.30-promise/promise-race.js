// 例子1：resoved
var p1 = new Promise(function(resolve, reject){
	setTimeout(resolve, 500, 'p1 resolved');
});

var p2 = new Promise(function(resolve, reject){
	setTimeout(resolve, 300, 'p2 resolved');
});

Promise.race([p1, p2]).then(function(value){
	console.log(value);
});

// 例子2：rejected
var p3 = new Promise(function(resolve, reject){
	setTimeout(resolve, 500, 'p3 resolved');
});

var p4 = new Promise(function(resolve, reject){
	setTimeout(reject, 300, new Error('p4 rejected'));
});

Promise.race([p3, p4])
	.then(function(value){
		console.log(value);
	}).catch(function(error){
		console.log(error.message);
	});