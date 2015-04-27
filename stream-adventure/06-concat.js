var concat = require('concat-stream')

process.stdin.pipe(concat(function(src) {
    console.log(src.toString().split('').reverse().join(''))
}))