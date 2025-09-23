import { UserModel } from '../../data';
import { envs } from '../../config';
import { CustomError, RegisterUserDTO, LoginUserDTO, UserEntity } from '../../domain';
import { bcryptAdapter, JWTAdapter } from '../../adapters';
import { EmailService } from './email.service';

export class AuthService {
  constructor(
    private readonly emailService: EmailService
  ){}

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

      this.sendEmailValidationLink(user.email)

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

  
  public validateEmail = async (token: string) => {
    const payload = await JWTAdapter.validateToken(token)

    if (!payload) throw CustomError.unauthorized('Invalid token')

    const { email } = payload as {email: string};

    if (!email) throw CustomError.internalServer('Email not in token')

    const user = await UserModel.findOne({ email })

    if (!user) throw CustomError.internalServer('Email not exist')

    user.emailValidated = true;
    await user.save()

    return email;
  }

  private sendEmailValidationLink = async (email: string) => {
    const token = await JWTAdapter.generateToken({ email })
    if(!token) throw CustomError.internalServer('Error while creating a token')

    const link = `${envs.WEBSERVICE_URL}/auth/validate-email/${token}`

    const htmlBody = `
      <h1>Validate your email</h1>
      <p>Please go to the next link for validate it</p>
      <a href="${link}">Go ahead</a>
    `

    const options = {
      to: email,
      subject: 'Validate email',
      htmlBody,
    }

    const emailWasSent = await this.emailService.sendEmail(options)

    if(!emailWasSent) throw CustomError.internalServer('Error while sending email')

    return true
  }
}
