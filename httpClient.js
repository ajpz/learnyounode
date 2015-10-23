var http = require('http'); 

var request = http.get(process.argv[2], function(response) {
	response.setEncoding('utf8'); 
	response.on('data', function(chunk) {
		console.log(chunk); 
	}); 
	response.on('error', function(error) {
		console.error('Got error: ' + error.message);
	}); 
}); 
request.on('error', function(error) {
	console.error('Req error: ' + error.message); 
})

/* OFFICIAL SOLUTION
    var http = require('http')

    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    })
*/

