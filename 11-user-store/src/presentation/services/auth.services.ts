import { UserModel } from '../../data';
import { CustomError, RegisterUserDTO } from '../../domain';

export class AuthService {
  constructor(){}

  public async registerUser(registerUserDTO: RegisterUserDTO) {
    const userExists = await UserModel.findOne({ email: registerUserDTO.email })

    if (userExists) throw CustomError.badRequest('The user already exists')

    const [error, registerUser] = RegisterUserDTO.create(registerUserDTO);

    if (error) throw CustomError.badRequest(error)

    return registerUser;
  }
}
