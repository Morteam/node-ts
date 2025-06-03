import { Router } from 'express';
import { TodoController } from './controller';
import { PrismaTodoDatasourceImpl } from '../../infraestructure/datasource/prisma-todo.datasource.impl';
import { TodoRepositoryImpl } from '../../infraestructure/repositories/todo.repository.impl';

export class TodoRoutes {
  static get routes(): Router {
    const router = Router();
    const prismaTodoDataSource = new PrismaTodoDatasourceImpl()
    const todoRepository = new TodoRepositoryImpl(prismaTodoDataSource)
  
    const todoController =  new TodoController(todoRepository)

    router.get('/:id', todoController.getTodoById)
    router.get('/', todoController.getTodos)

    router.post('/', todoController.createTodo)

    router.put('/:id', todoController.updateTodoById)

    router.delete('/:id', todoController.deleteTodoById)

    return router;
  }
}
