import { createTransport, Transport, Transporter } from "nodemailer"

export const createTransporter = ()=>{
    const transport = createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth: {
            //user: process.env.MAILER_SECRET_USER,
            //pass: process.env.MAILER_SECRET_KEY
            user:'cristiangramajo015@gmail.com',
            pass:'pnjciltixjfknfse'
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