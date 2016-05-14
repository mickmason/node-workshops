var fs = require('fs');
var data = fs.readFileSync(process.argv[2]);
data = data.toString();
var dataSplit = data.split('\n');
console.log(dataSplit.length-1);

