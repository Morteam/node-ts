import { envs } from '../../config'
import { CategoryModel, ProductModel, UserModel, MongoDatabase, categorySchema } from '../mongo'
import { seedData } from './data'

const randomBetween0andX = (x: number) => {
  return Math.floor(Math.random() * x)
}

/* Data simulated for testing purposes */
(async ()=> {
  MongoDatabase.connect({
    dbName: envs.MONGO_DB_NAME,
    mongoURL: envs.MONGO_URL
  })

  await main()

  MongoDatabase.disconnect()
})()

async function main () {
  // Clean All
  await Promise.all([
    UserModel.deleteMany(),
    CategoryModel.deleteMany(),
    ProductModel.deleteMany(),
  ])

  // Create Users
  const users = await UserModel.insertMany(seedData.users);

  // Create Categories
  const categories = await CategoryModel.insertMany(
    seedData.categories.map(category => {
      return {
        ...category,
        user: users[randomBetween0andX(4)]._id
      }
    })
  )

  // Create Products
  await ProductModel.insertMany(
    seedData.products.map(product => {
      return {
        ...product,
        category: categories[21]._id,
        user: users[randomBetween0andX(4)]._id
      }
    })
  )

  console.log('SEEDED')
}
