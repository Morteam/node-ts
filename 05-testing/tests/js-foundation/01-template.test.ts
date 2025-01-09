import { emailTemplate } from '../../src/js-foundation/01-template';

describe('js-foundation/01-template', () => {

    test('emailTemplate should greet', () => {
        const GREETING = 'Hi, '

        expect(emailTemplate).toContain(GREETING)
    })

    test('emailTemplate should contain {{name}}', () => {
        const NAME = /{{name}}/

        expect(emailTemplate).toMatch(NAME)
    })

})
