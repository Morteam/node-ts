import { UserModel } from '../../data';
import { bcryptAdapter, JWTAdapter } from '../../adapters';
import { CustomError, RegisterUserDTO, LoginUserDTO, UserEntity } from '../../domain';

export class AuthService {
  constructor(){}

  public async registerUser(registerUserDTO: RegisterUserDTO) {
    const userExists = await UserModel.findOne({ email: registerUserDTO.email })

    if (userExists) throw CustomError.badRequest('The user already exists')

    try {
      const user = new UserModel({
        ...registerUserDTO,
        pass: bcryptAdapter.hash(registerUserDTO.pass)
      })

      await user.save();

      const userEntity = UserEntity.fromObject(user).props
      const { pass, ...restUser } = userEntity;

      // Encrypt the pass

      // JWT -- auth user --
      const token = await JWTAdapter.generateToken({ id: user.id })
      if (!token) throw CustomError.internalServer('Error while creating a token')

      // Confirm with emai

      return { user: restUser, token};
    } catch(error) {
      throw CustomError.internalServer(`${error}`)
    }
  }

  public async loginUSer(loginUserDTO: LoginUserDTO) {
    const user = await UserModel.findOne({ email: loginUserDTO.email })

    if (!user) throw CustomError.badRequest('The user does not exists')

    try {
      const hasMatchPass = bcryptAdapter.compare(loginUserDTO.pass, user.pass)
  
      if (!hasMatchPass) throw CustomError.badRequest('The pass is not correct')

      const userEntity = UserEntity.fromObject(user).props
      const { pass, ...restUser } = userEntity;

      const token = await JWTAdapter.generateToken({ id: user.id })
      if (!token) throw CustomError.internalServer('Error while creating a token')
  
      return {
        user: restUser,
        token
      }
    } catch(error) {
     throw CustomError.internalServer(`${error}`)
    }
  }
}
