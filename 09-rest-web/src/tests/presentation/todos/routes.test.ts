import request from 'supertest';
import { testServer } from '../../test-server';
import { prisma } from '../../../data';

describe('Todos routing testing', () => {

  beforeAll(async () => {
    await testServer.start()
  })

  beforeEach(async () => {
    await prisma.todo.deleteMany()
  })

  afterAll(() => {
    testServer.close()
  })

  const BASE_ENDPOINT = '/api/todos'

  const MOCKED_TODO_1 = {
    text: 'Hi from the Mercury'
  }

  const MOCKED_TODO_2 = {
    text: 'Hi from the Venus'
  }

  const MOCKED_TODO_3 = {
    text: 'Hi from the Earth'
  }

  test('Should return todos api/todos', async () => {
    await prisma.todo.createMany({
      data: [MOCKED_TODO_1, MOCKED_TODO_2]
    })

    const { body } = await request( testServer.getApp )
      .get(BASE_ENDPOINT)
      .expect(200)

    expect(body).toBeInstanceOf(Array)
    expect(body.length).toBe(2)
    expect(body[0].text).toBe(MOCKED_TODO_1.text)
    expect(body[1].text).toBe(MOCKED_TODO_2.text)
  })

  test('Should return a todo api/todos/:id', async () => {
    const todo = await prisma.todo.create({
      data: MOCKED_TODO_3
    })

    const { body } = await request(testServer.getApp)
      .get(`${BASE_ENDPOINT}/${todo.id}`)
      .expect(200)

    expect(body).toEqual({
      id: todo.id,
      text: MOCKED_TODO_3.text,
      completedAt: null
    })
  })

  
  test('Should not return a 404 not found in api/todos/:id when the todo does not exist', async () => {
    const FAKE_ID = 99999999999

    const { body } = await request(testServer.getApp)
      .get(`${BASE_ENDPOINT}/${FAKE_ID}`)
      .expect(404)

    expect(body).toEqual({
      error: {
        clientVersion: expect.any(String),
        name: 'PrismaClientUnknownRequestError'
      }
    })
  })

})
