import { UUIDAdapter } from '../../domain/adapters/uuid.adapter';
import { Ticket } from '../../domain/interfaces/tickets';

const { v4 } = UUIDAdapter

// const v4 = () => 'sfdsf45'

export class TicketService {
  private readonly tickets: Ticket[] = [
    { id: v4(), number: 1, createdAt: new Date(), done: false },
    { id: v4(), number: 2, createdAt: new Date(), done: false },
    { id: v4(), number: 3, createdAt: new Date(), done: false },
    { id: v4(), number: 4, createdAt: new Date(), done: false },
    { id: v4(), number: 5, createdAt: new Date(), done: false },
    { id: v4(), number: 6, createdAt: new Date(), done: false },
  ]

  private readonly workingOnTickets: Ticket[] = []

  public get allTickets():Ticket[] {
    return this.tickets
  }

  public get pendingTickets():Ticket[] {  
    console.log('pendingTickets')

    return this.tickets.filter(ticket => !ticket.handleAtDesk)
  }

  public get lastWorkingOnTickets():Ticket[] {
    console.log('lastWorkingOnTickets')

    return this.workingOnTickets.slice(0,4)
  }

  public get lastTicketNumber() {
    console.log('lastTicketNumber')

    return this.tickets.length > 0 ? this.tickets[this.tickets.length - 1].number : 0;
  }

  public createTicket() {
    const ticket: Ticket = {
      id: v4(),
      number: this.lastTicketNumber + 1,
      createdAt: new Date(),
      done: false,
      handelAt: undefined,
      handleAtDesk: undefined
    }

    console.log('createTicket')

    this.tickets.push(ticket)
    // TODO: Communicate with WS

    return ticket
  }

  public drawTicket(desk: string) {
    const ticket = this.tickets.find(ticket => !ticket.handleAtDesk)

    if(!ticket) return {status: 'error', message: 'There are not pending tickets'}

    this.workingOnTickets.unshift({...ticket})

    console.log('drawTicket')

    // TODO: Communicate with WS
    ticket.handleAtDesk = desk
    return {status: 'ok'}
  }

  public onFinishedTicket(id: string) {
    const ticket = this.tickets.find(ticket => ticket.id === id)

    if(!ticket) return {status: 'error', message: 'Ticket not found'}

    console.log('onFinishedTicket')

    this.tickets.map(ticketItem => {
      if(ticketItem.id === ticket.id) {
        ticketItem.done = true

        //* Other way
        // return {
        //   ...ticketItem,
        //   done: true
        // }
      }
    })

    return {status: 'ok'}
  }

}
