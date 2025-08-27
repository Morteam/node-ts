import { Response, Request } from 'express'
import { CustomError } from '../../domain';
import { CategoryService } from '../services';

export class CategoryController {
  constructor(
    public readonly categoryService: CategoryService
  ){}

  private handleError = (error: unknown, res: Response) => {
    if( error instanceof CustomError) {
      return res.status(error.statusCode).json({error: error.message})
    }

    return res.status(500).json({error: 'Internal server error'})
  };

  getCategories = async (req: Request, res: Response) => {
    await this.categoryService.getCategories()

    return res.status(200).json({ text: 'Sample' })
  }
}
