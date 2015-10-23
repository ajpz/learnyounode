var mimModule = require('./mimModule');

mimModule(process.argv[2], process.argv[3], function(err, data) {
	if (err) {
		console.log(err.message); 
		return; 
	} 
	console.log(data.join('\n')); 
});

/*OFFICIAL SOLUTION
    var filterFn = require('./solution_filter.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]

    filterFn(dir, filterStr, function (err, list) {
      if (err)
        return console.error('There was an error:', err)

      list.forEach(function (file) {
        console.log(file)
      })
    })
*/

