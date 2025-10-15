import type { Handler } from '@netlify/functions';

async function notify(message: string) {
  const body = {
    content: message
  }

  const resp = await fetch(process.env.DISCORD_WEBHOOK_URL ?? '', {
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

const handler: Handler = async (event, context) => {

  await notify('Hi from the dev handler')

  console.log('hello from logs Github')

  return {
    body: JSON.stringify({ message: "Hello World 2" }),
    headers: {
      'Content-Type': 'application/json'
    },
    statusCode: 200,
  }
}

export { handler }
