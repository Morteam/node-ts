import { Response, Request } from 'express'
import { CategoryModel } from '../../data'
import { CreateCategoryDTO, CustomError, PaginationDTO, UserEntity } from '../../domain'

export class CategoryService {
  constructor(){}

  public async getCategories(paginationDTO: PaginationDTO) {
    const {page, limit} = paginationDTO;

    try {
      const [total, categories] = await Promise.all([
        CategoryModel.countDocuments(),
        CategoryModel.find()
          .skip((page - 1) * limit)
          .limit(limit)
      ])

      // Like to do this
      // const categories = await CategoryModel.find()
      //   .skip((page - 1) * limit)
      //   .limit(limit)
      // if(!categories || categories.length < 0) throw CustomError.notFound('No categories')

      // const total = await CategoryModel.countDocuments()
  
      const categoriesMap = categories.map(category => ({
        id: category._id,
        name: category.name,
        available: category.available,
      }))

      return {
        page,
        limit,
        total,
        prev: (page - 1 > 0 ? `/api/categories?${page - 1}&${limit}`: null),
        next: `/api/categories?${page + 1}&${limit}`,
        categories: categoriesMap
      };
    } catch(error) {
      throw CustomError.internalServer('Internal server error')
    }
  }

  public async createCategory(createCategoryDTO: CreateCategoryDTO, user: UserEntity) {
    const categoryExists = await CategoryModel.findOne({ name: createCategoryDTO.name })

    if(categoryExists) throw CustomError.badRequest('Category already exists')

    try {
      // ! Technical Debt: Shouldn't use props when we need call user.id or any prop 
      const category = new CategoryModel({
        ...createCategoryDTO,
        user: user.props.id
      })

      await category.save()

      return {
        id: category.id,
        name: category.name,
        available: category.available
      }
    } catch(error) {
      throw CustomError.internalServer(`${error}`)
    }
  }
}
