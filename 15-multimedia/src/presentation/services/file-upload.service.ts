import path from 'path'
import fs from 'fs'
import { UploadedFile } from 'express-fileupload';

export class FileUploadService {
  constructor(){}

  /* //! It's not recommended to save files to the FileSystem, instead consider saving them into a bucket like AWS or maybe Google Drive  */
  private checkFolder( folderPath: string ) {
    if(!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath)
    }
  }

  async uploadSingle(file: UploadedFile, folder: string = 'uploads', validExtensions: string[] = ['png', 'jpg', 'jpeg', 'gif']) {
    const destination = path.resolve(__dirname, '../../../', folder)
    const fileExtension = file.mimetype.split('/').at(1)
    
        console.log(file)
  
        console.log(validExtensions)
        console.log(destination)

    try {
      this.checkFolder(destination)

      file.mv(`${destination}/my-image.${fileExtension}`)
    } catch(error) {
      console.error(error)
    }
  }

  async uploadMultiple(file: UploadedFile[], folder: string = 'uploads', validExtensions: string[] = ['png', 'jpg', 'jpeg', 'gif']) {
    
  }

}