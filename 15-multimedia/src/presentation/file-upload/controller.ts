import { Request, Response } from 'express'
import { CustomError } from '../../domain'
import { FileUploadService } from '../services'

//! Temp
import { UploadedFile } from 'express-fileupload'

export class FileUploadController {
  constructor(
    public readonly fileUploadService: FileUploadService
  ){}

  private handleError = (error: unknown, res: Response) => {
    if( error instanceof CustomError) {
      return res.status(error.statusCode).json({error: error.message})
    }

    return res.status(500).json({error: 'Internal server error'})
  }

  uploadFile = (req: Request, res: Response) => {
    if(!req.files || Object.keys(req.files).length === 0) return res.status(400).json({ error: 'No files were selected' })

    const file = req.files.file;

    this.fileUploadService.uploadSingle(file as UploadedFile, 'uploads')
      .then(uploaded => res.json(uploaded))
      .catch(error => this.handleError(error, res) )
  }

  uploadMultipleFiles = (req: Request, res: Response) => {
    res.json('Upload Multiple Files')
  }
}