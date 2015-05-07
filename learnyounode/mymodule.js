var fs = require('fs');
var path = require('path');

module.exports = function(pathname, fileext, callback) {

    fs.readdir(pathname, function(err, list) {
        if (err)
            return callback(err);

        var results = [];

        list.forEach(function(file) {
            if (path.extname(file) === '.' + fileext)
                results.push(file);
        });

        callback(null, results);
    });
}