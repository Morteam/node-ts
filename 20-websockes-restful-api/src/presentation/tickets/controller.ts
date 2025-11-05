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
    const lastTicketNumber = this.ticketService.lastTicketNumber
    res.json(lastTicketNumber)
  }

  public pendingTickets = async (req: Request, res: Response) => {
    const pendingTickets = this.ticketService.pendingTickets
    res.json(pendingTickets)
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

    const drawTicket = this.ticketService.drawTicket(desk)
    res.json(drawTicket)
  }

  public ticketFinish = async (req: Request, res: Response) => {
    const { ticketId } = req.params
    
    const ticket = this.ticketService.onFinishedTicket(ticketId)
    res.json(ticket)
  }

  public workingOn = async (req: Request, res: Response) => {
    const workingOnTickets = this.ticketService.lastWorkingOnTickets
    res.json(workingOnTickets)
  }
}