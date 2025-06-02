import { CreateTodoDTO, UpdateTodoDTO } from '../dtos';
import { TodoEntity } from '../entities/todo.entity';

// somehting like an interface. it's a mold
export abstract class TodoDatasource {
  abstract create(createTodoDTO: CreateTodoDTO): Promise<TodoEntity>
  // Todo: pagination?
  abstract getAll(): Promise<TodoEntity[]>
  abstract getById(id: number): Promise<TodoEntity>
  abstract updateById(updateTodoDTO: UpdateTodoDTO): Promise<TodoEntity>
  abstract deleteById(id: number): Promise<TodoEntity>
}