import { Response, Request } from 'express'
// import { PaginationDTO } from '../../domain'

export class ProductService {
  constructor(){}

  public async getProducts() {
    // console.log(paginationDTO)

    return 'getProducts from ProductService'
  }

  public async createProduct() {
    // console.log(paginationDTO)

    return 'createProduct from ProductService'
  }
}
