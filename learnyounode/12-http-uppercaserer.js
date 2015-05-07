var http = require('http');
var map = require('through2-map');
var through2 = require('through2');

var server = http.createServer(function(req, res) {

    if (req.method == 'POST') {

        req
            .pipe(through2(function(chunk, _, next) {
                this.push(chunk.toString().toUpperCase());
                next();
            }))
            .pipe(res)

        // req
        //     .pipe(map(function(chunk) {
        //         return chunk.toString().toUpperCase()
        //     }))
        //     .pipe(res)
    }

})

server.listen(+process.argv[2])