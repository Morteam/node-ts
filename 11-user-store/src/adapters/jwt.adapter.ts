import jwt from 'jsonwebtoken';
import { envs } from '../config/index'

// Create Inversion de dependencias para JWT_SEED
const JWT_SEED = envs.JWT_SEED;

export class JWTAdapter {
  constructor(){}

  static async generateToken(payload: any, duration: any | string | number = '2h') {
 
    return new Promise((resolve) => {
      jwt.sign(payload, JWT_SEED, {
        expiresIn: duration
      }, (err, token) => {
        return resolve( err ? null : token )
      })
    })
  }

  static validateToke(token: string) {
    return ;
  }
};
