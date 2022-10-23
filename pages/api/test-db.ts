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
  const data = await pool.query("SELECT * FROM llaves WHERE archivo = 'exprebus-38-sabado-ns'")
  //const data = await pool.query("UPDATE llaves SET llave = 'asdasd' WHERE archivo = 'exprebus-38-sabado-nsx'")

  //pool.query("SELECT * FROM llaves WHERE archivo = 'exprebus-38-sabado-nsx'").then(data=>{res.status(200).json({ name: data[0] })})

  res.status(200).json({ name: data[0]})
}


/*

  [{
    "llave": "8e2ff99e-05b8-43ef-8f53-a459817fffa7",
    "archivo": "exprebus-38-sabado-ns"
  }] or []

  {
    "fieldCount": 0,
    "affectedRows": 0,
    "insertId": 0,
    "info": "Rows matched: 0  Changed: 0  Warnings: 0",
    "serverStatus": 2,
    "warningStatus": 0,
    "changedRows": 0
  }
*/