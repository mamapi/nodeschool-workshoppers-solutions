var mymodule = require('./mymodule');
var pathname = process.argv[2];
var fileext = process.argv[3];

mymodule(pathname,fileext,function(err,list){
	list.forEach(function(file){
		console.log(file);
	})
});

