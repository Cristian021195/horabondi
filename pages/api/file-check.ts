import { DIRECTORIES } from '../../src/Utils/directories';
import type { NextApiRequest, NextApiResponse } from 'next';
import { readFileSync } from 'fs';


export default function handler(req: NextApiRequest,  res: NextApiResponse<any>){


  res.status(200).json({ name: 'John Doe'+process.cwd() })
}
