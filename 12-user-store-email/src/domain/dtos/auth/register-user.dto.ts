import { regularExps } from '../../../config';

export class RegisterUserDTO {
  private constructor(
    public name: string,
    public email: string,
    public pass: string,
  ) {}

  static create(object: {[key:string]: any}): [string?, RegisterUserDTO?] {
    const { name, email, pass } = object;

    if (!name) return ['Missing Name'];
    if (!email) return ['Missing Email'];
    if(!regularExps.email.test(email)) return ['Invalid email'];
    if (!pass) return ['Missing Pass'];
    if (pass.length < 6) return ['Pass too short'];

    return [, new RegisterUserDTO(name, email, pass)];
  }
}
