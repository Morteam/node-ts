import { Response, Request } from 'express'

import { ProductModel } from '../../data'
import { CreateProductDTO, CustomError, PaginationDTO } from '../../domain'

export class ProductService {
  constructor(){}

  public async getProducts(paginationDTO: PaginationDTO) {
    const { page, limit } = paginationDTO;

    try {
      const [ total, products ] = await Promise.all([
        ProductModel.countDocuments(),
        ProductModel.find()
          .skip((page - 1) * limit)
          .limit(limit)
          // TODO: Populate
      ])

      return  {
        page,
        limit,
        total,
        prev: (page - 1 > 0 ? `/api/products?${page - 1}&${limit}`: null),
        next: `/api/products?${page + 1}&${limit}`,
        products
      }
    } catch(error) {
      throw CustomError.internalServer(`${error}`)
    }
  }

  public async createProduct( createProductDTO: CreateProductDTO ) {
    const productExists = await ProductModel.findOne({ name: createProductDTO.name })

    if( productExists ) throw CustomError.badRequest('Product already exists')

    try {
      const product = new ProductModel({ ...createProductDTO })

      await product.save()

      return product
    } catch(error) {
      throw CustomError.internalServer(`${error}`)
    }
  }
}
