import nodemailer, { Transporter } from 'nodemailer';
import { Attachment } from 'nodemailer/lib/mailer';

export interface SendEmailProps {
    to: string | string[];
    subject: string;
    htmlBody: string;
    attachments?: Attachment[]
}

export class EmailService {
    private transporter : Transporter;

    constructor(
        mailerService: string,
        mailerEmail: string,
        sendEmailPass: string,
        private readonly postToProvider: boolean
    ){
        this.transporter = nodemailer.createTransport({
            service: mailerService,
            auth: {
                user: mailerEmail,
                pass: sendEmailPass
            }
        })
    }

    async sendEmail(props: SendEmailProps):Promise<boolean> {
        const { to, subject, htmlBody, attachments = [] } = props;

        try {
            if(!this.postToProvider) return true;

            await this.transporter.sendMail({
                to,
                subject,
                html: htmlBody,
                attachments
            })

            return true;
        } catch(error) {
            console.debug('error ', error)

            return false;
        }
    }
}
