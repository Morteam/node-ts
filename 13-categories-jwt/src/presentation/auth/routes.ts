import { Router } from 'express';
import { envs } from '../../config';
import { AuthController } from './controller';
import { AuthService, EmailService } from '../services';

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    const emailService = new EmailService(
      envs.MAILER_SERVICE,
      envs.MAILER_EMAIL,
      envs.MAILER_SECRET_KEY,
      envs.ALLOW_SEND_EMAIL
    )
    const authService = new AuthService(emailService)
    const authController = new AuthController(authService)

    router.post('/login', authController.login );
    router.post('/register', authController.register );
    router.get('/validate-email/:token', authController.validateEmail );

    return router;
  }
}
