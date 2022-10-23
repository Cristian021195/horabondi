// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { compareSync } from 'bcryptjs';
import { OkPacket } from 'mysql2';
import type { NextApiRequest, NextApiResponse } from 'next';
import { pool } from '../../../config/db';
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
            if(compareSync(req.body.contra, data[0][0].contra)){
                const token = await sign(data[0][0], process.env.SECRET_KEY as string);
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
            }
        }else{
            res.status(500).send({error:true, mensaje: 'verifica mail o contraseña.'})
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({error:true, mensaje: 'No tienes cuenta, verifica mail o contraseña.'})
    }
}
