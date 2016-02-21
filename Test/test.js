var fs = require('fs');
//var fileHandle = fs.readFile('test.txt', function(err, data){
//	console.log(data.toString());
//});
var stream = fs.createReadStream('test.txt');
var spool = '';
stream.on('data', function(chunk){
	console.log('chunk:\n\n'+chunk.toString());
	spool += chunk;
});
stream.on('end', function(){
	console.log('end:\n\n'+spool);
});
