var mongo = require('mongodb').MongoClient
var mongourl = 'mongodb://localhost:27017/learyoumongo'

var newdoc = {
	firstName: process.argv[2],
	lastName: process.argv[3]
};

mongo.connect(mongourl,function(err,db){
	if (err) throw err;

	var docs = db.collection('docs');

	docs.insert(newdoc, function(err,data){
		if (err) throw err;

		console.log(JSON.stringify(newdoc));

		db.close();
	});
});
