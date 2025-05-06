import { Request, Response } from 'express'


const TODOS = [
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
    name: 'Buy cheese v5',
    date: new Date()
  },
]

export class TodoController {
  constructor(){
    // ID
  }

  public getTodos = (req: Request, res: Response) => {
    res.json(TODOS)
    return
  }

  public getTodoById = (req: Request, res: Response) => {
    const id = +req.params.id
    if (isNaN(id)) {
      res.status(400).json(`The id is not a number`)
      return
    }

    const todoItem = TODOS.find(task => task.id === id)

    todoItem
      ? res.json(todoItem)
      : res.status(404).json(`The task with id ${id} does not exist`)
    return
  }

}
