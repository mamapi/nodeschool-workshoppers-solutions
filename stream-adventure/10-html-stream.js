var through2 = require('through2')
var trumpet = require('trumpet')
var tr = trumpet()

var element = tr.select('.loud').createStream();
element
    .pipe(through2(function(chunk, _, next) {
        this.push(chunk.toString().toUpperCase());
        next();
    }))
    .pipe(element);

process.stdin
    .pipe(tr).pipe(process.stdout)