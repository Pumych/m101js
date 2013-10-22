
// var express = require('express');
// var cons = require('consolidate');
var  MongoClient = require('mongodb').MongoClient;

// Open the connection to the server
MongoClient.connect('mongodb://localhost:27017/test', function(err, db){
	if(err) throw err;
	
	// Find one document in collection
	db.collection('coll').findOne({"username":"Fedia"}, function(err, doc){
		if(err) throw err;
		
		// Print the result
		console.dir(doc);

		// Close DB
		db.close();
	});

	// DEclare success
	console.dir("Called findOne!");
});

