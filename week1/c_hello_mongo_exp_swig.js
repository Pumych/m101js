var express = require('express');
var app = express();
var	consolidate = require('consolidate');
//var MongoClient = require('mongodb').MongoClent;
//var Server = require('mongodb').Server;
//var mongoserver = new Server('localhost', 27017, { native_parser : true });
//var mongoclient = new MongoClient(mongoserver);
//var db = mongoclient.db('course');

var mongo = require('mongodb'),
    Server = mongo.Server,
    Db = mongo.Db;
var server = new Server('localhost', 27017, {auto_reconnect: true});

var db = new Db('tworld', server, {safe: false});


app.engine('html', consolidate.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


// req - request
// res - result/response
app.get('/', function(req, res){
    db.collection('hello_mongo_express').findOne({}, function(err, doc){
        res.render('hello', doc);
    })

});

app.get('*', function(req, res){
	res.send('WOW 404!', 404);
});

mongoclient.open(function(err, mongoclient){
    app.listen(8000);
    console.log('Express server started on port 8000');
})



