import { Request, Response } from 'express'
import { prisma } from '../../data'
import { CreateTodoDTO, UpdateTodoDTO } from '../../domain/dtos'


interface Todo {
  id: number
  text: string
  completedAt: Date | null
}

export class TodoController {
  constructor(){
    // ID
  }

  public getTodos = async (req: Request, res: Response) => {
    const allTodos = await prisma.todo.findMany()

    res.json(allTodos)
    return
  }

  public getTodoById = async (req: Request, res: Response) => {
    const id = +req.params.id
    if (isNaN(id)) {
      res.status(400).json(`The id is not a number`)
      return
    }

    const todoItem = await prisma.todo.findFirst({
      where: {
        id
      }
    })

    todoItem
      ? res.json(todoItem)
      : res.status(404).json(`The task with id ${id} does not exist`)
    return
  }

  public createTodo = async (req: Request, res: Response) => {
    const [error, createTodoDTO] = CreateTodoDTO.create(req.body)

    if(error) {
      res.status(400).json(`The text value is required`)
      return
    }

    const newTodo = await prisma.todo.create({
      data: createTodoDTO!
    })
    
    res.json(newTodo)
  }

  public updateTodoById = async (req: Request, res: Response) => {
    const id = +req.params.id
  
    if(isNaN(id)) {
      res.status(400).json(`The id is not a number`)
      return
    }

    const todoItem = await prisma.todo.findFirst({
      where: {
        id
      }
    })
    
    if(!todoItem) {
      res.status(404).json(`The task with id ${id} not found`)
      return
    }

    const [error, updateTodoDTO] = UpdateTodoDTO.create({
      ...req.body,
      id
    })

    if(error) {
      res.status(400).json(error)
    }

    const todoUpdated = await prisma.todo.update({
      where: {
        id
      },
      data: updateTodoDTO!.values
    })

    res.json(todoUpdated)
  }

  public deleteTodoById = async (req: Request, res: Response) => {
    const id = +req.params.id
    if(isNaN(id)) {
      res.status(400).json(`The id is not a number`)
      return
    }

    const todoItem = await prisma.todo.findFirst({
      where: {
        id
      }
    })
    
    if(!todoItem) {
      res.status(404).json(`The task with id ${id} not found`)
      return
    }

    const todoDeleted = await prisma.todo.delete({
      where: {
        id
      }
    })

    if(todoDeleted) {
      res.json({
        message: 'Todo removed',
        todoDeleted
      })  
    } else {
      res.status(404).json(`The task with id ${id} not found`)
    }

  }
}
