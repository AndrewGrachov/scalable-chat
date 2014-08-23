var express = require('express');
var app = express();
var config = require('config');
var port = config.get('app.port');
var redisUrl = config.get('db.redis.url');
var redisPort = config.get('db.redis.port');
var redisStore = require('socket.io-redis');

var server = app.listen(port, function () {
	console.log('listening at port ' + port);
});

app.use(express.static('./public/build'));
app.get('/', function (req, res) {
	res.sendfile('./public/index.html');
});

var io = require('socket.io')(server);
io.adapter(redisStore({ host: redisUrl, port: redisPort }));

var rooms = [
	'first',
	'second',
	'third',
	'fourth'
]

io.on('connection', function (socket) {
	console.log('socket connected:');
	socket.on('room', function (room) {
		console.log("socket joined", room);
		socket.join(room);
		socket.on('chat message', function (msg) {
			console.log('chat message:', msg);
			io.sockets.in(room).emit('chat message', msg);
		});
	});	
});