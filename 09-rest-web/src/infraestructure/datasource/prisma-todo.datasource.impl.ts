import { prisma } from '../../data'; // In this case is prisma
import { CreateTodoDTO, TodoDatasource, TodoEntity, UpdateTodoDTO } from '../../domain'

// PRISMA
export class PrismaTodoDatasourceImpl implements TodoDatasource {
  async create(createTodoDTO: CreateTodoDTO): Promise<TodoEntity> {
    const newTodo = await prisma.todo.create({
      data: createTodoDTO!
    })

    return TodoEntity.mapFromObject(newTodo)
  }

  async getAll(): Promise<TodoEntity[]> {
    const allTodos = await prisma.todo.findMany()

    return allTodos?.map(todo => TodoEntity.mapFromObject(todo));
  }

  async getById(id: number): Promise<TodoEntity> {
    const todoItem = await prisma.todo.findFirst({
      where: {
        id
      }
    })

    if(!todoItem) throw `The task with id ${id} does not exist`

    return TodoEntity.mapFromObject(todoItem)
  }

  async updateById(updateTodoDTO: UpdateTodoDTO): Promise<TodoEntity> {
     await this.getById(updateTodoDTO.id)

    const todoUpdated = await prisma.todo.update({
      where: {
        id: updateTodoDTO.id
      },
      data: updateTodoDTO!.values
    })

    if(!todoUpdated) throw `The task with id ${updateTodoDTO.id} does not exist`

    return TodoEntity.mapFromObject(todoUpdated)
  }

  async deleteById(id: number): Promise<TodoEntity> {
    await this.getById(id)

    const todoDeleted = await prisma.todo.delete({
      where: {
        id
      }
    })

    return TodoEntity.mapFromObject(todoDeleted)
  }

}