// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import { DIRECTORIES, REGEX } from '../../../src/Utils';


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    console.log(Object.keys(req.body).length > 0 ? 'lleno' : 'vacio')
    try {
        
        let files_arr = fs.readdirSync(process.cwd()+DIRECTORIES.JSON_DIR_HORARIOS).filter((dir:string,dir_i:number)=>dir.includes(req.query.empresa+''));
        let data = files_arr.map((fa,fa_i)=>{
            return {...JSON.parse(fs.readFileSync(process.cwd()+DIRECTORIES.JSON_DIR_HORARIOS+'/'+fa, {encoding:'utf-8'})), data_file:fa.replace(REGEX.DATA_TEXT,"")}
        })

        //console.log(data)
        //let data = JSON.parse(fs.readFileSync(DIRECTORIES.JSON_DIR+'/exprebus-38-sabado-ns.json', {encoding:'utf-8'}));
        res.status(200).json(data);
    } catch (err:Error | any) {
        res.status(400).send({error:true, mensaje:"No se encontro archivo de horario .json", detalle: err})
    }
  
}
