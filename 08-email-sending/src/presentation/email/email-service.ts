import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugin';
import { Attachment } from 'nodemailer/lib/mailer';

export interface SendEmailProps {
    to: string | string[];
    subject: string;
    htmlBody: string;
    attachments?: Attachment[]
}

export class EmailService {
    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY
        }
    })

    async sendEmail(props: SendEmailProps):Promise<boolean> {
        const { to, subject, htmlBody, attachments = [] } = props;

        try {
            await this.transporter.sendMail({
                to,
                subject,
                html: htmlBody,
                attachments
            })

            return true;
        } catch(error) {
            return false;
        }
    }

    // TODO: Review if this logic should be here 
    async sendEmailWithFSLogs(to: string | string[]) {
        const LOG_PATH = './logs/'
        const LOGS_NAMES = ['logs-all.log', 'logs-medium.log', 'logs-high.log']

        const dataToSend = {
            to,
            subject: 'Daily logs report',
            from: envs.MAILER_EMAIL,
            htmlBody: 
            `
            <h2>Daily logs report</h2>
            <p>Lorem ipsum dolor sit amet v1</p>
            `,
            attachments: [
                {
                    filename: 'lotso.jpg',
                    path: 'https://i.blogs.es/8bdd1a/lotso/1200_800.jpeg'
                },
                ...LOGS_NAMES.map(logName => ({
                    filename: logName,
                    path: `${LOG_PATH}${logName}`
                }))
            ]
        }

        await this.sendEmail(dataToSend)
    }
}
