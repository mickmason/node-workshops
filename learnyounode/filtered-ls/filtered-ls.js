var fs = require('fs');
var path = require('path');
var filter = process.argv[3];
fs.readdir(process.argv[2], function(err, files) {
	(err) ? console.log(err) :  files.forEach(function(file) {
		(path.extname(file) === '.'+filter) ? console.log(file) : true ;
	}); 
});
