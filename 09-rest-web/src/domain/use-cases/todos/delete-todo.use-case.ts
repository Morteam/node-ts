import { TodoEntity } from '../../entities/todo.entity';
import { TodoRepository } from '../../repositories/todo.repository';

export interface DeleteTodoUseCaseInt {
  execute(id: number): Promise<TodoEntity>
}

export class DeleteTodoUseCase implements DeleteTodoUseCaseInt {
  constructor(
    private readonly todoRepository: TodoRepository
  ){}

  execute(id: number): Promise<TodoEntity> {
    return this.todoRepository.deleteById(id)
  }
}
