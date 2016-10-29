var fs = require('fs');
var readFile = function(filepath){
	return new Promise(function(resolve, reject){
		fs.readFile(filepath, 'utf8', function(err, data){
			if(err){
				reject(err);
			}else{
				resolve(data);
			}
		});
	});
};

readFile('./extra/hello.txt')
.then(function(data){
	console.log(data);
})
.then(function(){
	return readFile('./extra/world.txt')
})
.then(function(data){
	console.log(data);
})
.catch(function(err){
	console.log(err);
});