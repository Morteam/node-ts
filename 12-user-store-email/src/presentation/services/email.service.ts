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

    constructor(mailerService: string, mailerEmail: string, sendEmailPass: string){
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
}
