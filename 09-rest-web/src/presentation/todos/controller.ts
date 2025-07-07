import { Request, Response } from 'express'
import { CreateTodoDTO, UpdateTodoDTO } from '../../domain/dtos'
import { CreateTodoUseCase, CustomError, DeleteTodoUseCase, GetTodosUseCase, GetTodoUseCase, TodoRepository, UpdateTodoUseCase } from '../../domain'


interface Todo {
  id: number
  text: string
  completedAt: Date | null
}

export class TodoController {
  constructor(
    private readonly todoRepository: TodoRepository
  ){}

  private handleErrors = (res: Response, error: unknown) => {
    if(error instanceof CustomError) {
      const { statusCode, message } = error;
      res.status(statusCode).json({ error: message })
      return;
    }

    res.status(500).json({ error: 'Server error' })
  }

  public getTodos = (req: Request, res: Response) => {
    new GetTodosUseCase(this.todoRepository)
      .execute()
      .then(todos => res.json(todos))
      .catch((error) => this.handleErrors(res, error))
  }

  public getTodoById = async (req: Request, res: Response) => {
    const id = +req.params.id

    if (isNaN(id)) {
      res.status(400).json(`The id is not a number`)
      return
    }

    new GetTodoUseCase(this.todoRepository)
      .execute(id)
      .then(todoItem => res.json(todoItem))
      .catch((error) => this.handleErrors(res, error))
  }

  public createTodo = async (req: Request, res: Response) => {
    const [error, createTodoDTO] = CreateTodoDTO.create(req.body)

    if(error) {
      res.status(400).json(`The text value is required`)
      return
    }

    new CreateTodoUseCase(this.todoRepository)
      .execute(createTodoDTO!)
      .then(todoItem => res.status(201).json(todoItem))
      .catch((error) => this.handleErrors(res, error))
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

    new UpdateTodoUseCase(this.todoRepository)
      .execute(updateTodoDTO!)
      .then(todoItem => res.json(todoItem))
      .catch((error) => this.handleErrors(res, error))
  }

  public deleteTodoById = async (req: Request, res: Response) => {
    const id = +req.params.id
    if(isNaN(id)) {
      res.status(400).json(`The id is not a number`)
      return
    }

    new DeleteTodoUseCase(this.todoRepository)
      .execute(id)
      .then(todoItem => res.json({
        message: 'Todo removed :)',
        todoItem
      }))
      .catch((error) => this.handleErrors(res, error))

  }
}
