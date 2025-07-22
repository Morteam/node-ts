import { UserModel } from '../../data';
import { CustomError, RegisterUserDTO } from '../../domain';

export class AuthService {
  constructor(){}

  public async registerUser(registerUserDTO: RegisterUserDTO) {
    const userExists = await UserModel.findOne({ email: registerUserDTO.email })

    if (userExists) throw CustomError.badRequest('The user already exists')

    try {
      const user = new UserModel(registerUserDTO)
      await user.save(); 

      // Encrypt the pass

      // JWT -- auth user --

      // Confirm with emai

      return user;
    } catch(error) {
      throw CustomError.internalServer(`${error}`)
    }
  }
}
