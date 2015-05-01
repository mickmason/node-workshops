var http = require('http') ;

http.get(process.argv[2], function(resp) {

	resp.setEncoding('utf-8') ;
	resp.on('data', function(d) {
		console.log(d) ;
	}) ;
	resp.on('error', function(err) {
		console.log(err) ;
	}) ;
});