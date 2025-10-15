import type { Handler } from '@netlify/functions';

const handler: Handler = async (event, context) => {
  const myImportantVariable = process.env.MY_IMPORTANT_VARIABLE;

  console.log('myImportantVariable from logs ', myImportantVariable)

  if(!myImportantVariable) {
    throw 'Missing MyImportantVariable'; // Without so much data than new Error()
  }

  return {
    body: JSON.stringify({
      message: "Hello World 2",
      myImportantVariable,
    }),
    headers: {
      'Content-Type': 'application/json'
    },
    statusCode: 200,
  }
}

export { handler }
