// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import { DIRECTORIES } from '../../src/Utils/directories';



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    try {
        let files = fs.readdirSync(DIRECTORIES.JSON_DIR);
        let data = JSON.parse(fs.readFileSync(DIRECTORIES.JSON_DIR+'/exprebus-38-sabado-ns.json', {encoding:'utf-8'}));
        res.status(200).json(data);
    } catch (err:Error | any) {
        res.status(400).send({error:true, mensaje:"No se encontro archivo de horario .json", detalle: err})
    }
  
}
