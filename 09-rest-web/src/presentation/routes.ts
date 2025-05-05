import { Router } from 'express'

export class AppRoutes {
  static get routes(): Router {
    const router = Router()

    router.get('/api/todos', (req, res) => {
      res.json([
        {
          id: 1,
          name: 'Buy milk',
          date: new Date()
        },
        {
          id: 2,
          name: 'Buy bread',
          date: null
        },
        {
          id: 3,
          name: 'Buy cheese',
          date: new Date()
        },
      ])
    })

    return router
  }
}
