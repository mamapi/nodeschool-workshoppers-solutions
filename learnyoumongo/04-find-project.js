var mongo = require('mongodb').MongoClient
var age = process.argv[2]
var mongourl = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(mongourl,function(err,db){
	if (err) throw err;

	db.collection('parrots').find({
		age: {
			$gt: +age
		}
	},{
		name:1,
		age:1,
		_id:0
	}).toArray(function(err,docs){
		if (err) throw err;

		console.log(docs);
		db.close();
	});
});