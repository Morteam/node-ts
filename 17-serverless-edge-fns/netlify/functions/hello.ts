// import type { Context } from '@netlify/functions';

// export default async (req: Request, context: Context) => {
//   return new Response("Hello, world!")
// }

import type { Handler } from "@netlify/functions";

const handler: Handler = async (event, context) => {
  return {
    body: JSON.stringify({ message: "Hello World" }),
    headers: {
      'Content-Type': 'application/json'
    },
    statusCode: 200,
  }
}

export { handler }
