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

var main = async function(){
	var r1 = await readFile('./extra/hello.txt', 'utf8');
	console.log(r1);

	var r2 = await readFile('./extra/world.txt', 'utf8');
	console.log(r2);

	return 'finished';
};

main().then(function(ret){
	console.log(ret);
});