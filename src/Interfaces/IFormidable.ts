import { NextApiRequest } from "next";

export interface IFormidableRequestsProps extends NextApiRequest {
    fieldCount: number,
    affectedRows: number,
    insertId: number,
    info: string,
    serverStatus: number,
    warningStatus: number,
}
export interface IFormidableCustomProps {
    uploaddir: string,
    uploadDir: string,
    maxFileSize: number,
    keepExtensions: boolean,
    parse: (req:NextApiRequest, any: (a:any,b:any,c:any)=>void) => void
}

export interface IFileFormidableProps{
    filepath:string,
    originalFilename: string,
}
export interface IFilesProps{
    archivo: any[] | null;
}