
import type { NextApiRequest, NextApiResponse } from 'next';
import { pool } from '../../../config/db';
import { OkPacket } from 'mysql2';
import { IPublicacionRow } from '../../../src/Interfaces';

export default async function handler(req: NextApiRequest,  res: NextApiResponse) {
    try {
        if(req.query.id){
            const data = await pool.query<IPublicacionRow[]>("SELECT * FROM publicaciones WHERE id = ?;", [req.query.id])
            const rows = data[0][0];
            res.status(200).send(rows)            
        }
    } catch (err:any) {
        res.status(200).send({error:true, mensaje: err.message})
    }
}
