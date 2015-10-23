// Solved using accumulator code
// Try using modules: bl or concat-stream

/*
var http = require('http'); 

http.get(process.argv[2], function(response) {
	response.setEncoding('utf8'); 
	var str = ''; 
	response.on('data', function(chunk) {
		str += chunk; 
	}); 
	response.on('end', function() {
		console.log(str.length); 
		console.log(str); 
	}); 
	response.on('error', console.error); 
}).on('error', console.error); 
*/

var http = require('http'); 
var bl = require('bl'); 

http.get(process.argv[2], function(response) {
	response.pipe(bl(function(err, data) {
		if (err) throw err; 
		data = data.toString(); 
		console.log(data.length); 
		console.log(data); 
	})); 
	response.on('error', console.error); 
})
