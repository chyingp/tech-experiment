var p = new Promise(function(resolve, reject){
	console.log('1');
	resolve('成功');
});

p.then(function(value){
	console.log(value);
});