var catalog = require('./books_lib.js').record;
var main = function main () {
	var input=process.argv.slice(2,process.argv.length);
	var option = input[0];
	    if(!option) option = "";
	    if(input.length<2)
	     	if(option=='--help'||option == '--h')	
	     		return catalog.Help;  		
	return  catalog.modifyCatalog(input);
};
console.log(main());