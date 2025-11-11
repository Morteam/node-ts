import { UUIDAdapter } from '../../domain/adapters/uuid.adapter';
import { Ticket } from '../../domain/interfaces/tickets';
import { WSSService } from './wss.service';

const { v4 } = UUIDAdapter

export class TicketService {
  private readonly tickets: Ticket[] = [
    { id: v4(), number: 1, createdAt: new Date(), done: false },
    { id: v4(), number: 2, createdAt: new Date(), done: false },
    { id: v4(), number: 3, createdAt: new Date(), done: false },
    { id: v4(), number: 4, createdAt: new Date(), done: false },
    { id: v4(), number: 5, createdAt: new Date(), done: false },
    { id: v4(), number: 6, createdAt: new Date(), done: false },
  ]

  private readonly wssService: WSSService;

  constructor(){
    this.wssService = WSSService.instance
  }

  private workingOnTickets: Ticket[] = []

  public get allTickets():Ticket[] {
    return this.tickets
  }

  public get pendingTickets():Ticket[] {  
    return this.tickets.filter(ticket => !ticket.handleAtDesk)
  }

  public get lastWorkingOnTickets():Ticket[] {
    console.log(this.workingOnTickets)
    return this.workingOnTickets.slice(0,4)
  }

  public get lastTicketNumber() {
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

    this.tickets.push(ticket)
    this.onTicketNumberChanged()

    return ticket
  }

  public drawTicket(desk: string) {
    const ticket = this.tickets.find(ticket => !ticket.handleAtDesk && !ticket.done)

    if(!ticket) return {status: 'error', message: 'There are not pending tickets'}

    this.workingOnTickets.unshift({...ticket})

    ticket.handleAtDesk = desk

    this.onTicketNumberChanged()

    return {status: 'ok', ticket}
  }

  private onTicketNumberChanged() {
    this.wssService.sendMessage('on-ticket-count-changed', {
      pending: this.pendingTickets.length
    })
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

    this.workingOnTickets = this.workingOnTickets.filter(ticket => ticket.id !== id)

    return {status: 'ok'}
  }

}
