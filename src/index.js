const http = require('http');
const colyseus = require('colyseus');

const DrawRoom = require('./DrawRoom');

const port = Number(process.env.PORT || 2567);
const endpoint = 'localhost';

const gameServer = new colyseus.Server({
    server: http.createServer()
});

// Create HTTP & WebSocket servers
gameServer.register('draw', DrawRoom);
gameServer.listen(port);

console.log(`Listening on http://${ endpoint }:${ port }`)
