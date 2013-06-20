var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

server.listen(8080);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

io.sockets.on('connection', function (client) {
  client.emit('news', { hello: 'world' });
  client.on('my other event', function (data) {
    console.log(data);
  });
});