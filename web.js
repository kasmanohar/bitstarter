var express = require('express');

var app = express.createServer(express.logger());

var sys=require("sys"), fs=require("fs");
var content=String(fs.readFileSync("index.html"));

app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
