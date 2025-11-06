const getLastTicketNumber = async () => {
  const REQUEST_PATH = '/api/ticket/last'

  return await fetch(REQUEST_PATH)
    .then(response => response.json())
    .catch(console.error)
}

const getLastTicketNumberAndRender = async (element) => {
  const lastTicketNumber = await getLastTicketNumber()

  if(!isNaN(lastTicketNumber) && element) {
    element.innerHTML = lastTicketNumber
  }
}

const createNewTicket = () => {
  const REQUEST_PATH = '/api/ticket'

  return fetch(REQUEST_PATH, {
    method: 'POST'
  })
    .then(response => response.json())
    .catch(console.error)
}

const createNewTicketAndUpdate = async (element) => {
  const { newTicket } = await createNewTicket()

  element.innerHTML = newTicket?.number
}

(() => {
  document.addEventListener('DOMContentLoaded', async () => {
    const spanEl = document.querySelector('#lbl-new-ticket')
    const buttonEl = document.querySelector('button')

    getLastTicketNumberAndRender(spanEl)

    buttonEl.addEventListener('click', e => createNewTicketAndUpdate(spanEl))
  })
})()
