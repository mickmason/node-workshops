var fs = require('fs') ;
var path = require('path') ;
fs.readdir(process.argv[2], function(err, files) {
	if (err) console.log(err) ;
	var extn =  process.argv[3] ;
	files.forEach(function(file) {
		if (path.extname(file).substr(path.extname(file).search(".")+1).toLowerCase() === extn)
			console.log(file) ;	
	});

	
});
