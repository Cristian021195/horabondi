import { OkPacket } from 'mysql2';
import type { NextApiRequest, NextApiResponse } from 'next';
import { pool } from '../../../config/db';
import {hashSync, genSaltSync} from "bcryptjs";
type Data = {
  name: string
}

//return Bcrypt.hashSync(password, Bcrypt.genSaltSync(8));

export default async function handler(req: NextApiRequest,  res: NextApiResponse<any>) {
  const {dni, email, image, name, contra, telefono, tipo} = req.body;
  const _contra = hashSync(contra, genSaltSync(8))
  try {

    if(req.body?.empresa !== undefined){
      
      const insert = await pool.query<OkPacket>("INSERT INTO usuarios (name ,contra ,telefono, email ,dni ,tipo) VALUES(?,?,?,?,?,?)",
      [name, _contra, telefono, email, dni, tipo]);
  
      if(insert[0].affectedRows > 0){
        const insert_ue = await pool.query<OkPacket>("INSERT INTO usuario_empresa (empresa, email) VALUES(?,?)",
        [req.body.empresa, email]);

        console.log('Se cargó usuario correctamente')
      }else{
        console.log('Erro al cargar usuario')
      }

    }else{
      const insert = await pool.query<OkPacket>("INSERT INTO usuarios (name ,contra ,telefono, email ,dni ,tipo) VALUES(?,?,?,?,?,?)",
      [name, _contra, telefono, email, dni, tipo]);
  
      if(insert[0].affectedRows > 0){
        console.log('Se cargó usuario correctamente')
      }else{
        console.log('Erro al cargar usuario')
      }  
    }
    
  } catch (error:any) {
    res.status(500).json({...error})
  }
  res.status(200).json({mensaje:'ok'})
}