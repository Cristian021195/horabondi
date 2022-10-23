import type { NextApiRequest, NextApiResponse } from 'next';
import { pool } from '../../../config/db';
import { OkPacket } from 'mysql2';

interface ILlaves{
    precios:boolean,
    horarios:boolean,
    empresa:string
}
interface ILlavesRows extends OkPacket{
    llave:string,
    archivo:string
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const body:ILlaves = req.body;
    try {
        if(body.precios){
            const data = await pool.query<ILlavesRows[]>("SELECT `llave`, `archivo` as `data_file` FROM `llaves` WHERE `archivo` LIKE '%precio%' ;")
            const rows:ILlavesRows[] = data[0];

            res.status(200).send({error:false, mensaje: 'llego solicitud de llave precio', llaves: rows})
        }else if(body.horarios){
            const data = await pool.query<ILlavesRows[]>(`SELECT llave, archivo as data_file FROM llaves WHERE (archivo LIKE '%-sn%' OR archivo LIKE '%-ns%' OR archivo LIKE '%-eo%' OR archivo LIKE '%-oe%') AND (archivo LIKE '%${body.empresa}%');`)// 
            const rows:ILlavesRows[] = data[0];

            res.status(200).send({error:false, mensaje: 'llego solicitud de llave horario', llaves: rows})
        }
    } catch (err:any) {
        res.status(200).send({error:true, mensaje: err.message})
    }  
}
