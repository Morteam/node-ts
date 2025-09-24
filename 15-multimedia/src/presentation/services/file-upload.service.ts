export class FileUploadServices {
  constructor(){}

  /* //! It's not recommended to save files to the FileSystem, instead consider saving them into a bucket like AWS or maybe Google Drive  */
  private checkFolder( folderPath: string ) {
    throw new Error('Not implemented')
  }

  uploadSingle(file: File, folder: string = 'uploads', validExtensions: string[] = ['png', 'jpg', 'jpeg', 'gif']) {

  }

  uploadMultiple(file: File[], folder: string = 'uploads', validExtensions: string[] = ['png', 'jpg', 'jpeg', 'gif']) {
    
  }

}