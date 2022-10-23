// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import { DIRECTORIES, REGEX } from '../../src/Utils';
import { pool } from '../../config/db';
import { OkPacket } from 'mysql2';

interface ILlavesArchivo{
    empresa:string
    precios:boolean,
    horarios:boolean,
    archivos: ILlavesRows[]
}
interface ILlavesRows extends OkPacket{
    llave:string,
    archivo:string
}

async function processMyArray (body:ILlavesArchivo) {
    const result:string[] = [];
    for(const archivo of body.archivos){ //x is a bad name by the way
      const data = await myAsyncFunction(archivo, body);
      result.push(data);
    }
    
    return result.filter((e,e_i)=> e.length > 0);
}

async function sinArchivos(body:ILlavesArchivo){
    try {
        if(body.precios === true){
            const data = await pool.query<ILlavesRows[]>(`SELECT * FROM llaves WHERE archivo LIKE '%${body.empresa}%' AND archivo LIKE '%precio%';`)
            const rows:ILlavesRows[] = data[0];
            if(rows.length > 0){
                return rows.map((r,r_i)=>r.archivo)
            }else{//console.log('no existe dicha llave aun, el listado de precios / horarios probablemente no se cargó aun')
                return []
            }
        }else{
            const data = await pool.query<ILlavesRows[]>(`SELECT * FROM llaves WHERE archivo LIKE '%${body.empresa}%' AND (archivo LIKE '%-sn%' OR archivo LIKE '%-ns%' OR archivo LIKE '%-eo%' OR archivo LIKE '%-oe%');`)
            const rows:ILlavesRows[] = data[0];
            if(rows.length > 0){
                return rows.map((r,r_i)=>r.archivo)
            }else{//console.log('no existe dicha llave aun, el listado de precios / horarios probablemente no se cargó aun')
                return []
            }
        }
    } catch (err:any) {
        throw new Error('Error al leer bbdd o error de server')
    }
}

async function myAsyncFunction(ar:ILlavesRows, body:ILlavesArchivo){
    let outdated_key;
    try {
        const data = await pool.query<ILlavesRows[]>("SELECT `llave`, `archivo` as `data_file` FROM `llaves` WHERE `archivo` = ? ;", [ar.archivo])
        const rows:ILlavesRows[] = data[0];
        if(rows.length > 0){
            if(rows[0].llave === ar.llave){  //console.log('la llave coincide, esta actualizada la lista de precios / horarios')                
                outdated_key = '';
            }else{
                outdated_key = ar.archivo;   //console.log('la llave NO coincide, ¡esta desactualizada la lista de precios / horarios!')
            }
        }else{//console.log('no existe dicha llave aun, el listado de precios / horarios probablemente no se cargó aun')
            outdated_key = '';
        }
        return outdated_key;
    } catch (err:any) {
        throw new Error('Error al leer bbdd o error de server')
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const body:ILlavesArchivo = req.body;
    let llaves_desactualizadas:string[] = [];

    try {
        if(body.archivos.length > 0){
            processMyArray(body).then(data=>{
                llaves_desactualizadas = data;
                if(Array.isArray(llaves_desactualizadas)){
                    if(llaves_desactualizadas.length > 0){
                        res.send({error: false, mensaje: "Se encontraron llaves desactualizadas", outdated: llaves_desactualizadas})
                    }else{
                        res.send({error: false, mensaje: "Todas las llaves estan actualizadas", outdated: llaves_desactualizadas})
                    }
                }else{
                    res.status(500).send({error:true, mensaje:"error de respuesta del servidor, la variable no es array"})            
                }
            })
        }else{
            sinArchivos(body).then(data=>{
                res.send({error: false, mensaje: "Se encontraron llaves desactualizadas", outdated: data})
            })
            //res.send({error: false, mensaje: "Se encontraron llaves desactualizadas", outdated: sinArchivos(body.empresa)})
        }
    } catch (error) {
        res.status(500).send({error:true, mensaje:error})
    }
}
