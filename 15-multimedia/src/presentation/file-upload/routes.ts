import { Router } from 'express'
import { FileUploadController } from './controller'
import { FileUploadService } from '../services'
import { Uuid } from '../../adapters'

export class FileUploadRoutes {
  static get routes(): Router {
    const router = Router()

    const uuid = Uuid.v4
    const fileUploadService = new FileUploadService(uuid)
    const fileUploadController = new FileUploadController(fileUploadService)

    router.post('/single/:type', fileUploadController.uploadFile)
    router.post('/multiple/:type', fileUploadController.uploadMultipleFiles)

    return router
  }
}