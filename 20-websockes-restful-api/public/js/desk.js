const loadInitialCount = () => {
  const REQUEST_PATH = '/api/ticket/pending'

  return fetch(REQUEST_PATH)
    .then(response => response.json())
    .catch(console.error)
}

const checkCountPendings = (uiElements, count) => {
  const { labelPendingEl, noMoreAlert } = uiElements

  const HIDE_CSS_CLASS = 'd-none'

  if(count < 1) {
    noMoreAlert.classList.remove(HIDE_CSS_CLASS)
    labelPendingEl.classList.add(HIDE_CSS_CLASS)
  } else {
    noMoreAlert.classList.add(HIDE_CSS_CLASS)
    labelPendingEl.classList.remove(HIDE_CSS_CLASS)
    labelPendingEl.innerHTML = count
  }

  console.log('AAAAhhh 4')
}

const loadInitialCountAndRender = async (uiElements) => {
  const initialCount = await loadInitialCount()

  checkCountPendings(uiElements, initialCount.length || 0)
}

function connectToWebSockets(socketProps) {
  const { uiElements } = socketProps
  const { labelPendingEl } = uiElements

  const socket = new WebSocket( 'ws://localhost:3000/ws' );

  socket.onmessage = ( event ) => {
    const { type, payload } = JSON.parse(event.data)

    if(type === 'on-ticket-count-changed') {
      checkCountPendings(uiElements, payload?.pending)
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

const updateTitleText = (titleEl, title) => {
  titleEl.innerText = title
}

const startDOM = async () => {
  const labelPendingEl = document.querySelector('#lbl-pending')
  const titleEl = document.querySelector('h1')
  const noMoreAlert = document.querySelector('.alert')

  const uiElements = {
    labelPendingEl,
    titleEl,
    noMoreAlert
  }

  const searchParams = new URLSearchParams(window.location.search)
  
  if(!searchParams.has('desk')) {
    window.location = 'index.html'
    throw new Error('Desk is required')
  }

  const deskNumber = searchParams.get('desk')
  updateTitleText(titleEl, deskNumber)

  loadInitialCountAndRender(uiElements)
  connectToWebSockets({uiElements});
}

(() => document.addEventListener('DOMContentLoaded', startDOM))()
