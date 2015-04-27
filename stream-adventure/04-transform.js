var through2 = require('through2')

process.stdin
    .pipe(through2(function(chunk, enc, next) {

        this.push(chunk.toString().toUpperCase())
        next()

    }))
    .pipe(process.stdout)