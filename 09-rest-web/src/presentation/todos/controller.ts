import { Request, Response } from 'express'


interface Todo {
  id: number
  text: string
  completedAt: Date | null
}

const TODOS: Array<Todo> = [
  {
    id: 1,
    text: 'Buy milk',
    completedAt: new Date()
  },
  {
    id: 2,
    text: 'Buy bread',
    completedAt: null
  },
  {
    id: 3,
    text: 'Buy cheese v5',
    completedAt: new Date()
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
      completedAt: null
    }

    TODOS.push(newTask)
    
    res.json(newTask)
  }

  public updateTodoById = (req: Request, res: Response) => {
    const id = +req.params.id
    if(isNaN(id)) {
      res.status(400).json(`The id is not a number`)
      return
    }

    const todoItem = TODOS.find(task => task.id === id)
    if(!todoItem) {
      res.status(404).json(`The task with id ${id} not found`)
      return
    }

    const { text, completedAt } = req.body

    //! 🫤 ???
    todoItem.text = text || todoItem.text
    // TODO: Improve this
    todoItem.completedAt = (completedAt === null || completedAt === 'null')
      ? null
      : completedAt
        ? new Date(completedAt)
        : todoItem.completedAt
    
    // Other way
    // text && (todoItem.text = text)
    // date && (todoItem.date = date)

    // // Other way TODOS.forEach(todo => {
    //   if(todo.id === id) return {
    //     ...todo,
    //     ...(text && (todoItem.text = text)),
    //     ...(date && (todoItem.date = date))
    //   }
    // })

    res.json(todoItem)
  }
}
