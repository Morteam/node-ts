import { Response, Request } from 'express'

import { RegisterUserDTO } from '../../domain';
import { AuthService } from '../services';

export class AuthController {
  constructor(
    public readonly authService: AuthService
  ){}

  register = async (req: Request, res: Response) => {
    //? I moved the DTO to the Service, review it

    await this.authService.registerUser(req.body)
      .then(user => res.status(201).json(user))
      .catch()

    // temp

    // const [error, registerUser] = RegisterUserDTO.create(req.body);

    // if(error) return res.status(400).json({error})

    // res.status(201).json(registerUser)
  }

  login = (req: Request, res: Response) => {
    res.status(200).json('Login');
  }

  validateEmail = (req: Request, res: Response) => {
    res.status(200).json('ValidateEmail');
  }
}