var http = require('http'); 
var url = require('url'); 


var server = http.createServer(function(request, response) {
	var urlObj = url.parse(request.url, true); 
	var pathname = urlObj.pathname; 
	var date = new Date(urlObj.query.iso); 
	var jsonObj = {}; 

	if (pathname === '/api/parsetime') {
		jsonObj["hour"] = date.getHours(); 
		jsonObj["minute"] = date.getMinutes(); 
		jsonObj["second"] = date.getSeconds(); 
	} else if (pathname === '/api/unixtime') {
		jsonObj["unixtime"] = date.getTime(); 
	} else {
		jsonObj = null; 
	}

	if (jsonObj) {
		response.writeHead(200, {'content-type': 'application/json'}); 
		response.end(JSON.stringify(jsonObj)); 
	} else {
		response.writeHead(404); 
		res.end; 
	}
}).listen(Number(process.argv[2])); 

/* OFFICIAL SOLUTION */

// var http = require('http')
// var url = require('url')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime : time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result

//   if (/^\/api\/parsetime/.test(req.url))
//     result = parsetime(time)
//   else if (/^\/api\/unixtime/.test(req.url))
//     result = unixtime(time)

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))
