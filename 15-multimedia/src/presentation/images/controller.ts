import { Request, Response } from 'express'
import { CustomError } from '../../domain'
import { ImagesService } from '../services'

export class ImagesController {
  constructor(
    private readonly imagesService: ImagesService
  ){}

   // ?? Should be an utils 🤔
  private handleError = (error: unknown, res: Response) => {
    if( error instanceof CustomError) {
      return res.status(error.statusCode).json({error: error.message})
    }

    return res.status(500).json({error: 'Internal server error'})
  }

  getImage = (req: Request, res: Response) => {
    const { type, imageId } = req.params;

    this.imagesService.getImage(type, imageId)
      .then(imagePath => res.sendFile(imagePath))
      .catch(error => this.handleError(error, res) )
  }
}
