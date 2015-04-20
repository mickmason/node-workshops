
var filterMod = require('./filter-module.js') ;
// console.log(process.argv[1]+process.argv[2]+process.argv[3])
filterMod(process.argv[2], process.argv[3], process.argv[4]);
// var cb = function(err, data) {
// 	if (err){
// 			console.log(err) ;
// 	} else {
// 		data.forEach(function(file) {
// 			console.log(file) ;
// 		}) ;
// 	}
// }
// filterMod("C:\\Users\\Michael\\Work\\JavaScript\\NodeJS\\node-workshops\\learnyounode\\make-it-modular", "js", cb);
