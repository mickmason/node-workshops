var fs = require('fs');
var count = 0;

fs.readFile(process.argv[2], function(err, data){
	(err) ? console.log(err) : console.log(data.toString().split('\n').length-1);
});

