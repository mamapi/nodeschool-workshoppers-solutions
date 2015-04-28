var crypto = require('crypto'),
    zlib = require('zlib'),
    tar = require('tar'),
    concat = require('concat-stream')

var algorithm = process.argv[2] || 'aes256',
    password = process.argv[3] || 'robot'

var parser = tar.Parse()
parser.on('entry', function(e) {
	 // console.log(e);

    if (e.type != 'File') return;

    var hashStream = crypto.createHash('md5', { encoding: 'hex' });
    e.pipe(hashStream).pipe(concat(function(hash) {
        console.log(hash + ' ' + e.path)
    }));
})

process.stdin
    .pipe(crypto.createDecipher(algorithm, password))
    .pipe(zlib.createGunzip())
    .pipe(parser);