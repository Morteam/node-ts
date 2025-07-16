import { Router } from 'express';
import { AuthController } from './controller';
import { AuthService } from '../services/auth.services';

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    const authService = new AuthService()
    const authController = new AuthController(authService)

    router.post('/login', authController.login );
    router.post('/register', authController.register );
    router.get('/validate-email/:token', authController.validateEmail );

    return router;
  }
}
