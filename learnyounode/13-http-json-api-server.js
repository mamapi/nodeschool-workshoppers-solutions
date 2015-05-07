var http = require('http');
var url = require('url');

var parsetime = function(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
};

var unixtime = function(time) {
    return {
        unixtime: time.getTime()
    }
};

var server = http.createServer(function(req, res) {
    var parsedUrl = url.parse(req.url, true);
    // console.log(parsedUrl);

    var result;
    if (parsedUrl.pathname == '/api/parsetime') {
        res.end(JSON.stringify(parsetime(new Date(parsedUrl.query.iso))));
    } else if (parsedUrl.pathname == '/api/unixtime') {
        res.end(JSON.stringify(unixtime(new Date(parsedUrl.query.iso))));
    }
});

server.listen(+process.argv[2]);