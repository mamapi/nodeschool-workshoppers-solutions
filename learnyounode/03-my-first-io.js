var fs = require('fs');

var buff = fs.readFileSync(process.argv[2]);
var counter = buff.toString().split('\n').length;
console.log(--counter);

