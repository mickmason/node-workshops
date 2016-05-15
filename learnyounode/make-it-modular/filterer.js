var fs = require('fs');
var path = require('path');
module.exports = function (filepath, filter, callback) {
	fs.readdir(filepath, function(err, files) {
		if (err) {
			callback(err) 
		}
		else {
			var filtered = new Array();
			files.forEach(function(val, i) {
				(path.extname(val) ==='.'+ filter) ? filtered.push(val) : true;
		
			}); 
			callback(null, filtered);
		}
	});
};
