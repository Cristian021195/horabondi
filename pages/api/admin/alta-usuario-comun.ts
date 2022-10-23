import type { NextApiRequest, NextApiResponse } from 'next';
import { pool } from '../../../config/db';

type Data = {
  name: string
}

export default async function handler(req: NextApiRequest,  res: NextApiResponse<any>) {
    const data = await pool.query("INSERT INTO usuarios (name ,contra ,telefono ,dni ,tipo) VALUES()")
    res.status(200).json({mensaje:'ok'})
}
