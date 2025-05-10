import { Request, Response } from 'express'


interface Todo {
  id: number
  text: string
  date: Date | null
}

const TODOS: Array<Todo> = [
  {
    id: 1,
    text: 'Buy milk',
    date: new Date()
  },
  {
    id: 2,
    text: 'Buy bread',
    date: null
  },
  {
    id: 3,
    text: 'Buy cheese v5',
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

  public createTodo = (req: Request, res: Response) => {
    const { text } = req.body

    if(!text) {
      res.status(400).json(`The text value is required`)
    }

    const newTask: Todo = {
      id: TODOS.length + 1,
      text,
      date: null
    }

    TODOS.push(newTask)
    
    res.json(newTask)
  }

}
