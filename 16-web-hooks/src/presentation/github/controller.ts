import { Request, Response } from 'express'
import { GithubService } from '../services/github.service.js';

export class GithubController {
  constructor(
    private readonly githubService: GithubService
  ){}

  webhookHandler = (req: Request, res: Response) => {
    const payload = req.body;
    const githubEvent = req.header('x-github-event') ?? 'unknown'
    const signature = req.header('x-hub-signature-256') ?? 'unknown'
    let message: string = '';

    //?? Maybe we need a Mapper

    switch(githubEvent) {
      case 'star':
        message = this.githubService.onStar(payload)

        break;
      case 'issues':
        message = this.githubService.onIssue(payload)

        break;
      default:
        console.log(`Unknown event ${githubEvent}`)
  
        break;
    }

    // // console.log('Webhook in action ', payload, githubEvent, signature)
    // console.log(JSON.stringify(payload))
    console.log(message)

    res.status(202).send('Accepted')
  }
}