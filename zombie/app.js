var express = require('express');
var socket = require('socket.io');
var app = express();
var io = socket.listen(app);

io.sockets.on('connection', function(client){
  console.log('client connected...');
});


//app.get('/', function(req, res){
//  res.send('Hello World');
//});

//app.listen(8080);
//console.log('Listening on port 8080');