import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';

const app = express();
const port = 8999;

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

class handler {
	static message(ws: WebSocket, message: String) {
		//log the received message and send it back to the client
		//console.log('received: %s', message);
			
		// check if we broadcast to all clients	
		if (message.length > 10 && message.substr(0, 10) == "broadcast:" ) {
			message = message.substr(10); 

			//send back the message to the other clients
			wss.clients.forEach(client => {
				if (client != ws) {
					client.send(`Hello, broadcast message -> ${message}`);
				}	
			});
			ws.send(`Hello, you sent -> ${message}`);
			
		// send message to single client
		} else {
			ws.send(`Hello, you sent -> ${message}`);
		}
	}
}

wss.on('connection', (ws: WebSocket) => {

	//connection is up, let's add a simple simple event
	ws.on('message', (message: string) => {
		handler.message(ws, message);
	});

	//send immediatly a feedback to the incoming connection	
	ws.send('ACK');
});

//start our server
server.listen(process.env.PORT || port, () => {
	console.log(`Server started on port ${server.address().port}.`);
	console.log(`Use different port by setting the environment variable PORT`);
	console.log(`$ export PORT=4800 # before starting the server`);
}); 
