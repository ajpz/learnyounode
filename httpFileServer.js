// file server that serves a specific file when instantiated. 
// port is arg1, path to file is arg2

// node httpFileServer.js 8000 ./outputFile.txt
// curl http://localserver:8000
// or in browser, navigate to localhost:8000

var http = require('http'); 
var fs = require('fs'); 

console.log("Port: " + process.argv[2] + " Path: " + process.argv[3]); 

var server = http.createServer(function(request, response) {
	var fileToServe = fs.createReadStream(process.argv[3]); 
	response.writeHead(200, {'content-type': 'text/plain'}); 
	fileToServe.pipe(response); 
}); 

server.listen(Number(process.argv[2])); 


/* OFFICIAL SOLUTION */

// var http = require('http')
// var fs = require('fs')

// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))