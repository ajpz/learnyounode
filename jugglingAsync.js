// var http = require('http'); 
// var dataOne = '', 
// 	dataTwo = '', 
// 	dataThree = '', 
// 	cntComplete = 0; 

// http.get(process.argv[2], function(response) {
// 	response.setEncoding('utf8'); 
// 	response.on('data', function(chunk) {
// 		dataOne += chunk; 
// 	}); 
// 	response.on('error', console.error);
// 	response.on('end', function() {
// 		cntComplete ++; 
// 		printData(cntComplete); 
// 	}); 
// }).on('error', console.error);

// http.get(process.argv[3], function(response) {
// 	response.setEncoding('utf8'); 
// 	response.on('data', function(chunk) {
// 		dataTwo += chunk; 
// 	}); 
// 	response.on('error', console.error); 
// 	response.on('end', function() {
// 		cntComplete ++; 
// 		printData(cntComplete); 
// 	})
// }).on('error', console.error);

// http.get(process.argv[4], function(response) {
// 	response.setEncoding('utf8'); 
// 	response.on('data', function(chunk) {
// 		dataThree += chunk; 
// 	}); 
// 	response.on('error', console.error); 
// 	response.on('end', function() {
// 		cntComplete ++; 
// 		printData(cntComplete); 
// })
// }).on('error', console.error);

// function printData(cnt) {
// 	if (cnt === 3) {
// 		console.log(dataOne); 
// 		console.log(dataTwo); 
// 		console.log(dataThree); 
// 	}
// }

/**************************************/
var http = require('http'); 
var data = [],
	cntComplete = 0; 

function httpGet (index) {
	data[index] = '';
	http.get(process.argv[2 + index], function(response) {
		response.setEncoding('utf8'); 
		response.on('data', function(chunk) {
			data[index] += chunk; 
		}); 
		response.on('error', console.error);
		response.on('end', function() { 
			cntComplete ++; 
			cntComplete === 3 ? printData(): null;  
		}); 
	}).on('error', console.error);
} 


function printData() {
	for (var i = 0; i < data.length; i++) {
		console.log(data[i]); 
	}
}

for (var loopCnt = 0; loopCnt < 3; loopCnt ++) {
	httpGet(loopCnt); 
}
/************************************/
/* OFFICIAL SOLUTION */

// var http = require('http')
//     var bl = require('bl')
//     var results = []
//     var count = 0

//     function printResults () {
//       for (var i = 0; i < 3; i++)
//         console.log(results[i])
//     }

//     function httpGet (index) {
//       http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//           if (err)
//             return console.error(err)

//           results[index] = data.toString()
//           count++

//           if (count == 3)
//             printResults()
//         }))
//       })
//     }

//     for (var i = 0; i < 3; i++)
//       httpGet(i)

