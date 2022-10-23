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

/*
$common = "SELECT fecha, clientes.nombre as cliente, usuarios.nombre as vendedor, comprobantes.estado, total, id_comprobante FROM comprobantes INNER JOIN clientes ON
        clientes.id_cliente = comprobantes.id_cliente INNER JOIN usuarios ON usuarios.mail = comprobantes.mail WHERE comprobantes.fecha > '$_desde' AND comprobantes.fecha < '$_hasta'";
*/

export default async function handler(req: IPublicacionBody,  res: NextApiResponse) {
    let {empresa, desde, hasta} = req.body;
    try {//
        const data = await pool.query<OkPacket[]>(`SELECT * FROM publicaciones WHERE fecha > ? AND fecha < ? AND empresa = ?;`,[desde+" 00:00:00", hasta+" 23:59:59", empresa])
        if(data[0].length > 0){
            res.status(200).send({error:false, mensaje: 'Se encontraron publicaciones', publicaciones: data[0]})
        }else{
            res.status(400).send({error:false, mensaje: 'Sin publicaciones'})
        }
    } catch (error) {
        res.status(500).send({error:true, mensaje: 'Error al realizar consulta'})
    }
}//SELECT * FROM publicaciones WHERE fecha > '2022-09-26 00:00:00' AND fecha < '2022-09-29 23:59:59' AND empresa = 'exprebus';