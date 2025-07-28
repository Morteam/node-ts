import { UserModel } from '../../data';
import { CustomError, RegisterUserDTO, UserEntity } from '../../domain';

export class AuthService {
  constructor(){}

  public async registerUser(registerUserDTO: RegisterUserDTO) {
    const userExists = await UserModel.findOne({ email: registerUserDTO.email })

    if (userExists) throw CustomError.badRequest('The user already exists')

    try {
      const user = new UserModel(registerUserDTO)
      await user.save();

      // TODO: review it
      const userEntity = UserEntity.fromObject(user).props
      const { pass, ...restUSer } = userEntity;

      // Encrypt the pass

      // JWT -- auth user --

      // Confirm with emai

      return { user: restUSer, token: 'ABC'};
    } catch(error) {
      throw CustomError.internalServer(`${error}`)
    }
  }
}
