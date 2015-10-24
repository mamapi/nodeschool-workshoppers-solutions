var mongo = require('mongodb').MongoClient
var dbname = process.argv[2];
var mongourl = 'mongodb://localhost:27017/'+dbname;

mongo.connect(mongourl,function(err,db){
	if (err) throw err;

	var users = db.collection('users');

	users.update({
		username: 'tinatime'
	},{
		$set: {
			age: 40
		}
	},function(err){
		if (err) throw err;

		db.close();
	});

});