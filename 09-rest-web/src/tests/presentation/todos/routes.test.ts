import request from 'supertest';
import { testServer } from '../../test-server';
import { prisma } from '../../../data';

describe('Todos routing testing', () => {

  beforeAll(async () => {
    await testServer.start()
  })

  afterAll(async () => {
    testServer.close()
  })

  const MOCKED_TODO_1 = {
    text: 'Hi from the Mercury'
  }

  const MOCKED_TODO_2 = {
    text: 'Hi from the Venus'
  }

  test('Should return todos api/todos', async () => {
    const BASE_ENDPOINT = '/api/todos'

    await prisma.todo.deleteMany()

    await prisma.todo.createMany({
      data: [MOCKED_TODO_1, MOCKED_TODO_2]
    })

    const { body } = await request( testServer.getApp )
      .get(BASE_ENDPOINT)
      .expect(200)

    expect(body).toBeInstanceOf(Array)
    expect(body.length).toBe(2)
    expect(body[0]).toBe(MOCKED_TODO_1)
    expect(body[1]).toBe(MOCKED_TODO_2)

  })

})
