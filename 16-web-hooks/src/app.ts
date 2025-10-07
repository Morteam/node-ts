import express from 'express'

import { envs } from './config/envs.js'
import { GithubController } from './presentation/github/controller.js'
import { GithubService } from './presentation/services/github.service.js'

(() => {
  main()
})()

function main() {
  const app = express()
  const githubService = new GithubService()
  const githubController = new GithubController(githubService)

  app.use( express.json() ) // Serialize JSON

  app.post('/', (req, res) => {
    res.json('Path')
  })
  app.get('/', (req, res) => {
    res.json('Path')
  })
  app.post('/api/github', githubController.webhookHandler)

  app.listen(envs.PORT, () => {
    console.log(`App running in port ${envs.PORT}`)
  })
}
