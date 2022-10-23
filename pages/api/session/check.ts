// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import { verify } from '../../../src/Helpers';

export default async function handler(req: NextApiRequest,  res: NextApiResponse<any>) {

    const {cookies} = req;
    const token = cookies.token;

    if(token !== undefined){
        try {
            const data = await verify(token, process.env.SECRET_KEY as string)
            res.send({error:false, mensaje:'token valido', user: {name:data.name, email:data.email, image:data.image, tipo:data.tipo}, })
        } catch (error) {
            res.status(404).send({error:true, mensaje:'token invalido'})
        }
    }else{
        res.status(500).send({error:true, mensaje:'sin token invalido'})
    }
}
