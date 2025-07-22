import { CustomError } from "../errors/custom.error"

interface UserEntityProps {
  id: string,
  name: string,
  email: string,
  emailValidated: boolean,
  pass: string,
  role: string[],
  img?: string,
}

export class UserEntity {
  constructor(public props: UserEntityProps){}

  static fromObject(object: {[key:string]: any}) {
    const {id, _id, name, email, emailValidated, pass, role, img} = object

    console.log('obj ', object)

    if(!id && !_id) {
      throw CustomError.badRequest('The Id is required, It is missing')
    }

    if(!name) {
      throw CustomError.badRequest('The name is required, It is missing')
    }

    if(!email) {
      throw CustomError.badRequest('The email is required, It is missing')
    }

    if(!pass) {
      throw CustomError.badRequest('The pass is required, It is missing')
    }

    if(emailValidated === undefined) {
      throw CustomError.badRequest('Missing email validated')
    }

    if(!role) {
      throw CustomError.badRequest('The Id role required, It is missing')
    }

    // if(!img) {
    //   throw CustomError.badRequest('The Id img required, It is missing')
    // }

    const userEntityParams = {
      id: id || _id,
      name,
      email,
      emailValidated,
      pass,
      role,
      img,
    }

    return new UserEntity(userEntityParams)
  }
}
