var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    port = 8080;

require("./app/autorization.js").init(app, io);

app.use(express.static(__dirname));

var gameInfo = {
    fieldsLen: '', 
    usersLen: '', 
    usersList: [],
    listOfGames: []
};
io.on('connection', function(socket) {
    require("./app/chat.js").init(socket, io);
    require("./app/game.js").init(socket, io, gameInfo);
    require("./app/createGame.js").init(socket, io, gameInfo);
    require("./app/getGameList.js").init(socket, io, gameInfo);
});

console.log('Running');
http.listen(port);

