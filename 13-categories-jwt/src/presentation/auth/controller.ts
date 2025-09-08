import { Response, Request } from 'express'

import { CustomError, LoginUserDTO, RegisterUserDTO } from '../../domain';
import { AuthService } from '../services';

export class AuthController {
  constructor(
    public readonly authService: AuthService
  ){}

  private handleError = (error: unknown, res: Response) => {
    if( error instanceof CustomError) {
      return res.status(error.statusCode).json({error: error.message})
    }

    return res.status(500).json({error: 'Internal server error'})
  };

  register = async (req: Request, res: Response) => {
    const [error, registerUser] = RegisterUserDTO.create(req.body);

    if (error) return res.status(400).json({ error })

    await this.authService.registerUser(registerUser!)
      .then(user => res.status(201).json(user))
      .catch(error => this.handleError(error, res))
  }

  login = async (req: Request, res: Response) => {
    const [error, loginUser] = LoginUserDTO.create(req.body)

    if (error) return res.status(400).json({ error })

    await this.authService.loginUSer(loginUser!)
      .then(user => res.status(200).json(user))
      .catch(error => this.handleError(error, res))
  }

  validateEmail = async (req: Request, res: Response) => {
    const { token } = req.params;

    await this.authService.validateEmail(token)
      .then(user => res.status(200).json('Email was validated properly'))
      .catch(error => this.handleError(error, res))
  }
}