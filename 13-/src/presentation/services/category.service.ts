import { CategoryModel } from '../../data'
import { CreateCategoryDTO, CustomError, UserEntity } from '../../domain'

export class CategoryService {
  constructor(){}

  public async getCategories() {
    try {
      const categories = await CategoryModel.find()
      if(!categories || categories.length < 0) throw CustomError.notFound('No categories')
  
      const categoriesMap = categories.map(category => ({
        id: category._id,
        name: category.name,
        available: category.available,
      }))

      return categoriesMap;
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
