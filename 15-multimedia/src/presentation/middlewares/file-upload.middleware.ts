import { NextFunction, Request, Response } from 'express';

export class FileUploadMiddleware {
  static containFiles(req: Request, res: Response, next: NextFunction) {
    if(!req.files || Object.keys(req.files).length === 0) return res.status(400).json({ error: 'No files were selected' })

    // Node works as follows, if an image arrives it gives us an Object, if 2 or more arrive it gives us an Array, then We normalize this in req.body.files
    req.body.files = !Array.isArray(req.files.file)
      ? [req.files.file]
      : req.files.file

    next()
  }
}