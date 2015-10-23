var fs = require('fs'); 
var path = require('path'); 

module.exports = function(dirName, fileExt, callBack) {
	if (!(dirName&&fileExt)) {
		callBack({message:'Path or Ext was null'}); 
		return; 
	} else {
		fs.readdir(dirName, function(err, data) {
			if (err) {
				callBack(err); 
				return; 
			} else {
				var filteredData = data.filter(function(file) {
					return path.extname(file) === '.' + fileExt; 
				})
				callBack(null, filteredData); 
			}
		})
	}	
}

/* OFFICIAL SOLUTION
var fs = require('fs')
    var path = require('path')

    module.exports = function (dir, filterStr, callback) {

      fs.readdir(dir, function (err, list) {
        if (err)
          return callback(err)

        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })

        callback(null, list)
      })
    }




*/