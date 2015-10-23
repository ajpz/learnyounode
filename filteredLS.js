//prints a list of files in a give directory. 
//program should accept 2 args: directory path, file extension to filter by

var fs = require('fs'); 
var path = require('path'); 

var test_path = process.argv[2], 
	test_ext = process.argv[3]; 

//asynchronous call to readdir() module, invokes callback with list of filenames (strings)
fs.readdir(test_path, callback);
function callback(err, list) {
	if (err) throw err; 
	
	//uses indexOf and slice to parse file extension
	// var filteredList = list.filter(function(file) {
	// 	var index = file.indexOf('.'); 
	// 	if (index === -1) {
	// 		return false; 
	// 	} else {
	// 		return file.slice(index + 1) === test_ext; 
	// 	}
	// });

	//uses path module's extname method to find extension. 
	// var filteredList = list.filter(function(file) {
	// 	var file_ext = path.extname(file); 
	// 	if (file_ext) {
	// 		return file_ext.slice(1) === test_ext; 
	// 	} else {
	// 		return false; 
	// 	}
	// })
	// console.log(filteredList.join('\n')); 


	// use forEach instead
	list.forEach(function(file) {
		if (path.extname(file) === '.' + test_ext) {
			console.log(file); 
		}
	})
}


