// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import { pool } from '../../config/db';
//import { v4 as uuidv4 } from 'uuid';

type Data = {
  name: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //const data = await pool.query("SHOW DATABASES")
  const data = await pool.query("SELECT * FROM usuarios;")
  //const data = await pool.query("UPDATE llaves SET llave = 'asdasd' WHERE archivo = 'exprebus-38-sabado-nsx'")
  res.status(200).json({ name: data[0]})
}