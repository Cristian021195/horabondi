import { OkPacket } from 'mysql2';
import type { NextApiRequest, NextApiResponse } from 'next';
import { pool } from '../../../config/db';
import { pushPublicacion } from '../../../src/Utils';
//import { v4 as uuidv4 } from 'uuid';


interface IPublicacionBody extends NextApiRequest{
    body: IpubB
}
interface IpubB {
    imagen:string,
    publicacion:string,
    empresa:string,
    titulo:string
}

export default async function handler(req: IPublicacionBody,  res: NextApiResponse) {
    const {imagen, publicacion, empresa, titulo} = req.body;//publicacion

    console.log(publicacion, empresa, titulo)

    try {
        const insert = await pool.query<OkPacket>("INSERT INTO publicaciones (publicacion, empresa, titulo) VALUES (?,?,?)", [publicacion, empresa, titulo])
        if(insert[0].affectedRows > 0){
            pushPublicacion(publicacion, empresa, titulo, imagen, '', insert[0].insertId, process.env.ONE_SIGNAL_KEY+"")
            res.status(200).send({error:false, mensaje: 'Publicacion cargada correctamente'})
        }else{
            res.status(500).send({error:false, mensaje: 'Error al cargar publicacion'})
        }

        res.status(200).send({error:false, mensaje: 'Publicacion cargada correctamente'})
    } catch (error) {
        console.log(error)
        res.status(500).send({error:true, mensaje: 'Error al realizar consulta'})
    }
}