import { OkPacket } from 'mysql2';
import type { NextApiRequest, NextApiResponse } from 'next';
import { pool } from '../../../config/db';
//import { v4 as uuidv4 } from 'uuid';


interface IPublicacionBody extends NextApiRequest{
    body: IFilterPub
}
interface IFilterPub {
    empresa:string,
    desde:string,
    hasta:string,
}

export default async function handler(req: IPublicacionBody,  res: NextApiResponse) {
    try {//
        const data = await pool.query<OkPacket[]>(`SELECT * FROM publicaciones WHERE empresa = ? OR empresa = 'oficial' ORDER BY fecha DESC LIMIT 10;`,[])
        if(data[0].length > 0){
            res.status(200).send(data[0])
        }else{
            res.status(400).send({error:false, mensaje: 'Sin publicaciones'})
        }
    } catch (error) {
        res.status(500).send({error:true, mensaje: 'Error al realizar consulta'})
    }
}