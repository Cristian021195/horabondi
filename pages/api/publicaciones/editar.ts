import { OkPacket } from 'mysql2';
import type { NextApiRequest, NextApiResponse } from 'next';
import { pool } from '../../../config/db';
//import { v4 as uuidv4 } from 'uuid';


interface IPublicacionBody extends NextApiRequest{
    body: IpubB
}
interface IpubB {
    id:number,
    imagen:string,
    publicacion:string,
    empresa:string,
    titulo:string
}

export default async function handler(req: IPublicacionBody,  res: NextApiResponse) {
    const {imagen, publicacion, empresa, titulo, id} = req.body;//publicacion

    try {
        const insert = await pool.query<OkPacket>("UPDATE publicaciones SET publicacion = ?, empresa = ?, titulo = ? WHERE id = ?", [publicacion, empresa, titulo, id])
        if(insert[0].affectedRows > 0){    
            res.status(200).send({error:false, mensaje: 'Publicacion editada correctamente'})
        }else{
            res.status(500).send({error:false, mensaje: 'Error al editar publicacion'})
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({error:true, mensaje: 'Error al realizar consulta'})
    }
}