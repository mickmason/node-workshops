
var filterMod = require('./filter-module.js') ;
var cb = function(err, data) {
	if (err) {
		console.log(err) ;
		return false;
	} else if (data.length < 1){
		console.log("Sorry, no results")
	} else {
		data.forEach(function(el, i) {console.log(el)}) ;
	}
}
filterMod(process.argv[2], process.argv[3], cb);


