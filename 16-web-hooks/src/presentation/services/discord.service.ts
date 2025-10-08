import { envs } from '../../config/envs.js';

export class DiscordService {
  private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL

  constructor() {}

  async notify(message: string) {
    const body = {
      content: message,
      embeds: [
        {
          image: {
            url: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExczIxYmVxajljZnVpZW1qdnNxYWd6czM0ZHI5enJtZXdoczZobDU1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eXsvqcT2M3dinAhucV/giphy.gif'
          }
        }
      ]
    }

    const resp = await fetch(this.discordWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    if (!resp.ok) {
      console.error('Error sending message in Discord')
      return false;
    }

    return true;
  }
}
