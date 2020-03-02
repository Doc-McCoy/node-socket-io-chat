var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log('A user connected');

    socket.on('disconnect', function() {
        console.log('user disconnected');
    });

    socket.on('chat message', function(msg) {
        io.emit('chat message', msg);
    })
});

http.listen(3000, function() {
    console.log('Listening on *3000')
});