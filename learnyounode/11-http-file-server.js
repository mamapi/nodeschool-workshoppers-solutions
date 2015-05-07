var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var filename = process.argv[3];

var server = http.createServer(function(req, res) {
    var readStream = fs.createReadStream(filename);

    readStream.on('open', function() {
        readStream.pipe(res);
    });
});
server.listen(+port);

