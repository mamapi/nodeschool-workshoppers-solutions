var http = require('http')
var through2 = require('through2')
var port = +process.argv[2] || 8000

var server = http.createServer(function(req, res) {
    if (req.method === 'POST') {
        req.pipe(through2(function(chunk, _, next) {
            this.push(chunk.toString().toUpperCase())
            next()
        })).pipe(res)
    }
}).listen(port);