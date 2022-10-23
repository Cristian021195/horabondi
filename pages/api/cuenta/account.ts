// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { compareSync } from 'bcryptjs';
import { OkPacket } from 'mysql2';
import type { NextApiRequest, NextApiResponse } from 'next';
import { pool } from '../../../config/db';
import { createTransporter, sendCustomMail } from '../../../config/mailer';
import { deleteAccountMail } from '../../../src/Helpers';
import {verify, sign} from "../../../src/Helpers";

interface IUserListQuery extends OkPacket {
  email: string
  contra: string,
  name:string,
  image:string,
  tipo:string
}

export default async function handler(req: NextApiRequest,  res: NextApiResponse<any>) {
    try {

        const data = await pool.query<IUserListQuery[]>("SELECT email, contra, name, image, tipo FROM usuarios WHERE email = ?",[req.body.email])
        if(data[0].length > 1){
            res.status(500).send({error:true, mensaje: 'Contacte con el administrador por mail duplicado.'})
        }else if(data[0].length === 1){
            const token = await sign(data[0][0], process.env.SECRET_KEY as string);
            const transporter = createTransporter();
            sendCustomMail(transporter, ['mister2729@gmail.com'], deleteAccountMail(`http://localhost:3000/delete?token=${token}&email=${req.body.email}`))
            /*let insert = await pool.query<OkPacket>("INSERT INTO `usuario_token` (`email`, `token`) VALUES (?, ?)", [req.body.email, token]);
            let insert = await pool.query<OkPacket>("REPLACE INTO `usuario_token` (`email`, `token`) VALUES (?, ?)", [req.body.email, token]);
            if(insert[0].affectedRows > 0){
                res.send({
                    expires: (new Date().getTime() / 1000) + 3600,
                    token,
                    user:{
                        email:data[0][0].email,
                        name:data[0][0].name,
                        image:data[0][0].image,
                        tipo:data[0][0].tipo,
                    }
                });
            }else{
                res.status(500).send({error:true, mensaje:'No se pudo guardar token/email para eliminacion de cuenta'})
            }*/
            res.send({
                expires: (new Date().getTime() / 1000) + 3600,
                token
            });
        }else{
            res.status(500).send({error:true, mensaje: 'verifica mail o contraseña.'})
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({error:true, mensaje: 'No tienes cuenta, verifica mail o contraseña.'})
    }
}
