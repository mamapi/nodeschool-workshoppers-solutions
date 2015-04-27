var split = require('split')
var through2 = require('through2')

var lineNo = 1;

var transform = function(chunk, _, next) {
    this.push(chunk.toString()[lineNo++ % 2 === 1 ? 'toLowerCase' : 'toUpperCase']() + '\n');
    next()
};

process.stdin
    .pipe(split())
    .pipe(through2(transform))
    .pipe(process.stdout)