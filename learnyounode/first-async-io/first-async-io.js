var fs = require('fs') ;

fs.readFile(process.argv[2], {'encoding': 'ascii'}, function(err, data) {
	if (err) console.log(err)
	var buff = data;	
	var newlines = 0;
	for (var i = 0; i<buff.length; i++) {
		if (buff.charAt(i) === '\n') 
			newlines += 1;
	}
	console.log(newlines) ;	
});
