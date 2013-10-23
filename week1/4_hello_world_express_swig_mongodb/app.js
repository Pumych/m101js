var express = require('express');
var app = express();
var	consolidate = require('consolidate');
var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;
var mongoclient = new MongoClient(new Server('localhost', 27017, { native_parser : true }));
var db = mongoclient.db('course');  // Use 'course' db

app.engine('html', consolidate.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// req - request
// res - result/response
app.get('/', function(req, res){
    db.collection('hello_mongo_express').findOne({}, function(err, doc){
        if(err) throw err;
        res.render('hello', doc);
    })
});

app.get('*', function(req, res){
	res.send('WOW 404!', 404);
});

mongoclient.open(function(err, mongoclient){
    if(err) throw err;
    app.listen(8000);
    console.log('Express server started on port 8000');
})



