var p = new Promise(function(resolve, reject){
	resolve('成功');
});

setTimeout(function(){
	p.then(function(value){
		console.log(value);
	});
}, 1000);

console.log('结束');