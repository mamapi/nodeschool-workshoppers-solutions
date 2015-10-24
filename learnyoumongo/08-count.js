var mongo = require('mongodb').MongoClient

var mongourl = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(mongourl,function(err,db){
	if (err) throw err;

	var collection = db.collection('parrots');

	collection.count({
		age: {
			$gt: +process.argv[2]
		}
	},function(err, count){
		if (err) throw err;

		console.log(count);
		db.close();
	});

});
