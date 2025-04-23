import nodemailer from 'nodemailer';
import { EmailService, SendEmailProps } from './email-service'

describe('Email service test', () => {

    const sendEmailMock = jest.fn()

    nodemailer.createTransport = jest.fn().mockReturnValue({
        sendMail: sendEmailMock
    })

    const emailService = new EmailService();

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('Should send email', async () => {
        const propsMock: SendEmailProps = {
            to: 'ferando@google.com ',
            subject: 'Test mock',
            htmlBody: '<p>Hi from the moon</p>',
        }

        const emailSent = await emailService.sendEmail(propsMock);

        expect(emailSent).toBe(true)
        expect(sendEmailMock).toHaveBeenCalledTimes(1)
        expect(sendEmailMock).toHaveBeenCalledWith({
            attachments: [],
            html: propsMock.htmlBody,
            subject: propsMock.subject,
            to: propsMock.to,
        })
    })

    test('Should send email with attachments', async () => {
        const mockEmail: SendEmailProps = {
            to: 'ferando@google.com ',
            subject: 'Daily logs report',
            htmlBody: '<h2>Daily logs report</h2><p>Lorem ipsum dolor sit amet v1</p>'
        }

        await emailService.sendEmailWithFSLogs(mockEmail.to);
        
        expect(sendEmailMock).toHaveBeenCalledWith({
            to: mockEmail.to,
            subject: mockEmail.subject,
            html: expect.any(String),
            attachments: expect.arrayContaining([
                expect.objectContaining({
                    filename: expect.any(String),
                    path: expect.any(String),
                })
            ])
        })
    })

    // test('', () => {})
})