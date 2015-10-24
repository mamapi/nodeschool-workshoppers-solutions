var mongo = require('mongodb').MongoClient

var dbname = process.argv[2];
var collectionName = process.argv[3];
var id = process.argv[4];

var mongourl = 'mongodb://localhost:27017/'+dbname;

mongo.connect(mongourl,function(err,db){
	if (err) throw err;

	var collection = db.collection(collectionName);

	collection.remove({
		_id: +id
	},function(err){
		if (err) throw err;

		db.close();
	});

});