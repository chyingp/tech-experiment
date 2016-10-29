var fs = require('fs');
var asyncReadFile = async function(){
	var f1 = await fs.readFile('./extra/hello.txt');
	var f2 = await fs.readFile('./extra/world.txt');

	console.log(f1.toString());
	console.log(f2.toString());
};

var result = asyncReadFile();