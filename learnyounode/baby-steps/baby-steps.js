var count = 0;
process.argv.forEach(function(val, i, arr){
	(i > 1) ? count += Number(val) : true ;
});
console.log(count);
