import { WebSocket, WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', function connection(ws) {
  // wss refers to all WS
  // ws refer to only the instance (Tab browser is only instance)

  console.log('WS: Client Connected')
  // console.log('WS ', ws)

  ws.on('error', console.error);

  // Only the instance
  // ws.on('message', function message(data) {
  //   console.log('WS: received: %s', data);

  //   const payload = {
  //     type: 'custom-message',
  //     version: 1,
  //     data: data.toString(),
  //   }

  //   ws.send(JSON.stringify(payload))
  // });

  ws.on('message', function message(data) {
    console.log('WS: received: %s', data);

    // Send to all clients
    // wss.clients.forEach((client) => {
    //   if(client.readyState === WebSocket.OPEN) {
    //     const payload = {
    //       type: 'custom-message',
    //       version: 1,
    //       data: data.toString(),
    //     }

    //     client.send(JSON.stringify(payload))
    //   }
    // })

    // Send to all clients except itself
    wss.clients.forEach((client) => {
      if(client !== ws && client.readyState === WebSocket.OPEN) {
        const payload = {
          type: 'custom-message-no-itself',
          version: 1,
          data: data.toString(),
        }

        client.send(JSON.stringify(payload))
      }
    })
  });

  ws.on('close', () => {
    console.log('Cliente Disconnect')
  })
});

console.log('Port http://localhost:3000')
