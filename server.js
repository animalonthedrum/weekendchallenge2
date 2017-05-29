//requires

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
//listen
app.listen(3000, function(){
  console.log('server up on 3000');
});//end listen

//base url

app.get('/', function(req,res){
  console.log('base url hit');
  res.sendFile(path.resolve('views/index.html'));
});// end base url

app.post('/addValue', function(req, res){
  console.log('add post:', req.body);
  var one = req.body.x;
  var two = req.body.y;
  var x = parseInt(one);
  var y = parseInt(two);
  var resultAdd = {
    result: x + y
  };
  res.send(resultAdd);
});//end app add post

app.post('/subValue', function(req, res){
  console.log('sub post:', req.body);
  var one = req.body.x;
  var two = req.body.y;
  var x = parseInt(one);
  var y = parseInt(two);
  var resultSub = {
    result: x - y
  };
  res.send(resultSub);
});//end app sub post

app.post('/multValue', function(req, res){
  console.log('mult post:', req.body);
  var one = req.body.x;
  var two = req.body.y;
  var x = parseInt(one);
  var y = parseInt(two);
  var resultMult = {
    result: x * y
  };
  res.send(resultMult);
});//end mult post

app.post('/divValue', function(req, res){
  console.log('div post:', req.body);
  var one = req.body.x;
  var two = req.body.y;
  var x = parseInt(one);
  var y = parseInt(two);
  var resultDiv = {
    result: x/y
  };
  res.send(resultDiv);
});//end div post
