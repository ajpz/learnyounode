var http = require('http'); 
var map = require('through2-map'); 


var server = http.createServer(function(request, response) {
	response.writeHead(200, {'content-type': 'text/plain'}); 

	request.on('data', function(chunk) {
		response.write(chunk.toString().toUpperCase()); 
	}); 
	request.on('end', function() {
		response.end(); 
	})

	// request.pipe(map(function(chunk) {
	// 	return chunk.toString().toUpperCase(); 
	// })).pipe(response); 
});



server.listen(Number(process.argv[2])); 