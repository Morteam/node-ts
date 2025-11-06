const getLastTicketNumber = () => {
  const REQUEST_PATH = 'http://localhost:3000/api/ticket/last'

  return fetch(REQUEST_PATH)
    .then(response => response.json())
    .catch(console.error)
}

(() => {
  document.addEventListener('DOMContentLoaded', async () => {
    const spanEl = document.querySelector('#lbl-new-ticket')

    const lastTicketNumber = await getLastTicketNumber()

    if(!isNaN(lastTicketNumber) && spanEl) {
      spanEl.innerHTML = lastTicketNumber
    }
  })
})()
