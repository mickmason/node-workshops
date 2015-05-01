module.exports = function(dirname, filter, callback) {
	//console.log(dirname) ;	
	
	
		//console.log("dirname: "+dirname) ;
		// console.log("filter: "+filter) ;
		// console.log("callback: "+callback) ;
	
	var fs = require('fs') ;
	var path = require('path') ;
	var data = [] ;
	fs.readdir(dirname, function(err, files) {
		if (err) 
			return callback(err, data) ;
		var count = 0;
		files.forEach(function(file, i) {
				
			if (path.extname(file).toLowerCase() === "." + filter.toLowerCase()) {
		
		
				data[count] = file ;
				count++;
			} 
		});
			
		return callback(null, data) ;	
	});


};