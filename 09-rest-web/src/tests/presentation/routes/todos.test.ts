import request from 'supertest';
import { testServer } from '../../test-server';

describe('Todos routing testing', () => {

  beforeAll(async () => {
    await testServer.start()
  })

  afterAll(() => {
    testServer.close()
  })

  test('Should return todos api/todos', async () => {
    const BASE_ENDPOINT = '/api/todos'

    const response = await request( testServer.getApp )
      .get(BASE_ENDPOINT)
      .expect(200)

    console.log(response.body)

  })

})
