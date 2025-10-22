import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', function connection(ws) {
  console.log('WS: Client Connected')
  // console.log('WS ', ws)

  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('WS: received: %s', data);

    const payload = {
      type: 'custom-message',
      version: 1,
      data: data.toString(),
    }

    ws.send(JSON.stringify(payload))
  });

  // setInterval(() => {
  //   ws.send('Hi from the server!');
  // }, 2000)

  ws.on('close', () => {
    console.log('Cliente Disconnect')
  })
});

console.log('Port http://localhost:3000')
