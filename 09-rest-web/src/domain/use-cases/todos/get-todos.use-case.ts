import { TodoEntity } from '../../entities/todo.entity';
import { TodoRepository } from '../../repositories/todo.repository';

export interface GetTodosUseCaseInt {
  execute(): Promise<TodoEntity[]>
}

export class GetTodosUseCase implements GetTodosUseCaseInt {
  constructor(
    private readonly todoRepository: TodoRepository
  ){}

  execute(): Promise<TodoEntity[]> {
    return this.todoRepository.getAll()
  }
}
