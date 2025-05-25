import { Request, Response } from 'express'


interface Todo {
  id: number
  text: string
  completedAt: Date | null
}

const ARR_TODOS: Array<Todo> = [
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
  {
    id: 4,
    text: 'Go home',
    completedAt: new Date()
  },
]

export class TodoController {
  constructor(){
    // ID
  }

  public getTodos = (req: Request, res: Response) => {
    res.json(ARR_TODOS)
    return
  }

  public getTodoById = (req: Request, res: Response) => {
    const id = +req.params.id
    if (isNaN(id)) {
      res.status(400).json(`The id is not a number`)
      return
    }

    const todoItem = ARR_TODOS.find(task => task.id === id)

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

    const lastTodo = ARR_TODOS[ARR_TODOS.length - 1]
    const idNewTodo = lastTodo.id + 1

    const newTask: Todo = {
      id: idNewTodo,
      text,
      completedAt: null
    }

    ARR_TODOS.push(newTask)
    
    res.json(newTask)
  }

  public updateTodoById = (req: Request, res: Response) => {
    const id = +req.params.id
    if(isNaN(id)) {
      res.status(400).json(`The id is not a number`)
      return
    }

    const todoItem = ARR_TODOS.find(task => task.id === id)
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

    // ARR_TODOS.forEach(todo => {
    //   if(todo.id === id) return {
    //     ...todo,
    //     ...(text && (todoItem.text = text)),
    //     ...(date && (todoItem.date = date))
    //   }
    // })

    res.json(todoItem)
  }

  public deleteTodoById = (req: Request, res: Response) => {
    const id = +req.params.id
    if(isNaN(id)) {
      res.status(400).json(`The id is not a number`)
      return
    }

    const todoToDelete = ARR_TODOS.find(task => task.id === id)
    if(!todoToDelete) {
      res.status(404).json(`The task with id ${id} not found`)
      return
    }

    const indexTodoToDelete = ARR_TODOS.indexOf(todoToDelete)
    ARR_TODOS.splice(indexTodoToDelete, 1)

    // Other Way
    // ARR_TODOS.forEach((todo, i) => {
    //   if(todo.id === todoToDelete.id) {
    //     ARR_TODOS.splice(i, 1)
    //   }
    // })

    res.json({
      message: 'Todo removed',
    })  
  }
}
