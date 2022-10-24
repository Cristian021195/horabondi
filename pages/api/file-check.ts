import { DIRECTORIES } from '../../src/Utils/directories';
import type { NextApiRequest, NextApiResponse } from 'next';
import { readFileSync, existsSync } from 'fs';


export default function handler(req: NextApiRequest,  res: NextApiResponse<any>){
    let exist = existsSync(process.cwd()+DIRECTORIES.JSON_DIR_PRECIOS)

  res.status(200).json({ name: 'John Doe'+process.cwd(), new_name: 'John Doe'+__dirname, test_bool:  exist})
}
