import { Request, Response } from 'express'
import { prisma } from '../../data'
import { CreateTodoDTO, UpdateTodoDTO } from '../../domain/dtos'
import { TodoRepository } from '../../domain'


interface Todo {
  id: number
  text: string
  completedAt: Date | null
}

export class TodoController {
  constructor(
    private readonly todoRepository: TodoRepository
  ){}

  public getTodos = async (req: Request, res: Response) => {
    const allTodos = await this.todoRepository.getAll()

    res.json(allTodos)
    return
  }

  public getTodoById = async (req: Request, res: Response) => {
    const id = +req.params.id

    if (isNaN(id)) {
      res.status(400).json(`The id is not a number`)
      return
    }

    try {
      const todoItem = await this.todoRepository.getById(id)

      res.json(todoItem)
    } catch(error) {
      res.status(404).json(`The task with id ${id} does not exist`)
    }
  }

  public createTodo = async (req: Request, res: Response) => {
    const [error, createTodoDTO] = CreateTodoDTO.create(req.body)

    if(error) {
      res.status(400).json(`The text value is required`)
      return
    }

    const newTodo = await this.todoRepository.create(createTodoDTO!)
    
    res.json(newTodo)
  }

  public updateTodoById = async (req: Request, res: Response) => {
    const id = +req.params.id
  
    if(isNaN(id)) {
      res.status(400).json(`The id is not a number`)
      return
    }

    const [error, updateTodoDTO] = UpdateTodoDTO.create({
      ...req.body,
      id
    })

    if(error) {
      res.status(400).json(error)
    }

    try {
      const todoUpdated = await this.todoRepository.updateById(updateTodoDTO!)
      res.json(todoUpdated)
    } catch(error) {
      res.status(404).json(`The task with id ${id} not found`)
    }

  }

  public deleteTodoById = async (req: Request, res: Response) => {
    const id = +req.params.id
    if(isNaN(id)) {
      res.status(400).json(`The id is not a number`)
      return
    }
  
    try {
      const todoDeleted = await this.todoRepository.deleteById(id)

      res.json({
        message: 'Todo removed :)',
        todoDeleted
      })  
    } catch(error) {
      res.status(404).json(`The task with id ${id} not found`)
    }

  }
}
