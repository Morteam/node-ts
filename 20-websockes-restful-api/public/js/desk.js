const loadInitialCount = () => {
  const REQUEST_PATH = '/api/ticket/pending'

  return fetch(REQUEST_PATH)
    .then(response => response.json())
    .catch(console.error)
}

const loadInitialCountAndRender = async (element) => {
  const initialCount = await loadInitialCount()

  element.innerHTML = initialCount.length || 0
}


function connectToWebSockets(socketProps) {
  const { labelEl } = socketProps

  const socket = new WebSocket( 'ws://localhost:3000/ws' );

  socket.onmessage = ( event ) => {
    const { type, payload } = JSON.parse(event.data)
    
    if(type === 'on-ticket-count-changed') {
      labelEl.innerHTML = payload?.pending;
    }
  };

  socket.onclose = ( event ) => {
    console.log( 'Connection closed' );
    setTimeout( () => {
      console.log( 'retrying to connect' );
      connectToWebSockets();
    }, 1500 );

  };

  socket.onopen = ( event ) => {
    console.log( 'Connected' );
  };

}

(() => {
  document.addEventListener('DOMContentLoaded', async () => {
    const labelPendingEl = document.querySelector('#lbl-pending')

    loadInitialCountAndRender(labelPendingEl)
    connectToWebSockets({
      labelEl: labelPendingEl
    });
  })
})()
