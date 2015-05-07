var http = require('http');
var bl = require('bl');
var url = process.argv[2];

// var body = '';
// http.get(url, function(res) {
//     // res.setEncoding('utf8');
    
//     res.on('data', function(chunk) {
//         // console.log(chunk);
//         body += chunk;
//     });
//     res.on('end', function() {
//         console.log(body.length);
//         console.log(body);
//     });
// });

http.get(url, function(response) {
    response.pipe(bl(function(err, data) {
        if (err)
            return console.error(err);
        
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }))
});