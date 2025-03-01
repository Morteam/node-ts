import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugin';

export interface SendEmailProps {
    to: string;
    subject: string;
    htmlBody: string;
    // TODO: attachments
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
        const { to, subject, htmlBody } = props;

        try {
            const sentInformation = await this.transporter.sendMail({
                to,
                subject,
                html: htmlBody
            })

            return true;
        } catch(error) {
            return false;
        }
    }
}
