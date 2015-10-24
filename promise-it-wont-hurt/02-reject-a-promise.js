var q = require('q');
var def = q.defer();

def.promise
    .then(console.log)
    .catch(function(error){
    	console.log('222');	
    });

setTimeout(def.reject, 2000, new Error('REJECTED!'));