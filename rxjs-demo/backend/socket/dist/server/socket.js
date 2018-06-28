"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const app = express();
const port = 8999;
//initialize a simple http server
const server = http.createServer(app);
//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });
class handler {
    static message(ws, message) {
        //log the received message and send it back to the client
        //console.log('received: %s', message);
        // check if we broadcast to all clients	
        if (message.length > 10 && message.substr(0, 10) == "broadcast:") {
            message = message.substr(10);
            //send back the message to the other clients
            wss.clients.forEach(client => {
                if (client != ws) { // send to other clients
                    client.send(`${ws.id}: ${message}`);
                }
            });
            ws.send(`${ws.id}: ${message}`);
            // send message to single client
        }
        else {
            ws.send(`Local: ${message}`);
        }
    }
}
wss.on('connection', (ws, req) => {
    ws.id = req.headers['sec-websocket-key'];
    console.log(req.headers['sec-websocket-key']);
    /*
    for(let e of Object.getOwnPropertyNames(ws)) {
        console.log(e);
    }
    */
    //connection is up, let's add a simple simple event
    ws.on('message', (message) => {
        handler.message(ws, message);
    });
    //send immediatly a feedback to the incoming connection	
    ws.send(ws.id);
});
//start our server
server.listen(process.env.PORT || port, () => {
    console.log(`Server started on port ` + String(server.address().port));
    console.log(`Use different port by setting the environment variable PORT`);
    console.log(`$ export PORT=4800 # before starting the server`);
});
//# sourceMappingURL=socket.js.map