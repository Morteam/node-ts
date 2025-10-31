import { Request, Response } from 'express'

export class TicketController {
  
  //DI, WSS Service
  constructor(){}

  public getTickets = async (req: Request, res: Response) => {
    res.json('getTickets')
  }

  public getLastTicketNumber = async (req: Request, res: Response) => {
    res.json('getLastTicketNumber')
  }

  public pendingTickets = async (req: Request, res: Response) => {
    res.json('pendingTickets')
  }

  public createTicket = async (req: Request, res: Response) => {
    res.json('createTicket')
  }

  public drawTicket = async (req: Request, res: Response) => {
    res.json('drawTicket')
  }

  public ticketFinish = async (req: Request, res: Response) => {
    res.json('ticketFinish')
  }

  public workingOn = async (req: Request, res: Response) => {
    res.json('workingOn')
  }
}