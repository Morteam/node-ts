import { Request, Response } from 'express'

export class GithubController {
  constructor(

  ){}

  webhookHandler = (req: Request, res: Response) => {
    const payload = req.body;
    const githubEvent = req.header('x-github-event') ?? 'unknown'
    const signature = req.header('x-hub-signature-256') ?? 'unknown'

    console.log('Webhook in action ', payload, githubEvent, signature)

    res.status(202).send('Accepted')
  }
}