module.exports = function(dirname, filter, callback) {
	var fs = require('fs') ;
	var path = require('path') ;
	var data = [] ;
	fs.readdir(dirname, function(err, files) {
		if (err) 
			return callback(err, data) ;
		data = files.filter(function(file) {
			if (path.extname(file).toLowerCase() === "." + filter.toLowerCase()) {
				return file;
			}
		});
		return callback(null, data);
	});
};