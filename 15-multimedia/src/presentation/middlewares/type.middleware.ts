import { NextFunction, Request, Response } from 'express'

export class TypeMiddleware {
  static validTypes(validTypes: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
      // const type = req.params.type; // When we need use the USE method for routes we access to the params the different way, we use the below way
      const type = req.url.split('/').at(2) || '';

      if( !validTypes.includes(type) ) {
        return res.status(400).json({ error: `Invalid type: ${type}, valid ones ${validTypes}` })
      }

      next()
    }
  }
}
