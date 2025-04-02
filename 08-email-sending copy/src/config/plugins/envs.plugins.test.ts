import { envs } from './envs.plugin';

describe('Envs tests', () => {

    beforeEach(() => {
        jest.resetModules();
    })

    test('Should return env options', () => {
        expect(envs).toEqual({
            PORT: 3000,
            MAILER_SERVICE: 'gmail',
            MAILER_EMAIL: 'manu.c2astro@gmail.com',
            MAILER_SECRET_KEY: 'ptgwjajdhigayzvx',
            PROD: false,
            MONGO_URL: 'mongodb://manu:7654321@localhost:27017/',
            MONGO_DB_NAME: 'NOC-TEST',
            MONGO_USER: 'manu',
            MONGO_PASS: '7654321'
        })
    })

    test('Should fail if the port is not a number', async () => {
        process.env.PORT = 'NO_PORT';

        try {
            const mockEnvs = await import('./envs.plugin');
            console.log(mockEnvs)

            expect(true).toBe(false) // Trigger the catch
        } catch(error) {
            expect(`${error}`).toContain('"PORT" should be a valid integer')
        }
    })

});