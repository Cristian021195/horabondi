import { IReactComponentChild } from "./IReact";

export interface IDataHorario extends IReactComponentChild{
    data_header?:string[],
    data_body?: [][],
    data_validity?: string
}

export interface ILocalStorageData {
    data_header: string[],
    data_body: any[],
    data_file: string
}

export interface IHorariosStorageData {
    data_header: string[],
    data_body: any[],
    data_file: string,
    data_validity:string
}