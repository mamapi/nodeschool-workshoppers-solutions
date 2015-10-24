var q = require('q');
var def = q.defer();

def.promise.then(console.log);

def.resolve("SECOND");
console.log('FIRST');

