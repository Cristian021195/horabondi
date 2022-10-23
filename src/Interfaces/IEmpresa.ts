export interface IInfoEmpresa{
    direccion:string,
    telefono:string[],
    mail:string[],
    provincia:string[],
    website:string[],
    redes:string[]
    stars:number
}
export interface IEmpresaItem{
    anchor:string
    alias:string,
    nombre:string,
    img:string,
    precios:boolean,
    color:string
    debito?:boolean,
    abono?:boolean,
    informacion?:IInfoEmpresa
    descripcion?:string
}