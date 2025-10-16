import type { Handler } from '@netlify/functions';

const onStar = (payload: any):string => { //? Any?
  const { action, repository, sender, starred_at } = payload;

  return `User ${sender.login} ${action} star on ${repository.full_name} ${starred_at ? `at ${starred_at}` : ''}`
}

const onIssue = (payload: any):string => { //? Any?
  const { action, issue, repository, sender } = payload;

  return `User ${sender.login} ${action} issue called ${issue.title} on ${repository.full_name}`
}

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
  const githubEvent = event.headers['x-github-event'] ?? 'unknown'
  const payload = JSON.parse(event.body ?? '{}');
  let message:string = '';

  switch(githubEvent) {
    case 'star':
      message = onStar(payload)

      break;
    case 'issues':
      message = onIssue(payload)

      break;
    default:
      console.log(`Unknown event ${githubEvent}`)

      break;
  }

  await notify(message)

  return {
    body: JSON.stringify({ message: "Hello World 2" }),
    headers: {
      'Content-Type': 'application/json'
    },
    statusCode: 200,
  }
}

export { handler }
