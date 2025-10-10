import express from 'express'

import { envs } from './config/envs.js'
import { GithubController } from './presentation/github/controller.js'
import { GithubService } from './presentation/services/github.service.js'
import { DiscordService } from './presentation/services/discord.service.js'
import { GithubSha256Middleware } from './presentation/middlewares/github-sha256.middleware.js'

(() => {
  main()
})()

function main() {
  const app = express()
  const githubService = new GithubService()
  const discordService = new DiscordService()
  const githubController = new GithubController(githubService, discordService)

  app.use( express.json() ) // Serialize JSON

  app.post('/', (req, res) => {
    res.json('Path')
  })
  app.get('/', (req, res) => {
    res.json('Path')
  })
  app.post('/api/github', [
      GithubSha256Middleware.verifyGithubSignature
    ],
    githubController.webhookHandler
)

  app.listen(envs.PORT, () => {
    console.log(`App running in port ${envs.PORT}`)
  })
}
