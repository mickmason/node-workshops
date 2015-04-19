var fs = require('fs') ;

var buff = fs.readFileSync(process.argv[2], {'encoding': 'ascii'});
var newlines = 0;
for (var i = 0; i<buff.length; i++) {
	if (buff.charAt(i) === '\n') 
		newlines += 1;
}
console.log(newlines) ;