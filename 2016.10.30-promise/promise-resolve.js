// 例子一：普通值
Promise.resolve('resolved').then(function(value){
	console.log(value);
});

// 例子二：promise实例
var p1 = new Promise(function(resolve, reject){
	resolve('p1 resolved');
});
Promise.resolve(p1).then(function(value){
	console.log(value);
});


var p2 = new Promise(function(resolve, reject){
	reject(new Error('p2 rejected'));
});
Promise.resolve(p2).catch(function(error){
	console.log(error.message);
});

// 例子3：thenable对象
var thenable = {
	then: function(resolve, reject){
		resolve('thenable resolved');
	}
};

Promise.resolve(thenable).then(function(value){
	console.log(value);
});