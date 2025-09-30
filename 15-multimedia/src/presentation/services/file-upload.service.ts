import path from 'path'
import fs from 'fs'

import { UploadedFile } from 'express-fileupload';

import { Uuid } from '../../adapters';
import { CustomError } from '../../domain';

export class FileUploadService {
  constructor(
    private readonly uuid = Uuid.v4
  ){}

  /* //! It's not recommended to save files to the FileSystem, instead consider saving them into a bucket like AWS or maybe Google Drive  */
  private checkFolder( folderPath: string ) {
    if(!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath)
    }
  }

  async uploadSingle(file: UploadedFile, folder: string = 'uploads', validExtensions: string[] = ['png', 'jpg', 'jpeg', 'gif']) {
    const destination = path.resolve(__dirname, '../../../', folder)
    const fileExtension = file.mimetype.split('/').at(1) || ''
    if(!validExtensions.includes(fileExtension)) throw CustomError.badRequest(`Invalid file extension, valid ones ${validExtensions}`)

    const fileName = `${this.uuid()}.${fileExtension}`

    try {
      this.checkFolder(destination)

      file.mv(`${destination}/${fileName}`)

      return fileName;
    } catch(error) {
      console.error(error)
    }
  }

  async uploadMultiple(file: UploadedFile[], folder: string = 'uploads', validExtensions: string[] = ['png', 'jpg', 'jpeg', 'gif']) {
    
  }

}