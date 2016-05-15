var filterer = require('./filterer');
function cb(err, data) {
	(err) ? console.log(err) : data.forEach(function(val) {
		console.log(val);
	});
}
filterer(process.argv[2], process.argv[3], cb);
