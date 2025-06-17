import { envs } from '../config/plugins/envs.plugin';
import { Server } from '../presentation/server'

jest.mock('../presentation/server') // 1. Mock whole file

describe('App.ts', () => {
  test('Should call the Server with the arguments and start', async () => {
    await import('../app') // 2. Import and execute whole file

    // 3. Expecting
    expect(Server).toHaveBeenCalledTimes(1)
    expect(Server).toHaveBeenCalledWith({
      port: envs.PORT,
      publicPath: envs.PUBLIC_PATH,
      routes: expect.any(Function),
    })

    expect(Server.prototype.start).toHaveBeenCalledTimes(1)
  })
})
