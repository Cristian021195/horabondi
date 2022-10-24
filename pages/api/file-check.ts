import { DIRECTORIES } from '../../src/Utils/directories';
import type { NextApiRequest, NextApiResponse } from 'next';
import { readFileSync, existsSync } from 'fs';


export default function handler(req: NextApiRequest,  res: NextApiResponse<any>){
    //let exist = existsSync(process.cwd()+DIRECTORIES.JSON_DIR_PRECIOS);
    let exist = existsSync(process.cwd()+DIRECTORIES.JSON_DIR_HORARIOS+'exprebus-38-sabados-ns.json');
    res.status(200).json({ name: ''+process.cwd(), new_name: ''+__dirname, test_bool:  exist+"(JSON_DIR_HORARIOS+'exprebus-38-sabados-ns.json')"});
}
