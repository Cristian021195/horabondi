import { DIRECTORIES } from '../../src/Utils/directories';
import type { NextApiRequest, NextApiResponse } from 'next';
import { sendCustomMail, createTransporter } from '../../config/mailer';
import { readFileSync } from 'fs';


export default function handler(req: NextApiRequest,  res: NextApiResponse<any>){

  const output = readFileSync(DIRECTORIES.TEMPLATE_DIR+"mailer.html").toString()

  const transporter = createTransporter();
  sendCustomMail(transporter, ['mister2729@gmail.com'], output)


  res.status(200).json({ name: 'John Doe' })
}
