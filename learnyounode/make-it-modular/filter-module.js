module.exports = function(dirname, filter, callback) {
	//console.log(typeof args) ;	
	var fs = require('fs') ;
	var path = require('path') ;
	var data = [] ;
	fs.readdir(dirname, function(err, files) {
		if (err) 
			return callback(err) ;
		
		files.forEach(function(file, i) {
			if (path.extname(file).toLowerCase() === "." + filter.toLowerCase()) {
							console.log(file) ;
							data[i] = file ;
			}
		});
		return callback(err, data) ;
	});

};