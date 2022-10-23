import type { NextApiRequest, NextApiResponse } from 'next';
import { verify } from '../../../src/Helpers';
import { pool } from '../../../config/db';
import { OkPacket } from 'mysql2';


export default async function handler(req: NextApiRequest,  res: NextApiResponse<any>){
  //const output = readFileSync(DIRECTORIES.TEMPLATE_DIR+"mailer.html").toString()
  //const transporter = createTransporter();
  const {token, email} = req.body;

  if(token !== undefined){
    try {
        const data = await verify(token, process.env.SECRET_KEY as string);

        if(data){
          const del = await pool.query<OkPacket>("DELETE FROM usuarios WHERE email = ?;", [data?.email])
          if(del[0].affectedRows > 0){
              res.redirect('/login')
              //res.status(200).send({error:false, mensaje: 'Eliminada correctamente'})
          }else{
              res.status(500).send({error:false, mensaje: 'Error al eliminar cuenta'})
          }
        }

    } catch (error) {
        res.status(500).send({error:true, mensaje:'token invalido'})
    }
  }else{
      res.status(500).send({error:true, mensaje:'sin token valido'})
  }
  //res.status(200).json({ name: 'John Doe', body:req.body })
}
