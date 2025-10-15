import type { Handler } from "@netlify/functions";

const handler: Handler = async (event, context) => {
  return {
    body: JSON.stringify({ message: "Hello World 2" }),
    headers: {
      'Content-Type': 'application/json'
    },
    statusCode: 200,
  }
}

export { handler }
