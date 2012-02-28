var express = require('express');
var app = express.createServer();
app.use(express.static(__dirname + '/docs'));

app.get('/', function(req, res){
  res.redirect('/index.html');
});

app.listen(8000);