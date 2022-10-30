import { OkPacket } from 'mysql2';
import type { NextApiRequest, NextApiResponse } from 'next';
import { pool } from '../../../config/db';
import { v4 as uuidv4 } from 'uuid';

interface ICustomOkPacket extends OkPacket{
    length:number,
    llave?:string,
    archivo?:string, 
    creado?:string,
    editado?:string
}

interface ILlaveFileds {
    llave:string,
    archivo:string, 
    creado:string,
    editado:string
}

export default async function handler(req: NextApiRequest,  res: NextApiResponse<any>){

    let llaves = req.body?.llaves;

    try {
        if(llaves==='todas'){
            let data = await pool.query<ICustomOkPacket[]>("SELECT * FROM llaves;");
            let aux_arr;
    
            if(data[0].length > 0){
                aux_arr=data[0];
            }
            console.log(aux_arr)
            aux_arr?.forEach( async (aux:ICustomOkPacket, aux_i:number)=>{
                let update = await pool.query<ICustomOkPacket>("UPDATE llaves SET llave = ? WHERE archivo = ?;",[uuidv4(), aux.archivo]);
            })
    
            res.status(200).json({error:false, mensaje:'pasdas'});
    
        }else{
            res.status(200).json({error:true, mensaje:'para establecer a futuro'});
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error:true, mensaje:'error al actualizar las llaves'});
    }
}
 