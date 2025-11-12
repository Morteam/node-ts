let workingTicket = null

const loadInitialCount = () => {
  const REQUEST_PATH = '/api/ticket/pending'

  return fetch(REQUEST_PATH)
    .then(response => response.json())
    .catch(console.error)
}

const checkCountPendings = (uiElements, count = 0) => {
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

  console.log('CAA' , count)
}

const loadInitialCountAndRender = async (uiElements) => {
  const initialCount = await loadInitialCount()

  checkCountPendings(uiElements, initialCount.length || 0)
}

function connectToWebSockets(socketProps) {
  const { uiElements } = socketProps

  const socket = new WebSocket( 'ws://localhost:3000/ws' );

  socket.onmessage = ( event ) => {
    const { type, payload } = JSON.parse(event.data)

    if(type === 'on-ticket-count-changed') {
      console.log('BAA' , payload.pending)
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

const getDeskNumber = () => {
  const searchParams = new URLSearchParams(window.location.search)

  if(!searchParams.has('desk')) {
    window.location = 'index.html'
    throw new Error('Desk is required')
  }

  return searchParams.get('desk')
}

const getTicket = async (uiElements) => {
  await finishTicket(uiElements)

  const { currentTicketLabel } = uiElements;

  const deskNumber = getDeskNumber()

  const { status, ticket, message } = await fetch(`/api/ticket/draw/${deskNumber}`)
    .then(response => response.json())

  if(status === 'error') {
    currentTicketLabel.innerText = message
  }

  workingTicket = ticket
  currentTicketLabel.innerText = ticket.number
}

const finishTicket = async (uiElements) => {
  const { currentTicketLabel } = uiElements;

  if(!workingTicket) return

  const { status, message } = await fetch(`/api/ticket/done/${workingTicket.id}`, {
    method: 'PUT'
  })
    .then(response => response.json())

  if(status === 'ok') {
    workingTicket = null;
    currentTicketLabel.innerText = 'Nobody'
  }
}

const startDOM = async () => {
  const labelPendingEl = document.querySelector('#lbl-pending')
  const titleEl = document.querySelector('h1')
  const noMoreAlert = document.querySelector('.alert')
  const btnDraw = document.querySelector('#btn-draw')
  const btnFinish = document.querySelector('#btn-done')
  const currentTicketLabel = document.querySelector('h4 small')

  const uiElements = {
    labelPendingEl,
    titleEl,
    noMoreAlert,
    btnDraw,
    btnFinish,
    currentTicketLabel
  }

  const deskNumber = getDeskNumber()
  updateTitleText(titleEl, deskNumber)

  loadInitialCountAndRender(uiElements)
  connectToWebSockets({uiElements});

  btnDraw.addEventListener('click', () => getTicket(uiElements))
  btnFinish.addEventListener('click', () => finishTicket(uiElements))
}

(() => document.addEventListener('DOMContentLoaded', startDOM))()
