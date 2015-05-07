var net = require('net')
var strftime = require('strftime')
var port = +process.argv[2] || 8000

net.createServer(function(socket){
	socket.end(strftime('%Y-%m-%d %H:%M',new Date()))
}).listen(port);