import { Response, Request } from 'express'

import { CustomError, RegisterUserDTO } from '../../domain';
import { AuthService } from '../services';

export class AuthController {
  constructor(
    public readonly authService: AuthService
  ){}

  register = async (req: Request, res: Response) => {
    const [error, registerUser] = RegisterUserDTO.create(req.body);

    if (error) throw CustomError.badRequest(error)

    await this.authService.registerUser(registerUser!)
      .then(user => res.status(201).json(user))
      .catch()

      return 'All good'
  }

  login = (req: Request, res: Response) => {
    res.status(200).json('Login');
  }

  validateEmail = (req: Request, res: Response) => {
    res.status(200).json('ValidateEmail');
  }
}