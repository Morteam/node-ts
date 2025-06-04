import { TodoEntity } from '../../entities/todo.entity';
import { TodoRepository } from '../../repositories/todo.repository';

export interface GetTodoUseCaseInt {
  execute(id: number): Promise<TodoEntity>
}

export class GetTodoUseCase implements GetTodoUseCaseInt {
  constructor(
    private readonly todoRepository: TodoRepository
  ){}

  execute(id: number): Promise<TodoEntity> {
    return this.todoRepository.getById(id)
  }
}
