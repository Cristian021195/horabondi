import { IReactComponentChild } from './IReact';
export interface IResultadoPrecio extends IReactComponentChild{
    origen:string,
    destino:string,
    precio:number
}

export interface IDataPrecio {
    data_file:string,
    data_body:any[],
    data_validity: string
}

export interface IOpcionesCiudadesPrecios {
    tabla:string,
    ruta:number,
    ciudades: string[],
}