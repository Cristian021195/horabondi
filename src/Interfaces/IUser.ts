export interface ILoginUser {
    name:string,
    email:string,
    image:string,
    tipo?:string
}

export interface ILocationUser {
    enabled:boolean,
    latitude:string,
    longitude:string,
}

export interface IUserConfiguration {
    tema:string,
    fuente:string,
    notificaciones:boolean,
    ubicacion: ILocationUser,
    narrador: boolean,
    idle: boolean
}

export interface IUserLoggedData{
    name?:string,
    image?:string,
    email?:string
}

export interface IUserToken{
    expiration?:number,
    token?:string,
    user?:IUserLoggedData
}
