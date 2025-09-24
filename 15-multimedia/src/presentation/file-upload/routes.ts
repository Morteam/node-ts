import { Router } from 'express'
import { FileUploadController } from './controller'

export class FileUploadRoutes {
  static get routes(): Router {
    const router = Router()

    const fileUploadController = new FileUploadController()

    router.use('/single/:type', fileUploadController.uploadFile)
    router.use('/multiple/:type', fileUploadController.uploadMultipleFiles)

    return router
  }
}