import { Response, Request } from 'express'
import { CustomError, PaginationDTO } from '../../domain';
import { ProductService } from '../services';

export class ProductController {
  constructor(
    public readonly productService: ProductService
  ){}

  private handleError = (error: unknown, res: Response) => {
    if( error instanceof CustomError) {
      return res.status(error.statusCode).json({error: error.message})
    }

    return res.status(500).json({error: 'Internal server error'})
  };

  getProducts = async (req: Request, res: Response) => {
    console.log('Getting products...');

    this.productService.getProducts()
      .then(products => res.status(200).json(products))
      .catch(error => this.handleError(error, res))
  }

  createProduct = async (req: Request, res: Response) => {
    console.log('Creating product...');

    this.productService.createProduct()
      .then( product => res.status(201).json(product) )
      .catch( error => this.handleError(error, res) )
  }
}
