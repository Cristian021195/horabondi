import { OkPacket } from 'mysql2';
import type { NextApiRequest, NextApiResponse } from 'next';
import { pool } from '../../../config/db';
//import { v4 as uuidv4 } from 'uuid';


interface IPublicacionBody extends NextApiRequest{
    body: IpubB
}
interface IpubB {
    id:number
}

export default async function handler(req: IPublicacionBody,  res: NextApiResponse) {
    const {id} = req.body;//publicacion

    try {
        const insert = await pool.query<OkPacket>("DELETE FROM publicaciones WHERE id = ?", [id])
        if(insert[0].affectedRows > 0){
            res.status(200).send({error:false, mensaje: 'Eliminada correctamente'})
        }else{
            res.status(500).send({error:false, mensaje: 'Error al eliminar publicacion'})
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({error:true, mensaje: 'Error al realizar consulta'})
    }
}