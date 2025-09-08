import bcrypt, { compareSync, genSaltSync, hashSync } from 'bcryptjs'

export const bcryptAdapter = {
  hash: (pass: string) => {
    const salt = genSaltSync()
    return hashSync(pass, salt)
  },
  compare: (pass: string, hashed: string) => {
    return compareSync(pass, hashed)
  }
};
