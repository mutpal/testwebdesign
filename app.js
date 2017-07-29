const express = require('express');
const app = express();

app.set('view engine','ejs');

app.use('/public',express.static('public'));

app.get('/',function (req,res) {

res.render('index');

});

app.get('/contact',function (req,res) {

	res.render('contact');
	
});

app.get('/got',function (req,res) {
	
	res.render('thanks',{obj:req.query});
	console.log(req.query);

	});


app.listen('8000',function () {
		
console.log("server is running on 3000");});