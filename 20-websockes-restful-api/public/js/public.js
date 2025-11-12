const getWorkingOn = async () => {
  const workingOnArr = await fetch('/api/ticket/working-on')
    .then(response => response.json())

  return workingOnArr
}

const printWorkingOn = async (uiElements) => {
  const {ticketLabels, deskLabels} = uiElements

  const workingOnItems = await getWorkingOn()

  workingOnItems.forEach((item, index) => {
    ticketLabels[index].innerText = item.number
    deskLabels[index].innerText = item.handleAtDesk
  });
}

function connectToWebSockets(socketProps) {
  const { uiElements } = socketProps

  const socket = new WebSocket( 'ws://localhost:3000/ws' );

  socket.onmessage = ( event ) => {
    const { type, payload } = JSON.parse(event.data)

    if(type === 'on-working-changed') {
      printWorkingOn(uiElements)
    }
  };

  socket.onclose = ( event ) => {
    console.log( 'Connection closed' );
    setTimeout( () => {
      console.log( 'retrying to connect' );
      connectToWebSockets(socketProps);
    }, 1500 );

  };

  socket.onopen = ( event ) => {
    console.log( 'Connected' );
  };
}

const startDOM = async () => {
  const ticketLabels = document.querySelectorAll('td span[id*=lbl-ticket]')
  const deskLabels = document.querySelectorAll('td span[id*=lbl-desk]')

  const uiElements = {
    ticketLabels,
    deskLabels,
  }

  await printWorkingOn(uiElements)

  connectToWebSockets({ uiElements })
}

(() => document.addEventListener('DOMContentLoaded', startDOM))()