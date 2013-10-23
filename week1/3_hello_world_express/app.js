var express = require('express'),
	app = express(),
	consolidate = require('consolidate');

app.engine('html', consolidate.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


// req - request
// res - result/response
app.get('/', function(req, res){
	res.render('hello', {'name': 'Swig'});
});

app.get('*', function(req, res){
	res.send('WOW 404!', 404);
});

app.listen(8000);

console.log('Express server started on port 8000');

