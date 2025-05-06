import { Request, Response } from 'express'


export class TodoController {
  constructor(){
    // ID
  }

  public getTodos = (req: Request, res: Response) => {
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
        name: 'Buy cheese v4',
        date: new Date()
      },
    ])
  }
}
