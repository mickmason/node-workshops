var http = require('http') ;
var bl = require('bl') ;

http.get(process.argv[2], function(resp) {
	var chars = 0 ;
	var allData = "" ;
	//resp.setEncoding('utf-8') ;
	//var bl = new BufferList() ;
	resp.pipe(bl(function(err,data) {
			if (err) 
				console.log(err.message) ;
			data = data.toString() ;
			console.log(data.length) ;
			console.log(data) ;
	})) ;
	

	// resp.on('error', function(err) {
	// 	console.log(err) ;
	// }) ;
	// resp.on('end', function() {
	// 	console.log(bl.length) ;
	// 	console.log(bl.toString()) ;
	// }) ;
});