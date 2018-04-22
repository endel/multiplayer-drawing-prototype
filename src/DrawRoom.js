const colyseus = require('colyseus');

module.exports = class DrawRoom extends colyseus.Room {

    onInit () {
        // maximum of 10 concurrent players
        this.maxClients = 10;

        // this demo doesn't use the room state
        this.setPatchRate(null);
    }

    onJoin (client, options) {
    }

    onMessage (client, message) {
        // convert "x0,y0" to number
        let [ x, y ] = message.split(",").map((v) => Number(v));

        // broadcast draw message
        this.broadcast({
            type: "draw",
            x: x,
            y: y
        }, {
            // exclude the client who sent the message from the broadcast
            except: client
        });
    }

    onLeave (client) {
    }

}
