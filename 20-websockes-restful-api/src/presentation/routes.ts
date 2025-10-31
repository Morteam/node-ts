import { Router } from 'express'
import { TicketRoutes } from './tickets/routes'

export class AppRoutes {
  static routes(): Router {
    const router = Router()

    router.use('/api/ticket', TicketRoutes.routes)

    return router
  }
}
