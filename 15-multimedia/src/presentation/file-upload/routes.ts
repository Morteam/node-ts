import { Router } from 'express'
import { FileUploadController } from './controller'
import { FileUploadService } from '../services'
import { Uuid } from '../../adapters'
import { FileUploadMiddleware } from '../middlewares/file-upload.middleware'
import { TypeMiddleware } from '../middlewares/type.middleware'

const VALID_TYPES = ['users', 'products', 'categories']

export class FileUploadRoutes {
  static get routes(): Router {
    const router = Router()

    const uuid = Uuid.v4
    const fileUploadService = new FileUploadService(uuid)
    const fileUploadController = new FileUploadController(fileUploadService)

    router.use(FileUploadMiddleware.containFiles)
    router.use(TypeMiddleware.validTypes(VALID_TYPES))
    router.post('/single/:type', fileUploadController.uploadFile)
    router.post('/multiple/:type', fileUploadController.uploadMultipleFiles)

    return router
  }
}