import { Router } from 'express';
import { ImagesService } from '../services';
import { ImagesController } from './controller';
// import { TypeMiddleware } from '../middlewares/type.middleware';

// ?? Unify with the File Upload
// const VALID_TYPES = ['users', 'products', 'categories']

export class ImagesRouter {
  static get routes(): Router {
    const router = Router()

    const imagesService = new ImagesService()
    const imagesController = new ImagesController(imagesService)

    // router.use(TypeMiddleware.validTypes(VALID_TYPES)) //! Should be able to use this middleware here
    router.get('/:type/:imageId', imagesController.getImage)

    return router;
  }
}
