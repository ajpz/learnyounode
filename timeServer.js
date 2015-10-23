// Write a TCP time server. 
// Listen on port proveded as first arg. 
// For each connection, server writes the date & 24 hr time
// "YYYY-MM-DD hh:mm" with newline char
// MM, DD, hh and mm must be 0 filled to two integers

// use net module from node core (this is NOT http); 

var net = require('net'); 
var strftime = require('strftime'); 

function getDateTime() {
	var date = new Date();

	function zeroPad(num) {
		var str = String(num); 
		if (str.length < 2) {
			return '0' + str; 
		}
		return str; 
	}

	return '' + date.getFullYear() + '-' + 
		zeroPad(date.getMonth() + 1) + '-' + 
		zeroPad(date.getDate()) + " " + 
		zeroPad(date.getHours()) + ':' + 
		zeroPad(date.getMinutes()); 
}

// console.log(strftime('%F %H:%M'));

var server = net.createServer(function(socket) {
	socket.write(getDateTime() + '\n'); 
	socket.end(); 
}); 

server.listen(process.argv[2]); 

/* OFFICIAL SOLUTION */

// var net = require('net')

// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-'
//     + zeroFill(d.getMonth() + 1) + '-'
//     + zeroFill(d.getDate()) + ' '
//     + zeroFill(d.getHours()) + ':'
//     + zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))