var fs = require("fs");
var filename = "index.html";
var express = require('express');

var app = express.createServer(express.logger());

var read = fs.readFileSync('index.html', 'utf8');

app.get('/', function(request, response) {
  response.send(read);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

console.log(read);
