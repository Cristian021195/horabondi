import { createTransport, Transport, Transporter } from "nodemailer"

export const createTransporter = ()=>{
    const transport = createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth: {
            //user: process.env.MAILER_SECRET_USER,
            //pass: process.env.MAILER_SECRET_KEY
            user:process.env.MAILER_SECRECT_USER,
            pass:process.env.MAILER_SECRECT_KEY
        }
    })

    return transport;
}

export const sendCustomMail = async (transporter:Transporter, mail:string[], html:string) => {
    const info = await transporter.sendMail({
        from: process.env.MAILER_SECRET_USER,
        to: mail,
        subject: 'Asunto',
        html: html
    })
}