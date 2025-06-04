import { UpdateTodoDTO } from '../../dtos';
import { TodoEntity } from '../../entities/todo.entity';
import { TodoRepository } from '../../repositories/todo.repository';

export interface UpdateTodoUseCaseInt {
  execute(dto: UpdateTodoDTO): Promise<TodoEntity>
}

export class UpdateTodoUseCase implements UpdateTodoUseCaseInt {
  constructor(
    private readonly todoRepository: TodoRepository
  ){}

  execute(dto: UpdateTodoDTO): Promise<TodoEntity> {
    return this.todoRepository.updateById(dto)
  }
}
