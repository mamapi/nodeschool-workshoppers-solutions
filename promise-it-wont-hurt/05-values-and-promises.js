var q = require('q');
var deffered = q.defer();


function attachTitle(arg) {
    return "DR. " + arg;
}

deffered.promise
    .then(attachTitle)
    .then(console.log)

deffered.resolve('MANHATTAN');