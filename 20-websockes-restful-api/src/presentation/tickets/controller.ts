import { Request, Response } from 'express'
import { TicketService } from '../services/ticket.service'

export class TicketController {
  
  //DI, WSS Service
  constructor(
    private readonly ticketService: TicketService
  ){}

  public getTickets = async (req: Request, res: Response) => {
    const tickets = this.ticketService.allTickets
    res.json({ tickets })
  }

  public getLastTicketNumber = async (req: Request, res: Response) => {
    this.ticketService.lastTicketNumber
    res.json('getLastTicketNumber')
  }

  public pendingTickets = async (req: Request, res: Response) => {
    this.ticketService.pendingTickets
    res.json('pendingTickets')
  }

  public createTicket = async (req: Request, res: Response) => {
    const newTicket = this.ticketService.createTicket()
    res.status(201).json({
      status: 'ok',
      newTicket
    })
  }

  public drawTicket = async (req: Request, res: Response) => {
    const { desk } = req.params

    this.ticketService.drawTicket(desk)
    res.json(desk)
  }

  public ticketFinish = async (req: Request, res: Response) => {
    const { ticketId } = req.params
    
    this.ticketService.onFinishedTicket(ticketId)
    res.json(ticketId)
  }

  public workingOn = async (req: Request, res: Response) => {
    this.ticketService.lastWorkingOnTickets
    res.json('workingOn')
  }
}