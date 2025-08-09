import { regularExps } from '../../../config';

export class LoginUserDTO {
  private constructor(
    public email: string,
    public pass: string
  ){}

  static create(object: {[key: string]: any}): [string?, LoginUserDTO?] {
    const { email, pass } = object;
  
    if (!email) return ['Missing Email'];
    if(!regularExps.email.test(email)) return ['Invalid email'];
    if (!pass) return ['Missing Pass'];

    return [, new LoginUserDTO(email, pass)]
  }
}