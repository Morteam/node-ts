import path from 'path'
import fs from 'fs'

import { CustomError } from '../../domain'

export class ImagesService {
  getImage = async (type: string, imageId: string) => {
    const imagePath = path.resolve(__dirname, `../../../uploads/${type}/${imageId}`)

    if(!fs.existsSync(imagePath)) throw CustomError.badRequest(`Image ${imageId} doesn't exist`)

    return imagePath
  }
}
