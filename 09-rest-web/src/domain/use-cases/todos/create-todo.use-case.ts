import { CreateTodoDTO } from '../../dtos';
import { TodoEntity } from '../../entities/todo.entity';
import { TodoRepository } from '../../repositories/todo.repository';

export interface CreateTodoUseCaseInt {
  execute(dto: CreateTodoDTO): Promise<TodoEntity>
}

export class CreateTodoUseCase implements CreateTodoUseCaseInt {
  constructor(
    private readonly todoRepository: TodoRepository
  ){}

  execute(dto: CreateTodoDTO): Promise<TodoEntity> {
    return this.todoRepository.create(dto)
  }
}
