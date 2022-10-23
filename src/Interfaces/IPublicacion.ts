import { OkPacket } from "mysql2"

export interface IPublicacion {
    id:number, 
    imagen?:string,
    publicacion:string,
    titulo?:string, 
    empresa?:string,
    fecha:string
}
export interface IPublicacionRow extends OkPacket {
    id:number, 
    imagen:string,
    publicacion:string,
    titulo:string, 
    empresa:string,
    fecha:string
}